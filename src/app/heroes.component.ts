import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  name:string;

  constructor(
    public heroService: HeroService,
    public router: Router
    ){

      //this.getHeroes();
  }

  getHeroes() : void {

    //this.heroes =  this.heroService.getHeroes();

    this.heroService.getHeroes().then(heroesList =>{

        this.heroes = heroesList;
    });
  }

  getName() : void {

      this.name = this.heroService.getName();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() : void {

    this.getHeroes();
    this.getName();
  }

  gotoDetail() : void {

    this.router.navigate(['/detail',  this.selectedHero.id]);
  }

  addHero(heroName: string): void {

      heroName = heroName.trim();

      if(!heroName){

          alert('Please enter the name to add...!');
          return;
      }

      this.heroService.addHero(heroName).then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero) : void {

      this.heroService.deleteHero(hero.id).then(() =>{
        this.heroes = this.heroes.filter(s => s !== hero);
        if(this.selectedHero === hero){
            this.selectedHero = null;
        }
      });
  }
}



