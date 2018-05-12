import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
//import infamous from 'infamous'
declare var infamous: any; 

/**
 * Generated class for the DemoPage page. 
 * The test content from home.ts is moved to here
 * 
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage implements AfterViewInit {
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private platform: Platform) {
    // invoke infamous https://infamous.io/docs/install.html
    infamous.html.useDefaultNames();
  }

  @ViewChild("inode") inode: ElementRef;
  ngAfterViewInit(): void {
    // sample from https://infamous.io/docs/workflows.html
    const {Motor} = infamous.core
    let node: any;
    node = this.inode.nativeElement; // document.querySelector('i-node')
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
  }
}
