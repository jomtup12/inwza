import { Component } from '@angular/core';
import { NavController, Events,ModalController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-sn1',
  templateUrl: 'sn1.html'
  
})
export class Sn1Page {
  gaming: string = "n64";
  gender: string = "f";
  os: string;
  music: string;
  month: string;
  year: number;
  sn1: string = "page1";
  isAndroid: boolean = false;
  isSec1Enable:boolean
  isSec2Enable:boolean
  isSec3Enable:boolean
  stepCondition:boolean
  isEditing: boolean

  musicAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, private events:Events,private modal: ModalController) {
    this.stepCondition = true;
    this.isSec1Enable =  true
    this.isSec2Enable =  false
    this.isSec3Enable =  false
    this.isEditing = false
    this.events.subscribe("sec1Submitted",() => {
        this.sn1="page2"
        this.isSec2Enable = true;
    })

    this.events.subscribe("sec2Submitted",() => {
      this.sn1="page3"
      this.isSec3Enable = true;
  })

    this.events.subscribe("editBuildingSummit",() => {
      this.isSec3Enable = true;
      this.sn1="page3";
      this.isEditing = true;
    })
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }
  
  load(){
    this.sn1 = "page2";
  }
  stpSelect() {
    console.log('STP selected');
  }
  openModal(){
    const myModal = this.modal.create('ModalPage');
  
    myModal.present();
    }
  Convert(){
    const convert = this.modal.create('ConvertModalPage');
    convert.present();
  }
}