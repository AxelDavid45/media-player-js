import MediaPlayer from "./MediaPlayer.js";
const videoSrc = document.querySelector('video');
const button = document.querySelector('button');
const configs = {src: videoSrc};
const player = new MediaPlayer(configs);

button.onclick = async () => {
    try {
        await player.play();
    } catch (error) {
        console.error(error);
    }
};
