import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import infamous from 'infamous'
declare var infamous: any; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    // invoke infamous https://infamous.io/docs/install.html
    infamous.html.useDefaultNames();
  }
}
