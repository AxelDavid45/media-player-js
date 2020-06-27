class MediaPlayer {
    video: HTMLMediaElement;
    plugins: Array<any>
    container: HTMLElement;

    constructor(configs) {
        this.video = configs.src;
        this.plugins = configs.plugins || [];
        this.initPlayer();
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

    private initPlayer(){
        this.container = document.createElement('div');
        this.video.parentNode.insertBefore(this.container, this.video);
        this.container.appendChild(this.video);
        this.container.style.position = 'relative'
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
