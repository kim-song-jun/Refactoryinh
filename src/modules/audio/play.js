import ready from '../../assets/audios/ready-cut.mp3';
import niceshot from '../../assets/audios/niceshot-cut.mp3';

export const play = (audio) => new Audio(audio).play();

export const readyPlay = () => play(ready);
export const niceShot = () => play(niceshot);
