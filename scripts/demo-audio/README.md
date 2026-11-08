# Featured demo audio

These scripts add scene-timed male Kokoro narration, original synthesized ambient music, and original synthesized UI/transition effects to the existing 30-second demo visuals. No third-party music samples are used. Music is ducked underneath speech; outputs retain the original video stream.

Run from the companion `remotion-shorts` workspace (which has `kokoro-js@1.2.1`, the original Facebook narration, and its audio cache), with Python NumPy and FFmpeg available:

1. `node --use-env-proxy /workspace/manny-portfolio/scripts/demo-audio/narrate.mjs`
2. `python /workspace/manny-portfolio/scripts/demo-audio/mix.py`

Generated mixes are written to `public/audio/featured/*-mixed.mp4` in that workspace; review before copying into the portfolio's `public/demos/`. The mixer also creates English WebVTT captions for the first two videos. Facebook retains its existing narration and captions. Keep original source media untouched to avoid mixing audio twice.
