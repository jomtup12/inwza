import { Component,Input, OnInit } from '@angular/core';
import { Events,AlertController,NavController } from 'ionic-angular';
import { sn1 } from '../../models/SN1/sn1';
import { sn1_sub } from '../../models/SN1/sn1_sub';
/**
 * Generated class for the Sn1Presec3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sn1-presec3',
  templateUrl: 'sn1-presec3.html'
})
export class Sn1Presec3Component  {
  @Input() sn1:sn1;
  text: string;
  buildingHead: string
  buildingDetail: string
  constructor(private events: Events,private alertCtrl: AlertController,private navCtrl:NavController) {
    
    this.text = 'Hello World';
    this.buildingHead = 'ครัวเรือนที่ 1';
    this.buildingDetail ='บ้านเลขที่ 199/3';
  }
  ngOnInit(){
    if(this.sn1.N!=0){
      let round;
      let isNegative = false;
      if(this.sn1.H3 == null){
      this.sn1.H3 = [];
      round = this.sn1.N;
      }else{
        round = this.sn1.N-this.sn1.H3.length;
        if(round < 0){
        round = round*-1;
        isNegative = true;
        }
      }
      for(let i=0;i<round;i++){
        //this.sn1.H3.push(this.sn1_sub)
        if(!isNegative){
         this.addFamily(i);
        }else{
         this.delFamily();
        }
      }
      
    }
  }

  
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'เพิ่มครัวเรือน',
      message: 'ต้องการเพิ่มครัวเรือนหรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            this.events.publish("sec2Submitted",this.sn1);
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
             let newN:number = Number(this.sn1.N)+Number(1);
             this.sn1.N = newN;
             this.ngOnInit();
             //this.editBuilding(this.sn1.currentSubRoom);
            
  
          }
        }
      ]
    });

  
    alert.present();
  }
  addFamily(i:number){
    const SN1_sub = new sn1_sub();
    SN1_sub.H3 = i+1;
    this.sn1.H3.push(SN1_sub);
  }

  delFamily(){
    if(this.sn1.H3[this.sn1.H3.length-1].isView){
      this.sn1.currentSubRoom-=1;
    }
    this.sn1.H3.pop();
    //this.ngOnInit();

  }
  
  delFamilyFromButton(){
    this.sn1.N-=1;
    if(this.sn1.H3[this.sn1.H3.length-1].isView){
      this.sn1.currentSubRoom-=1;
    }
    this.sn1.H3.pop();
    this.ngOnInit();

  }

  getCardColor(status:number){
    let color;
    if(status==0){
      color='light'
    }
    if(status==1){
      color='secondary'
    }
    if(status==2){
      color='highlight'
    }
    console.log(status);
    return color;
  }

  editBuilding(i:number){
    
    let index = i;
    this.events.publish("editBuildingSummit",index);
    if(!this.sn1.H3[index].isView){
    this.sn1.currentSubRoom+=1;
    }
  }

  addExtraFamily(){
    //this.events.publish("sec1Submitted",this.sn1);
    this.presentPrompt()
  }

  
}



