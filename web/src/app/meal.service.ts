import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // For async requests (GET)

import { Meal } from './meal';
import { MEALS } from './mock-meals';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  getMeals(): Observable<Meal[]> { // Need to return Observable for async
    const meals = of(MEALS); // of() returns an Observable
    return meals;
  }

  constructor() { }
}
