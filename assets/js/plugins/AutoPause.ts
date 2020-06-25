import MediaPlayer from '../MediaPlayer.js';
class AutoPause {
    protected threshold: number;
    player: MediaPlayer;

    constructor() {
        this.threshold = 0.25;
        this.handlerObserver = this.handlerObserver.bind(this);
        this.handlerVisibility = this.handlerVisibility.bind(this);
    }

    run(player) {
        this.player = player;
        const configs = {
            threshold: this.threshold
        };

        const observer = new IntersectionObserver(this.handlerObserver, configs);
        observer.observe(this.player.video);
        //ChangeVisibiity
        document.addEventListener("visibilitychange", this.handlerVisibility);
    }

    handlerObserver(entries: IntersectionObserverEntry[]) {
        const video = entries[0];
        const isVisible = video.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        } else {
            this.player.paused();
        }
    }

    handlerVisibility() {
        this.player.paused();
    }
}

export default AutoPause;
