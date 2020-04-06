import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Potato curry','This is curry of boiled potato and indian spices'
    ,'https://www.indianfoodforever.com/iffwd/wp-content/uploads/2019/10/aloo-wadiyan-rasedaar.jpg'),
    new Recipe('Cheese Spinach Curry','This is made from puréed spinach, cheese and spices.',
    'https://www.feastingathome.com/wp-content/uploads/2018/12/Palak-Paneer-100-5.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
