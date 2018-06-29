import { Component } from '@angular/core';

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

  text: string;
  stepCondition :boolean
  isShow: boolean
  step:number
  constructor() {
    console.log('Hello Sn1Sec3Component Component');
    this.text = 'Hello World';
    this.stepCondition = true;
    this.isShow = true;
    this.step = 1;
  }

  onFinish(){
    
  }
  

}
