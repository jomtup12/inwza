import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, LoadingController } from 'ionic-angular';
import { Sn1Page } from '../sn1/sn1';
import { sn1 } from '../../models/SN1/sn1';

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
  n: any
  a: any
  isFix: boolean
  buttonClicked: boolean = false;
  SN1:sn1[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private modal: ModalController, public loadingCtrl: LoadingController) {
    menu.enable(true);
    this.n = 2;
    this.a = 1;
    this.isFix = true;
    this.SN1 = [];


  }
  onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
  }

  generateSN1() {
    let sn = new sn1();
    this.SN1.push(sn);
    console.log(this.SN1);
    this.navCtrl.push(Sn1Page,{sn1:this.SN1[this.SN1.length-1]});
  }

  editBuilding(index:number){
    this.navCtrl.push(Sn1Page,{sn1:this.SN1[index]})
  }
  openModal() {
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
  noteModal() {
    const notemodal = this.modal.create('NotemodalPage');

    notemodal.present();
  }
  detailModal() {
    const detailmodal = this.modal.create('DetailmodalPage');

    detailmodal.present();
  }
}
