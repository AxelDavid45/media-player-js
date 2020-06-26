import MediaPlayer from "../../MediaPlayer";
import Ads, {Ad} from "./Ads";

class AdsPlugin {
    private player: MediaPlayer;
    private ads: Ads;
    private currentAd: Ad;
    private video: HTMLMediaElement;

    constructor() {
        this.ads = Ads.getInstance();
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    run(player: MediaPlayer) {
        this.player = player;
        this.video = this.player.video;
        this.video.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    private handleTimeUpdate() {
        const currenTime = Math.floor(this.video.currentTime);
        if (currenTime % 30 === 0) {
            this.renderAd();
        }
    }
    private renderAd() {
        if(this.currentAd) {
            return;
        }

        this.currentAd = this.ads.getAd();
        console.log(this.currentAd);
    }
}

export default AdsPlugin;
