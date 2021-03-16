import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealService } from '../meal.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: Meal[] = [];

  selectedMeal?: Meal;

  // Reserve constructor for minimal initialization
  constructor(private mealService: MealService,
              private messageService: MessageService) { }

  // Called after Angular constructs the instance
  ngOnInit() {
    this.getMeals();
  }

  onSelect(meal: Meal): void {
    this.selectedMeal = meal;
    this.messageService.add(`MealsComponent: Selected meal id=${meal.id}`);
  }

  getMeals(): void {
    this.mealService.getMeals()
        .subscribe(meals => this.meals = meals); // async assignment
  }

}
