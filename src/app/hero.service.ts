import {Injectable} from '@angular/core';
import {Hero} from './hero';

import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroService {

	private heroesUrl = 'api/heroes';
	private headers = new Headers({'Content-Type': 'application/json'});

	name: string = 'Sadhana Kamma';

	constructor(private http: Http){

	}



	getName() : string {
		
		return this.name;
	}

	getHeroes(): Promise<Hero[]> {
  		
  		return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json() as Hero[])
             .catch(this.handleError);
	}


	private handleError(error: any) : Promise<any> {

		console.error('Hey! error occured please check this ', error);

		return Promise.reject(error.message || error);
	}

	getHero(id: number) : Promise<Hero> {

			const url = `${this.heroesUrl}/${id}`;

		return this.http.get(url)
				.toPromise()
				.then(response => response.json() as Hero)
				.catch(this.handleError);
	}

	updateHero(hero: Hero): Promise<Hero> {

		const url = `${this.heroesUrl}/${hero.id}`;

		return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
				.toPromise()
				.then(() => hero)
				.catch(this.handleError);
	}

	addHero(heroName: string): Promise<Hero> {


		return this.http.post(this.heroesUrl, JSON.stringify({name: heroName}), {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Hero)
				.catch(this.handleError);
	}

	deleteHero(heroId: number): Promise<void> {

			const url = `${this.heroesUrl}/${heroId}`;

		return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
				.catch(this.handleError);
	}
}





