import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes : recipe[] = [
    new recipe('A test recipe','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg','A test')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
