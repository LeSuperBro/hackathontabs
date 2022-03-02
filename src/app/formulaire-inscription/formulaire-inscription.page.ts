import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.page.html',
  styleUrls: ['./formulaire-inscription.page.scss'],
})
export class FormulaireInscriptionPage implements OnInit {

  user={nom:"",prenom:"",email:""};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  logForm(){
    this.http.post("http://192.168.3.46:8000/apiE/{idEvenement}",this.user)
    .subscribe(results => {
      /*....*/
    })
  }

}
