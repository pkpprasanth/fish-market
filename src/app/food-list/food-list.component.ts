import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import foodsList from '../foods';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foods          : Object[];
  myList         : {name: string, amount: number, quantity: number, image: string}[] = [];
  pattern        : string;
  isEditing      : boolean = false;
  newFoodName    : string = "Example Name";
  newFoodamount: number = 250;
  newFoodImage   : string = "https://pngimg.com/uploads/fish/fish_PNG1141.png";
  quantity       : number;
  totalamount  : number = 0;

  constructor() {}

  ngOnInit() {
    this.foods = foodsList;
  }

  enableUserToAddFood(){
    this.isEditing = !this.isEditing;
  }

  newFood(){
    const newFood = {
      name: this.newFoodName,
      amount: this.newFoodamount,
      image: this.newFoodImage,
      quantity: 0
    }

    this.foods.unshift(newFood);

    this.isEditing = true;
    this.newFoodName = "";
    this.newFoodamount = null;
    this.newFoodImage = "";
  }

  addToMyList(food, quantityInput){
    document.getElementById('menu').style.visibility='visible'
    const existingFood = this.myList.find(item => item.name === food.name)
    const quantity = Number(quantityInput.value)

    if (existingFood){
      existingFood.quantity += quantity;
    } else {
      food.quantity = quantity;
      this.myList.push(food);
    }
    this.totalamount += (food.amount * quantity);
    this.quantity = 1;
  }
  @ViewChild('pdfTable') pdfTable: ElementRef;


  public downloadAsPDF() {
    let doc = new jsPDF('p','pt', 'a4');
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('xyzinvoice.pdf');
  }

}
