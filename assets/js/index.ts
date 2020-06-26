import MediaPlayer from "./MediaPlayer";
import AutoPlay from './plugins/AutoPlay';
import AutoPause from "./plugins/AutoPause";

const videoSrc = document.querySelector('video');
const button: HTMLElement = document.querySelector('#play');
const mute: HTMLElement = document.querySelector('#unmute');

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

if ('serviceWorker' in navigator) {
    let serviceWorkerRegistration = navigator.serviceWorker.register('/sw.js');
}
