import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
//import infamous from 'infamous'
declare var infamous: any; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform) {
    // invoke infamous https://infamous.io/docs/install.html
    infamous.html.useDefaultNames();
  }

  // https://devdactic.com/deploy-ionic-website-heroku/
  showPlatform() {
    let text = 'I run on: ' + this.platform.platforms();
    let alert = this.alertCtrl.create({
      title: 'My Home',
      subTitle: text,
      buttons: ['Ok']
    });
    alert.present();
  }

}
