import { Component, OnInit } from '@angular/core';
import { PopoverController, } from '@ionic/angular';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  constructor(private popoverController: PopoverController,private router: Router) { }

  ngOnInit() {}

  wifiSetting() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
    this.router.navigate(['/tabs']);
  }
}