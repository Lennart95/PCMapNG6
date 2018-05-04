import { Component } from '@angular/core';
import { Postcode } from './shared/model/postcode.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPostcode:Postcode;
  title = 'app';
  postcodeData: Postcode;

  updatePostcode(postcode:Postcode){
    this.currentPostcode = postcode;
  }
}
