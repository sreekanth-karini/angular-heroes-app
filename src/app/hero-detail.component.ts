import { Component, Input, OnInit } from '@angular/core';

import { Hero } from './hero';


import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
      <button (click)="save()">Save</button>
    </div>
  `,
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    public hs: HeroService,
    private route: ActivatedRoute,
    private location: Location){



  }

  ngOnInit() {

      this.route.paramMap.switchMap((params: ParamMap) =>

          this.hs.getHero(+params.get('id'))).subscribe(hero => {
            console.log(hero);
            this.hero = hero;
          });
      
  }

  goBack() : void {
    this.location.back();
  }

  save(): void {
      this.hs.updateHero(this.hero).then(() => this.goBack());
  }
}



