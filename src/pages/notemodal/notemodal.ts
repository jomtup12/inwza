import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, ViewController } from 'ionic-angular';
import { NgModule } from '@angular/core';
/**
 * Generated class for the NotemodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notemodal',
  templateUrl: 'notemodal.html',
})
export class NotemodalPage {
  @Input()
d = 'ไม่พบผู้อยู่อาศัย';
d2 = 'ไม่พบผู้อยู่อาศัย';
d3 = 'ไม่มีปัญหาเเล้วจ้า';
  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotemodalPage');
  }
  closemodal() {
    this.view.dismiss(); 
}
}
