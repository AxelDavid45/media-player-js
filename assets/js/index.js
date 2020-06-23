import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js';
const videoSrc = document.querySelector('video');
const button = document.querySelector('button');
const configs = {src: videoSrc, plugins: [new AutoPlay()]};
const player = new MediaPlayer(configs);

button.onclick = async () => {
    await player.start();
};
