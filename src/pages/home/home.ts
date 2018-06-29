import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController,ModalController,LoadingController } from 'ionic-angular';
import { Sn1Page } from '../sn1/sn1';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu : MenuController,private modal: ModalController,public loadingCtrl: LoadingController) {
    menu.enable(true);
  }
  
    
  generateSN1(){
    this.navCtrl.push(Sn1Page);
  }
  openModal(){
    const myModal = this.modal.create('ModalPage');
  
    myModal.present();
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่....",
      duration: 3000
    });
    loader.present();
  }
}
