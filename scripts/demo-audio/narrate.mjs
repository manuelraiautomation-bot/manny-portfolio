import {KokoroTTS} from 'kokoro-js';
import {mkdir,writeFile} from 'node:fs/promises';
export const scripts={
 'ai-receptionist':[
 [0,4,'From a phone call to a confirmed appointment.'],
 [4,6,'The AI receptionist collects the request and connects to the booking workflow.'],
 [10,6,'It checks Google Calendar and offers available times for the caller to choose.'],
 [16,6,'The workflow validates the details, checks the slot again, and creates the booking.'],
 [22,5,'Email alerts notify the team. Call details are recorded for follow-up.'],
 [27,3,'Connected calls. Organized appointments.']],
 'property-enquiry':[
 [0,4,'One property enquiry. Every detail connected.'],
 [4,6,'A webhook captures the request and routes the enquiry with its property reference.'],
 [10,6,'The workflow creates an Asana task, linking viewing information and relevant property files.'],
 [16,6,'Google Drive and Sheets supply documents and viewing links for the next step.'],
 [22,5,'New follow-up notes are merged into the existing task, keeping its history.'],
 [27,3,'Less chasing. Clearer follow-ups.']]
};
const tts=await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX',{dtype:'q8',device:'cpu'});
for(const [name,segments] of Object.entries(scripts)){
 const dir=`public/audio/featured/${name}`;await mkdir(dir,{recursive:true});
 await writeFile(`${dir}/timing.json`,JSON.stringify(segments));
 for(let i=0;i<segments.length;i++){
  const audio=await tts.generate(segments[i][2],{voice:'am_michael',speed:1});
  await audio.save(`${dir}/scene-${i+1}.wav`);console.log(name,i+1);
 }
}
