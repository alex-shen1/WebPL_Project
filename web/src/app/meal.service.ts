import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // For async requests (GET)

import { Meal } from './meal';
import { MEALS } from './mock-meals';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private messageService: MessageService) { }

  getMeals(): Observable<Meal[]> { // Need to return Observable for async
    const meals = of(MEALS); // of() returns an Observable
    this.messageService.add('MealService: fetched meals');
    return meals;
  }
}
