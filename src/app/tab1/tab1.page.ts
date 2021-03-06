import { Component } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  hackathon : any;
  hackathonAff : any;
  myInput:any;
  myForm:FormGroup;
  submitted=false;

  constructor(private router: Router, private http:HttpClient) {
    // this.nativeStorage.getItem('user')
    //   .then(
    //     data => {
    //       console.log(data);
    //       // if(data){remplir les champs}
    //     }
    //     error => console.error(error)
    //   );

    this.http.get("http://localhost:8000/apiH")
    .subscribe(results => {
      console.log(results)
      this.hackathon=results;
      this.hackathonAff=results;
      console.log(this.hackathonAff)
  })
}



onInput(e){
  console.log(e.target.value);
  this.hackathonAff=[];
  this.hackathon.forEach(elm =>{
      if(elm.ville==e.target.value)this.hackathonAff.push(elm);
  })
}

onCancel(e){
  console.log(e)
  this.hackathonAff=this.hackathon
}

MonClick2()
{
  let navigationExtras : NavigationExtras
  this.router.navigate(['/geoloc-hack'], navigationExtras);
}

MonClick(item)
  {
    let navigationExtras : NavigationExtras =
    {
      state :
      {
        param1 : item,
      }
    }
    this.router.navigate(['/pagedetail'], navigationExtras);
  }
  
  fetchDate(e) {
    //console.log(e)
    return new Date(e).toLocaleDateString("en-GB").substring(0, 10);
    
    
  }
}