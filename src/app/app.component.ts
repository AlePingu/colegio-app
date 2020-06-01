import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'warning'
    },
    {
      title: 'Crear nuevo usuario',
      url: '/create-user',
      icon: 'warning'
    },
    {
      title: 'Eliminar usuario',
      url: '/delete-user',
      icon: 'warning'
    },
    {
      title: 'Cambiar password',
      url: '/pass',
      icon: 'warning'
    },
    {
      title: 'Crear curso',
      url: '/grade',
      icon: 'warning'
    },
    {
      title: 'Crear materia',
      url: '/signature',
      icon: 'warning'
    },
    {
      title: 'Registrar estudiante en un curso',
      url: '/register',
      icon: 'warning'
    }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
