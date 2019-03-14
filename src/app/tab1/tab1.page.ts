import {AfterContentInit, Component, ViewChild} from '@angular/core';
import {TweenMax, Linear} from 'gsap';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterContentInit {
    @ViewChild('bg') bg;
    @ViewChild('mic') mic;

    ngAfterContentInit(): void {
        console.log(this.bg.nativeElement);
        console.log(this.mic.nativeElement);
        const t1 = TweenMax.fromTo(this.bg.nativeElement, 0.5, {scale: 0}, {scale: 1, ease: Linear.easeIn, repeat: -1, repeatDelay: 0.5});
        const t2 = TweenMax.fromTo(this.mic.nativeElement, 0.5, {bottom: -51}, {
            bottom: 45,
            ease: Linear.easeIn,
            repeat: -1,
            repeatDelay: 0.5
        });
    }
}
