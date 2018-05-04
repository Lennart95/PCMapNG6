import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Postcode } from './model/postcode.model';

@Injectable()
export class PostcodeService {

  constructor(private http : Http) { 
    console.log("init postcodesercice");
  }

  getPostcodeData(zipcode : string, number : number){
      return this.http.get(`http://api.postcodedata.nl/v1/postcode/?postcode=${zipcode}&streetnumber=${number}&ref=domeinnaam.nl&type=json`)
  }
}