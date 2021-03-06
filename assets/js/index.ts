import MediaPlayer from "./MediaPlayer";
import AutoPlay from './plugins/AutoPlay';
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/ads/index";
const videoSrc = document.querySelector('video');
const button: HTMLElement = document.querySelector('#play');
const mute: HTMLElement = document.querySelector('#unmute');

const configs = {src: videoSrc, plugins: [
    new AutoPlay(), new AutoPause(), new AdsPlugin()
    ]};
const player = new MediaPlayer(configs);

button.addEventListener('click', () => {
    try {
        player.start();
    } catch (e) {
        console.log(e);
    }
});

mute.addEventListener('click', () => {
    if (videoSrc.muted) {
        player.unMute();
    } else {
        player.mute();
    }

});

// if ('serviceWorker' in navigator) {
//     let serviceWorkerRegistration = navigator.serviceWorker.register('/sw.js');
// }
