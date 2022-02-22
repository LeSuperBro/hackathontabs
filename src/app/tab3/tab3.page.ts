import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  myForm: FormGroup;
  submitted = false;
  fauxuser={
    email:"tt@tt.fr",
    mdp:"pass"
  }

  constructor(public formBuilder: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      mdp: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
}

fetchDate(e) {
  let date = new Date(e.target.value).toISOString().substring(0, 10);
  this.myForm.get('dob').setValue(date, {
    onlyself: true
  })
}

get errorCtr() {
  return this.myForm.controls;
}

onSubmit() {
  this.submitted = true;
  if (!this.myForm.valid) {
    console.log('All fields are required.')
    return false;
  } else {
    console.log(this.myForm.value)
    if(this.myForm.value.email == this.fauxuser.email && this.myForm.value.mdp == this.fauxuser.mdp){
        //je suis connecté
    }
    else alert("Login ou mdp invalide");
  }
}}