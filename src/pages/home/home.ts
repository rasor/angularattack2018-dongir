import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
//import infamous from 'infamous'
declare var infamous: any; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
  @ViewChild("inode") inode: ElementRef;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform) {
    // invoke infamous https://infamous.io/docs/install.html
    infamous.html.useDefaultNames();
  }

  ngAfterViewInit(): void {
    // sample from https://infamous.io/docs/workflows.html
    const {Motor} = infamous.core
    let node: any;
    //node = document.querySelector('i-node')
    node = this.inode.nativeElement;
    console.log('Hello ' + node.tagName);
    node.rotation = ( x, y, z ) => [ x, ++y, z ] //   
  }

  // https://devdactic.com/deploy-ionic-website-heroku/
  showPlatform() {
    let text = 'I run on: ' + this.platform.platforms();
    let alert = this.alertCtrl.create({
      title: 'Home',
      subTitle: text,
      buttons: ['Ok']
    });
    alert.present();
  }

}
