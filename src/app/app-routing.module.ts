import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { MovieDetComponent } from './movie-det/movie-det.component';

const routes: Routes = [
    // { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'movies', component: MovieListComponent },
    { path: 'movies/:id', component: MovieDetailsComponent },
    { path: 'top-rated', component: TopRatedMoviesComponent },
    { path: 'upcoming', component: UpcomingMoviesComponent },
    { path: 'movie/:id', component: MovieDetComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
