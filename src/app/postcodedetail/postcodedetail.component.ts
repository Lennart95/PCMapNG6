import { Component, Input, OnInit } from '@angular/core';
import { Postcode} from "../shared/model/postcode.model";
import { PostcodeService } from '../shared/postcode.service';

@Component({
  selector: 'app-postcodedetail',
  templateUrl: './postcodedetail.component.html',
  styleUrls: ['./postcodedetail.component.css']
})
export class PostcodedetailComponent {
  @Input() data:Postcode;
  
  constructor(private postcodeservice : PostcodeService) {} 
}
