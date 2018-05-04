import { Component, Input, OnInit } from '@angular/core';
import { PostcodeService } from '../shared/postcode.service';
import { Postcode} from "../shared/model/postcode.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() data:Postcode;

  location : Position;
  
  constructor(private postcodeservice : PostcodeService) { }

  ngOnInit() {
    this.getMyLocation();
  }

  get lat():number {
    if(this.location!=null){
      return this.data!= null ? this.data.lat : this.location.coords.latitude;
    } else{
      return 0;
    }
  }

  get lng():number {
    if(this.location!=null){
      return this.data!= null ? this.data.lon : this.location.coords.longitude;
    } else{
      return 0;
    }
  }

  get zoom():number{
    return this.data!= null ? 15 : 5;
  }

  getMyLocation(){
    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition((position => {
        this.location = position;
      }));      
    }
  }
}
