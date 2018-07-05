import { Component, Input, OnInit } from '@angular/core';
import { Events } from 'ionic-angular';
import { sn1_sub } from '../../models/SN1/sn1_sub';
/**
 * Generated class for the Sn1Sec3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */ 
@Component({
  selector: 'sn1-sec3',
  templateUrl: 'sn1-sec3.html'
})
export class Sn1Sec3Component {
  @Input() sn1_sub: sn1_sub;
  text: string;
  stepCondition: boolean
  isShow: boolean
  step: number
  isReset: boolean
  constructor(private events: Events) {
    console.log('Hello Sn1Sec3Component Component');
    this.text = 'Hello World';
    this.stepCondition = true;
    this.isShow = true;
    this.isReset = false;
    this.step = 1;
  }

  resetData(){
        this.sn1_sub.H3 = 1;
        this.sn1_sub.H4 = '';
        this.sn1_sub.A1 = 200;
        this.sn1_sub.H5_1 = null;
        this.sn1_sub.G1 = null;
        this.sn1_sub.G2 = null;
        this.sn1_sub.G3 = null;
        this.sn1_sub.G4 = null;
        this.sn1_sub.P1 = null;
        this.sn1_sub.P2 = null;
        this.sn1_sub.P3 = null;
        this.sn1_sub.P4 = null;
        this.sn1_sub.mergeTapWater=false;
        this.sn1_sub.mergeGroundWater=false;
        this.sn1_sub.isHasA11 = false;
        this.sn1_sub.A11 = '';
        this.isReset = true;
        this.backtoMain()
  }
  backtoMain() {
    this.events.publish("editBuildingToMain", this.sn1_sub)
  }

  ngOnInit() {
    if (this.sn1_sub.status === 0 && this.sn1_sub.isView == false) {
      this.sn1_sub.status = 2;
      this.sn1_sub.isView = true;
    }

  }

  ngOnDestroy() {
    this.formValidate(this.isReset);
    this.events.publish("destroyPreSec3");
  }

  formValidate(re:boolean) {
  if(!re){  
    if (this.sn1_sub.H4 != '') {
      if (this.sn1_sub.H5_1 == 1) {
        if (this.sn1_sub.P1 != null && this.sn1_sub.P2 != null && this.sn1_sub.P3 != null && this.sn1_sub.P4 != null && this.sn1_sub.G1 != null) {
          this.sn1_sub.status = 1;
        }else{
          this.sn1_sub.status = 2;
        }
      } else if (this.sn1_sub.H5_1 == 2 || this.sn1_sub.H5_1 == 3 || this.sn1_sub.H5_1 == 4) {
        this.sn1_sub.status = 1;
      }else{
        this.sn1_sub.status = 2; 
      }
    }else{
      this.sn1_sub.status = 2;
    }
  }else{
    this.sn1_sub.status = 2;
  }




  }
}
