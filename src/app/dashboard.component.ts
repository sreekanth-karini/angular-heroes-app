import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';

import {HeroService} from './hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(public heroService: HeroService){

	}

	getHeroes(): void {

		this.heroService.getHeroes().then(heroesList =>{
			console.log(heroesList);
			this.heroes = heroesList.slice(1, 5);
		})
	}

	ngOnInit(){

		this.getHeroes();
	}

}