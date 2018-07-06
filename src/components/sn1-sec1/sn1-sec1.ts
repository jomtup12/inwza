import { Component,Input, ViewChild } from '@angular/core';
import { Events } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { sn1 } from '../../models/SN1/sn1';
import {NgForm} from '@angular/forms';
/**
 * Generated class for the Sn1Sec1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sn1-sec1',
  templateUrl: 'sn1-sec1.html'
})
export class Sn1Sec1Component  {
  @ViewChild('f') sec1Form:NgForm ;
  @Input() sn1:sn1;

  text: string;
  lat: any;
  lon: any;
  wathId: any;
  message: any;
  constructor(private events: Events, public geo: Geolocation,private alertCtrl: AlertController) {
    this.message = "-";
    this.lon = "-";
    this.lat = "-";
  }

  

  submit(){
    console.log(this.sec1Form.valid);
    this.events.publish("sec1Submitted",this.sn1);
    
  }
  
  loadMap()
  {
    let geoOption = {enableHighAccuracy : true};
    try
    {
     this.geo.getCurrentPosition().then((resp) => 
      {
        this.lat = resp.coords.latitude;
        this.lon = resp.coords.longitude;
      },
      error =>
      {
        this.message = "GPS error" + error; 
      }
    )
    }catch(err)
    {
      alert("Error" + err);
      this.message = "Error" + err;
    }
  }
  presentProblem() {
    let alert = this.alertCtrl.create({
      title: 'ปัญหาที่พบ',
      inputs: [
        {
          name: 'ปัญหาที่พบ',
          placeholder: 'ปัญหาที่พบ'
        }
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
          text: 'บันทึก',
          
          }
        
      ]
    });
    alert.present();
  }
}

