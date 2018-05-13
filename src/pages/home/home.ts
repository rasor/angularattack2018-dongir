import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vector3 } from 'three';
import { MazeProvider, ExtMaze } from '../../providers/maze/maze';

//import infamous from 'infamous'
declare var infamous: any; 

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
    cols: 51,
    rows: 3,//31,
    maze: [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    ],
    boxSize: 50,
    floorSize: {}
  };
  
  wallVectorPositions: Vector3[];

  error: any;

  constructor(public navCtrl: NavController, public mazeSvc: MazeProvider) {
    // enable infamous html-tags https://infamous.io/docs/install.html
    infamous.html.useDefaultNames();

    // Initialize maze data from service
    this.getMazeData();
  }

  private getMazeData() {
    this.mazeSvc.getMaze()
      .subscribe(
        (data: ExtMaze) => this.getMazeData_GotData(data), // success path
        error => this.error = error // error path
      );      
  }

  private getMazeData_GotData(data: ExtMaze): void {
    // clone the data object, using its known ExtMaze shape
    let extMaze = { ...data };
    this.getMazeData_PrepareMazeData(extMaze);
  }

  private getMazeData_PrepareMazeData(extMaze: ExtMaze):void{
    // Validate initial maze data
    if (this.infamousMaze.rows * this.infamousMaze.cols > this.infamousMaze.maze.length) {
      let errMsg = 'Too few data in infamousMaze.maze[]';
      console.error(errMsg)
      throw new Error(errMsg);
    }

    // Calculate pixel size
    this.infamousMaze.floorSize = {
      width: this.infamousMaze.rows * this.infamousMaze.boxSize,
      depth: this.infamousMaze.cols * this.infamousMaze.boxSize,
    };
    // Convert maze content to wallPositions
    this.wallVectorPositions = this.getMazeData__GetVectorWallPositions();
  }

    /* Convert maze content to wallVectorPositions
  * "0 0 25" = Left Back ConstantHeightAboveFloor 
  * "50 0 25" = Left+1 Back ConstantHeightAboveFloor 
  * "0 50 25" = Left Back+1 closer ConstantHeightAboveFloor 
  * */
  private getMazeData__GetVectorWallPositions(): Vector3[] {
    let wallPositions: Vector3[] = [];
    let mazeIndex: number;
    //let left: string;
    //let back: string;
    let currentContentType: number;
    let currentVector: Vector3;
    const BOX_SIZE = this.infamousMaze.boxSize;
    const HEIGTH_ABOVE_FLOOR = BOX_SIZE/2;
    
    // Loop rows
    for (let row = 0; row < this.infamousMaze.rows; row++) {
      // Loop cols
      for (let col = 0; col < this.infamousMaze.cols; col++) {
        // Read from maze
        mazeIndex = (row * this.infamousMaze.cols) + col;
        currentContentType = this.infamousMaze.maze[mazeIndex]
        // If there is a wall then calc mountPoint
        if (currentContentType === 1) {
          currentVector = new Vector3(col * BOX_SIZE, row * BOX_SIZE, HEIGTH_ABOVE_FLOOR);
          wallPositions.push(currentVector);
        }
      }
    }
    return wallPositions;
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
