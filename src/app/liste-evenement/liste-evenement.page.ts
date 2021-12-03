import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.page.html',
  styleUrls: ['./liste-evenement.page.scss'],
})
export class ListeEvenementPage implements OnInit {

  constructor(private router: Router) {
   
  }

  ngOnInit() {
  }
  MonClickE(item)
  {
    let navigationExtras : NavigationExtras =
    {
      state :
      {
        param1 : item
      }
    }
    this.router.navigate(['/liste-evenement'], navigationExtras);
  }

}
