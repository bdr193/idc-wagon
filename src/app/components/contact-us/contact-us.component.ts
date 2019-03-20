import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api..service.';

@Component({
  selector: 'idc-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
    let title = form.value.fullname + " contact you trough Battata.io";
    let content = form.value.message + " You can email back on: " + form.value.mail + " Or return a call on: " + form.value.phone

    this.api.sendMail(title, content).subscribe(
      done => form.reset(),
      error => console.log("Error")
    );
  }
}
