import { Injectable } from '@angular/core';
import { Config, ConfigProvider } from './config';

/*
* https://v5.angular.io/guide/http
* */
@Injectable()
export class ConfigProviderBL {
  config: Config;
  error: any;

  constructor(private cfgSvc: ConfigProvider) {
    console.log('Hello ConfigProviderBL');
    this.showConfig();
  }

  private showConfig() {
    this.cfgSvc.getConfig()
      .subscribe(
        // clone the data object, using its known Config shape
        (data: Config) => this.config = { ...data }, // success path
        error => this.error = error // error path
      );      
  }
  // private showConfig() {
  //   this.cfgSvc.getConfig()
  //     .subscribe((data: Config) => this.config = {
  //         heroesUrl: data['heroesUrl'],
  //         textfile:  data['textfile'],
  //         readme: data['readme']
  //     });
  // }
}
