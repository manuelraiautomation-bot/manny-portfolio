"""Run from remotion-shorts after narrate.mjs. Synthesizes original music and FX."""
import json, subprocess as sp, wave
from pathlib import Path
import numpy as np
SR=48000
portfolio=Path('/workspace/manny-portfolio')
root=Path('public/audio/featured');root.mkdir(parents=True,exist_ok=True)
def run(args): sp.run(['ffmpeg','-v','error','-y',*map(str,args)],check=True)
def wav(path,data):
 with wave.open(str(path),'wb') as w:
  w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((np.clip(data,-1,1)*32767).astype('<i2').tobytes())
def stamp(sec):return f'00:{int(sec)//60:02d}:{int(sec)%60:02d}.000'
for index,name in enumerate(['ai-receptionist','property-enquiry','facebook-ai-agent']):
 music=np.zeros((30*SR,2));fx=music.copy();rng=np.random.default_rng(81+index)
 def add(target,start,sig,gain,pan=0):
  offset=int(start*SR);n=min(len(sig),len(target)-offset)
  target[offset:offset+n]+=sig[:n,None]*gain*np.array([np.sqrt((1-pan)/2),np.sqrt((1+pan)/2)])
 # Warm ambient chord bed, sparse soft arpeggios: original synthesized score.
 chords=[[146.83,174.61,220,261.63],[130.81,164.81,196,246.94],[174.61,220,261.63,329.63],[130.81,174.61,220,293.66]]
 for k in range(4):
  dur=min(8.2,30-k*7.5);t=np.arange(int(dur*SR))/SR
  env=np.minimum(t/1.4,1)*np.minimum((dur-t)/1.8,1)
  sig=sum(np.sin(2*np.pi*f*t)+.15*np.sin(2*np.pi*(f*1.002)*t) for f in chords[(k+index)%4])/5
  add(music,k*7.5,sig*env,.065)
 for k in range(24):
  t=np.arange(int(.8*SR))/SR;f=chords[(k//6+index)%4][k%4]*2
  add(music,.5+k*1.2,np.sin(2*np.pi*f*t)*(1-np.exp(-t*90))*np.exp(-t*6),.022,(-1 if k%2 else 1)*.35)
 for start in [3.82,9.82,15.82,21.82,26.82]:
  t=np.arange(int(.36*SR))/SR
  noise=np.convolve(rng.normal(size=len(t)),np.ones(32)/32,mode='same')
  add(fx,start,noise*np.sin(np.pi*t/.36)**2,.16)
 cues=[(.65,523),(4.6,660),(4.76,880),(10.5,587),(11.2,740),(16.6,660),(17,880),(22.6,523),(23.1,659),(27.4,523),(27.55,659),(27.7,784)]
 for start,f in cues:
  t=np.arange(int(.55*SR))/SR
  add(fx,start,(np.sin(2*np.pi*f*t)+.15*np.sin(2*np.pi*2*f*t))*(1-np.exp(-t*150))*np.exp(-t*13),.065)
 fade=np.minimum(np.arange(30*SR)/SR,1)*np.minimum((30-np.arange(30*SR)/SR)/1.5,1)
 wav(root/f'{name}-music.wav',music*fade[:,None]);wav(root/f'{name}-fx.wav',fx*fade[:,None])
 if index<2:
  directory=root/name;segments=json.loads((directory/'timing.json').read_text())
  for i,(start,duration,text) in enumerate(segments,1):
   src=directory/f'scene-{i}.wav'
   length=float(sp.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(src)]))
   tempo=max(1,length/(duration-.3));print(name,i,'tempo',round(tempo,2),flush=True)
   run(['-i',src,'-af',f'atempo={tempo},loudnorm=I=-17:TP=-2:LRA=7,aresample=48000,apad,atrim=duration={duration},afade=t=out:st={duration-.08}:d=0.08','-ac','1',directory/f'timed-{i}.wav'])
  (directory/'concat.txt').write_text(''.join(f"file 'timed-{i}.wav'\n" for i in range(1,7)))
  voice=root/f'{name}-voice.wav'
  run(['-f','concat','-safe','0','-i',directory/'concat.txt','-c:a','pcm_s16le',voice])
  (portfolio/f'public/demos/{name}.vtt').write_text('WEBVTT\n\n'+'\n\n'.join(f'{stamp(s)} --> {stamp(s+d)}\n{text}' for s,d,text in segments)+'\n')
 else: voice=Path('public/audio/facebook-narration.wav')
 output=root/f'{name}-mixed.mp4'
 # Duck music under speech; FX stay restrained. A limiter protects transient peaks.
 run(['-i',portfolio/f'public/demos/{name}.mp4','-i',voice,'-i',root/f'{name}-music.wav','-i',root/f'{name}-fx.wav','-filter_complex','[1:a]aresample=48000,asplit=2[v][key];[2:a][key]sidechaincompress=threshold=0.025:ratio=4:attack=25:release=350[bed];[v][bed][3:a]amix=inputs=3:normalize=0,alimiter=limit=0.89:level=false[a]','-map','0:v:0','-map','[a]','-c:v','copy','-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-movflags','+faststart','-t','30',output])
 print('Mixed',output,flush=True)
