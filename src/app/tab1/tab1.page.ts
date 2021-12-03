import { Component } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  hackathon : any;
  hackathonAff : any;
  myInput:any;
  constructor(private router: Router, private http:HttpClient) {
    this.http.get("http://192.168.3.185:8000/api")
    .subscribe(results => {
      console.log(results)
      this.hackathon=results;
      this.hackathonAff=results;
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
MonClick(item)
  {
    let navigationExtras : NavigationExtras =
    {
      state :
      {
        param1 : item
      }
    }
    this.router.navigate(['/pagedetail'], navigationExtras);
  }
  fetchDate(e) {
    //console.log(e)
    return new Date(e).toLocaleDateString("en-GB").substring(0, 10);
    
    
  }
}