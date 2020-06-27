import MediaPlayer from "../../MediaPlayer";
import Ads, {Ad} from "./Ads";

class AdsPlugin {
    private player: MediaPlayer;
    private ads: Ads;
    private currentAd: Ad;
    private video: HTMLMediaElement;
    private adsContainer: HTMLElement;

    constructor() {
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
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
        if (this.currentAd) {
            return;
        }

        this.currentAd = this.ads.getAd();
        this.adsContainer.innerHTML = `
      <div class="ads">
        <a class="ads__link" href="${this.currentAd.url}" target="_blank">
          <img class="ads__img" src="${this.currentAd.imageUrl}" />
          <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
          </div>
        </a>
      </div>
    `;
        setTimeout(() => {
            this.currentAd = null;
            this.adsContainer.innerText = '';
        }, 5000);
    }
}

export default AdsPlugin;
