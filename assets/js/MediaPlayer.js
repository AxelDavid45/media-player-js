function MediaPlayer(configs) {
    this.video = configs.src;
}

MediaPlayer.prototype.play = function () {
    if (!this.video.paused) {
        this.video.pause();
    } else {
        this.video.play();
    }
};

export default MediaPlayer;
