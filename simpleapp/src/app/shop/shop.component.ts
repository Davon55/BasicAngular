import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  question = "What's your name?";
  answer = "Unknown";

  appForm = new FormGroup({answer: new FormControl("")
});

onSubmit(data: any)
{
  this.answer = data.answer
  console.log("Your name is " + data);
}
}
