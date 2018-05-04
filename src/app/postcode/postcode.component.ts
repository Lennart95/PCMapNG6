import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PostcodeService } from '../shared/postcode.service';
import { Postcode} from "../shared/model/postcode.model";

@Component({
  selector: 'app-postcode',
  templateUrl: './postcode.component.html',
  styleUrls: ['./postcode.component.css']
})
export class PostcodeComponent {
  postcode : Postcode;
  error: boolean = false;
  @Output() postcodeData: EventEmitter<Postcode> = new EventEmitter();

  constructor(private postcodeservice:PostcodeService) { }

  zoekPostcodeNummer(zipcode : string, number : number){
    this.postcodeData.emit()

    const NUM = number;
    this.postcodeservice.getPostcodeData(zipcode, number).subscribe((result: any) => {

      if (result.json().status === 'ok') 
      {
        this.postcode = result.json().details[0] as Postcode;
        this.postcode.number = NUM;
        this.postcode.lat = parseFloat(result.json().details[0].lat);
        this.postcode.lon = parseFloat(result.json().details[0].lon);
        this.postcodeData.emit(this.postcode);
      } else{
        this.error = true;
      }
    })    
  }

  clear(){
    this.postcode = null
    this.error = false;
    this.postcodeData.emit()
  }  
}
