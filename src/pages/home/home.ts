import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
    //this.name = 'Ferdy';
  }

  btnClick(){
    //alert('Hello!');
    let alert = this.alertCtrl.create({
      title: 'Global Launch',
      subTitle: 'Hello ' + this.name,
      buttons: ['Done!']
    });
    alert.present();
  }

  pageProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
