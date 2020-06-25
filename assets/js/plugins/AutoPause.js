class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handlerObserver = this.handlerObserver.bind(this);
    }

    run(player) {
        this.player = player;
        const configs = {
            threshold: this.threshold
        };

        const observer = new IntersectionObserver(this.handlerObserver, configs);
        observer.observe(this.player.video);
    }

    handlerObserver(entries) {
        const video = entries[0];
        const isVisible = video.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        } else {
            this.player.paused();
        }
    }
}

export default AutoPause;
