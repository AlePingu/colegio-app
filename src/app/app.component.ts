import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private globalService: GlobalService
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
    this.setMenu();
  }

  setMenu() {
    this.appPages = [];
    if(this.globalService.getToken()) {
      var roles = this.globalService.getRoles();
      if(roles) {
        if(roles.includes(1001) || roles.includes(1002)) {
          this.appPages.push({
            title: 'Crear nuevo usuario',
            url: '/create-user',
            icon: 'warning'
          });
        }
        if(roles.includes(1001)) {
          this.appPages.push({
            title: 'Eliminar usuario',
            url: '/delete-user',
            icon: 'warning'
          });
        }
        if(roles.includes(1001)) {
          this.appPages.push({
            title: 'Crear curso',
            url: '/create-grade',
            icon: 'warning'
          });
        }
        if(roles.includes(1001)) {
          this.appPages.push({
            title: 'Crear materia',
            url: '/create-subject',
            icon: 'warning'
          });
        }
        if(roles.includes(1002)) {
          this.appPages.push({
            title: 'Registrar estudiante en un curso',
            url: '/register',
            icon: 'warning'
          });
        }
        this.appPages.push({
          title: 'Cambiar password',
          url: '/change-password',
          icon: 'warning'
        });
        this.appPages.push({
          title: 'Cerrar sesion',
          url: '/logout',
          icon: 'warning'
        });
      }
    }else {
      this.appPages.push({
        title: 'Login',
        url: '/login',
        icon: 'warning'
      });
    }
  }
}
