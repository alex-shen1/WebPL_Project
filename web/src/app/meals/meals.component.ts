import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
// import { MEALS } from '../mock-meals';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: Meal[] = [];

  meal: Meal = {
    id: 1,
    name: 'Mac & Cheese'
  };

  selectedMeal?: Meal;
  onSelect(meal: Meal): void {
    this.selectedMeal = meal;
  }

  // Reserve constructor for minimal initialization
  constructor(private mealService: MealService) { }

  // Called after Angular constructs the instance
  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    this.mealService.getMeals()
        .subscribe(meals => this.meals = meals); // async assignment
  }

}
