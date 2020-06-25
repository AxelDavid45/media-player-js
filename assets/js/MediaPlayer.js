function MediaPlayer(configs) {
    this.video = configs.src;
    this.plugins = configs.plugins || [];
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    if (this.plugins.length > 0) {
        this.plugins.forEach(plugin => {
           plugin.run(this);
        });
    }
};

MediaPlayer.prototype.play = function () {
        this.video.play();
};

MediaPlayer.prototype.paused = function () {
    this.video.pause();
};

MediaPlayer.prototype.start = function () {
    if (this.video.paused) {
        this.video.play();
    } else {
        this.paused();
    }
};

MediaPlayer.prototype.mute = function () {
    this.video.muted = true;
}

MediaPlayer.prototype.unMute = function () {
    this.video.muted = false;
}

export default MediaPlayer;
