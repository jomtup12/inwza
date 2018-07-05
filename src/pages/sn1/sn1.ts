import { Component } from '@angular/core';
import { NavController, Events,ModalController,NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { sn1 } from '../../models/SN1/sn1';
import { sn1_sub } from '../../models/SN1/sn1_sub';


@Component({
  selector: 'page-sn1',
  templateUrl: 'sn1.html'
  
})
export class Sn1Page {

  sn1: sn1 
  sn1_sub:sn1_sub
  currentPage: string = "page1";
  isSec1Enable:boolean
  isSec2Enable:boolean
  isSec3Enable:boolean
  stepCondition:boolean
  isEditing: boolean

  musicAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, private events:Events,private modal: ModalController,private navParams: NavParams) {
    this.sn1 = new sn1();
    this.sn1 = this.navParams.get('sn1');
    this.sn1_sub = new sn1_sub();
    this.isSec1Enable =  true
    this.isSec2Enable =  false
    this.isSec3Enable =  false
    this.isEditing = false

    this.events.subscribe("destroyPreSec3",() => {
      this.isEditing = false;
  })

    this.events.subscribe("sec1Submitted",(sn1) => {
        this.sn1=sn1;
        this.currentPage="page2"
        this.isSec2Enable = true;
    
    })

    this.events.subscribe("sec2Submitted",(sn1) => {
     
      this.currentPage="page3"
      this.isSec3Enable = true;
      this.sn1=sn1;
  })

    this.events.subscribe("editBuildingSummit",(index) => {
      this.sn1_sub = this.sn1.H3[index];
      this.isSec3Enable = true;
      this.currentPage="page3";
      this.isEditing = true;
    })

    this.events.subscribe("editBuildingToMain",(sn1_sub) => {
        this.currentPage="page3"
      this.isSec3Enable = true;
      this.isEditing = false;
  
      console.log(this.sn1.H3);
    })
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }
  
  load(){
    this.currentPage = "page2";
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