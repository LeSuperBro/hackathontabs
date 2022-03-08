import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SettingComponent } from '../setting/setting.component';
import {NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.page.html',
  styleUrls: ['./formulaire-inscription.page.scss'],
})
export class FormulaireInscriptionPage {

  user={nom:"",prenom:"",email:""};
  item="";

  constructor(private router: Router, private activeRoute : ActivatedRoute,public popoverController: PopoverController, private http:HttpClient) {
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state.param1;
      }
    })
  }
  logForm(){
    console.log(this.user);
    this.http.post("http://192.168.3.46:8000/apiE/"+this.item, this.item)
    this.http.post("http://192.168.3.46:8000/apiE/"+this.user.nom, this.user)
    this.http.post("http://192.168.3.46:8000/apiE/"+this.user.nom, this.user)
    this.http.post("http://192.168.3.46:8000/apiE/"+this.user.nom, this.user)

    .subscribe(results => {
      console.log("Ca fonctionne");
    })
  }

}
