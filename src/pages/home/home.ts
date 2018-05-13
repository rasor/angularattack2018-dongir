import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
//import infamous from 'infamous'
declare var infamous: any; 

const BOX_SIZE = 50;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
  /* Content of maze
  * 0 = isle
  * 1 = wall
  * 2 = exit
  * 3 = player
  * 4 = monster 
  * */
  infamousMaze = {
    "cols": 51,
    "rows": 3,//31,
    "maze": [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ]};
  infamousMazeSize = {};
  //wallsCount: number;
  wallMountPoints: string[];

  constructor(public navCtrl: NavController) {
    // enable infamous html-tags https://infamous.io/docs/install.html
    infamous.html.useDefaultNames();

    // Initialize maze data
    this.prepareMazeData();
  }

  private prepareMazeData():void{
    // Validate initial maze data
    if (this.infamousMaze.rows * this.infamousMaze.cols > this.infamousMaze.maze.length) {
      let errMsg = 'Too few data in infamousMaze.maze[]';
      console.error(errMsg)
      throw new Error(errMsg);
    }

    // Count walls in maze
    //this.wallsCount = this.infamousMaze.maze.filter(contentType => contentType = 1).length;
    // Calculate pixel size
    this.infamousMazeSize = {
      "width": this.infamousMaze.rows * BOX_SIZE,
      "depth": this.infamousMaze.cols * BOX_SIZE,
    };
    // Convert maze content to wallMountPoints
    this.wallMountPoints = this.getWallMountPoints();
  }

  /* Convert maze content to wallMountPoints
  * "0 0 25" = Left Back ConstantHeightAboveFloor 
  * "-1 0 25" = Left+1 Back ConstantHeightAboveFloor 
  * "0 -1 25" = Left Back+1 closer ConstantHeightAboveFloor 
  * */
  private getWallMountPoints(): string[] {
    let wallMountPoints: string[] = [];
    let mazeIndex: number;
    let left: string;
    let back: string;
    let currentContentType: number;
    const HEIGTH_ABOVE_FLOOR = String(BOX_SIZE/2);
    
    // Loop rows
    for (let row = 0; row < this.infamousMaze.rows; row++) {
      // Loop cols
      for (let col = 0; col < this.infamousMaze.cols; col++) {
        // Read from maze
        mazeIndex = (row * this.infamousMaze.cols) + col;
        currentContentType = this.infamousMaze.maze[mazeIndex]
        // If there is a wall then calc mountPoint
        if (currentContentType === 1) {
          left = String(-col);
          back = String(-row);
          wallMountPoints.push(left + " " + back + " " + HEIGTH_ABOVE_FLOOR);
        }
      }
    }
    return wallMountPoints;
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

}
