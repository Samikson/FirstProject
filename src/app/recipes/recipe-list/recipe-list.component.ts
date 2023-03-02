import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes : recipe[] = [
    new recipe('A First recipe','https://i.pinimg.com/originals/5d/e7/36/5de7365375bc904af792c4d2eb7003a7.jpg','First'),
    new recipe('A Second recipe','https://i.pinimg.com/originals/5d/e7/36/5de7365375bc904af792c4d2eb7003a7.jpg','Second')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
