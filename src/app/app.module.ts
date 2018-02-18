//Libraries
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

//Mock web server
//Install npm install angular-in-memory-web-api --save
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService }  from './in-memory-data.service';

//Components
import { AppComponent }        from './app.component';
import {HeroesComponent} from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';


//Service
import {HeroService} from './hero.service';

//Routing
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }

