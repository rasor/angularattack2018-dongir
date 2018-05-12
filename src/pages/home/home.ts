import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
//import infamous from 'infamous'
declare var infamous: any; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
  constructor(public navCtrl: NavController) {
    // invoke infamous https://infamous.io/docs/install.html
    infamous.html.useDefaultNames();
  }

  @ViewChild("flybox") flybox: ElementRef;
  ngAfterViewInit(): void {
    // sample from https://infamous.io/docs/workflows.html
    //const {Motor} = infamous.core
    let node: any;
    node = this.flybox.nativeElement; // document.querySelector('i-node')
    console.log('Hello ' + node.tagName);
    //node.rotation = ( x, y, z ) => [ ++x, ++y, ++z ] //   
  }

  /*
  * 0 = isle
  * 1 = wall
  * 2 = exit
  * 3 = player
  * 4 = monster 
  */
  infamousMaze = {
    "minusLeft": 51,
    "minusBack": 3,//31,
    //"width": this.infamousMaze.minusLeft * 50,
    //"depth": this.infamousMaze.minusBack * 50,
    "maze": [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    ] 
  };  
}
