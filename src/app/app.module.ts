import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieSearchListComponent } from './movie-search-list/movie-search-list.component';
import { MovieSearchCardComponent } from './movie-search-card/movie-search-card.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieSearchDetailsComponent } from './movie-search-details/movie-search-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { TmdbService } from './tmdb.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchService } from 'search.service';
@NgModule({
  declarations: [
    AppComponent,
    MovieSearchListComponent,
    MovieSearchCardComponent,
    MovieSearchDetailsComponent,
    NavbarComponent,
    HomeComponent,
    TopRatedMoviesComponent,
    UpcomingMoviesComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [TmdbService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
