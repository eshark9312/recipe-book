import { AppState } from './../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Observable<AppState['recipes']>;
  subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}
  ngOnInit() {
    this.recipes = this.store.select('recipes');
  }

  ngOnDestroy() {}
  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
