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

  // @ViewChild("inode") inode: ElementRef;
  ngAfterViewInit(): void {
    // sample from https://infamous.io/docs/workflows.html
    //const {Motor} = infamous.core
    // let node: any;
    // node = this.inode.nativeElement; // document.querySelector('i-node')
    // console.log('Hello ' + node.tagName);
    // node.rotation = ( x, y, z ) => [ x, ++y, z ] //   
  }
}
