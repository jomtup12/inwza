import { Component,Input, OnInit } from '@angular/core';
import { Events,AlertController } from 'ionic-angular';
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
  constructor(private events: Events,private alertCtrl: AlertController) {
    
    this.text = 'Hello World';
    this.buildingHead = 'ครัวเรือนที่ 1';
    this.buildingDetail ='บ้านเลขที่ 199/3';
  }
  ngOnInit(){
    if(this.sn1.N!=0 && this.sn1.H3 == null){
      this.sn1.H3 = [];
      for(let i=0;i<this.sn1.N;i++){
        //this.sn1.H3.push(this.sn1_sub)
        this.addFamily();
        
      }
      
    }
  }

  
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'ผลการเข้าพบ',
      inputs: [
        {
          type: 'radio',
          label: 'มีผู้ให้ข้อมูลให้ความร่วมมือ',
          value: 'value1',
        },
        {
          type: 'radio',
          label: 'มีผู้ให้ข้อมูล แต่ไม่ให้ความร่วมมือ',
          value: 'value2',
        },
        {
          type: 'radio',
          label: 'ไม่มี/ไม่พบผู้ให้ข้อมูล',
          value: 'value3',
        },
        {
          type: 'radio',
          label: 'บ้าน/อาคาร ว่างหรือร้าง',
          value: 'value4',
        },
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            
          }
        }
      ]
    });

  
    alert.present();
  }
  addFamily(){
    const SN1_sub = new sn1_sub();
    this.sn1.H3.push(SN1_sub);
  }

  editBuilding(i:number){
    let index = i;
    this.events.publish("editBuildingSummit",index);
  }
}
