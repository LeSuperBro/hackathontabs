import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SettingComponent } from '../setting/setting.component';

@Component({
  selector: 'app-pagedetail',
  templateUrl: './pagedetail.page.html',
  styleUrls: ['./pagedetail.page.scss'],
})
export class PagedetailPage {

  item="";

  constructor(private router: Router, private activeRoute : ActivatedRoute,public popoverController: PopoverController) {
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = 
          this.router.getCurrentNavigation().extras.state.param1;
      }
    });
  }
  ngOnInit() {
  }
  fetchDate(e) {
    //console.log(e)
    return new Date(e).toLocaleDateString("en-GB").substring(0, 10);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SettingComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();   

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
