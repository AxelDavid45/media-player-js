class MediaPlayer {
    video: HTMLMediaElement;
    plugins: Array<any>

    constructor(configs) {
        this.video = configs.src;
        this.plugins = configs.plugins || [];
        this.initPlugins();
        this.video.controls = true;
    }

    private initPlugins() {
        if (this.plugins.length > 0) {
            this.plugins.forEach(plugin => {
               plugin.run(this);
            });
        }
    }

    play() {
            this.video.play();
    }

    paused() {
        this.video.pause();
    }

    start() {
        if (this.video.paused) {
            this.video.play();
        } else {
            this.paused();
        }
    }

    mute() {
        this.video.muted = true;
    }

    unMute() {
        this.video.muted = false;
    }
}

export default MediaPlayer;
