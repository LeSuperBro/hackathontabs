import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SettingComponent } from '../setting/setting.component';
import { HttpClient} from '@angular/common/http';
import {NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-pagedetail',
  templateUrl: './pagedetail.page.html',
  styleUrls: ['./pagedetail.page.scss'],
})

export class PagedetailPage {
  evenement : any;
  evenementAff : any;
  myInput:any;
  item="";
  idev="";
  constructor(private router: Router, private activeRoute : ActivatedRoute,public popoverController: PopoverController, private http:HttpClient) {
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.idev = this.router.getCurrentNavigation().extras.state.param1;
        this.item = 
          this.router.getCurrentNavigation().extras.state.param1;
      }
    })
    this.http.get("http://192.168.3.46:8000/apiE/"+this.router.getCurrentNavigation().extras.state.param1.id_hackathon)
    .subscribe(results => {
      console.log(results)
      this.evenement=results;
      this.evenementAff=results;
  })
  }

  ngOnInit() {
  }

  onInput(e){
    console.log(e.target.value);
    this.evenementAff=[];
    this.evenement.forEach(elm =>{
        if(elm.ville==e.target.value)this.evenementAff.push(elm);
    })
  }

  onCancel(e){
    console.log(e)
    this.evenementAff=this.evenement
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
