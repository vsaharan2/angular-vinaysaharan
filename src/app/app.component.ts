import { Component, VERSION } from '@angular/core';
import { employee } from './employee';
import {filterPipe} from './filterPipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public jsonList:Array<employee> = [{
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female"
  }, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male"
  }, {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "gender": "Male"
  }];

  public newElement:employee = {
    id: this.jsonList.length+1,
    first_name: "",
    last_name: "",
    email: "",
    gender: ""
  };

  addElementToList = function(){
    console.log(this.newElement);
    this.jsonList.push(this.newElement);
  }
}
