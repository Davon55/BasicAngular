import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {

  @Input() name: string; 
  quantity = -1;
  products: string[]= [];
  selectedProducts = "";

  constructor(){
    this.name = "";
  }

  ngOnInit()
  {
    this.quantity = 0;
      this.products = ["Star Wars", "Them Empire Strikes Back", "Return of the Jedi"];
      this.selectedProducts = "Star Wars";
  }

  newInfo()
  {
      this.quantity = 0;
      this.products = ["Star Wars", "Them Empire Strikes Back", "Return of the Jedi"];
      this.selectedProducts = "Star Wars";
      console.log('In new info and resetting Info');
  }
  onSubmit()
  {
    console.log("The quantity is " + this.quantity + "and the selected product is " + this.selectedProducts)
  }

}
