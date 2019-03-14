import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public lottieConfig: Object;
    private anim: any;
    private animationSpeed = 1;

    constructor() {
        this.lottieConfig = {
            path: 'assets/animation/lottie/mic.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
    }

    handleAnimation(anim: any) {
        this.anim = anim;
    }

    stop() {
        this.anim.stop();
    }

    play() {
        this.anim.play();
    }

    pause() {
        this.anim.pause();
    }

    setSpeed(speed: number) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    }
}
