import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SettingComponent } from '../setting/setting.component';
import {NavigationExtras} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.page.html',
  styleUrls: ['./formulaire-inscription.page.scss'],
})
export class FormulaireInscriptionPage {

  user={IdEvenement:"",Nom:"",Prenom:"",Mail:""};
  item="";

  constructor(private router: Router, private activeRoute : ActivatedRoute,public popoverController: PopoverController, private http:HttpClient, private storage: Storage) {
    this.storage.get('user').then(data=>{
      console.log(data)
    })
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state.param1;
      }
    })
  }
  logForm(){
    this.user.IdEvenement =this.item;
    console.log(this.user);
    console.log("test");
    //let data = {nom:this.user.nom,prenom:this.user.prenom,mail:this.user.mail};
    this.http.post("http://localhost:8000/apiE/participant",this.user)
    .subscribe(results => {
      console.log("Ca fonctionne");
    })
    this.storage.set('user',this.user);
  }

}
