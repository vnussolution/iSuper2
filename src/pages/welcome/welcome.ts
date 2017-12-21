import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform) {

  }

  showJoke() {
    let text = 'why does school ban children from bringing scissors to class ?';
    let alert = this.alertCtrl.create({
      title: 'Cut class',
      subTitle: text,
      buttons: ['Ok']
    });
    alert.present();
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
