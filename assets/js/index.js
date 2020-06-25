import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from "./plugins/AutoPause.js";

const videoSrc = document.querySelector('video');
const button = document.querySelector('#play');
const mute = document.querySelector('#unmute');

const configs = {src: videoSrc, plugins: [new AutoPlay(), new AutoPause()]};
const player = new MediaPlayer(configs);

button.addEventListener('click', async () => {
    try {
        await player.start();
    } catch (e) {
        console.error(e);
    }
});

mute.addEventListener('click', () => {
    if (videoSrc.muted) {
        player.unMute();
    } else {
        player.mute();
    }

});
