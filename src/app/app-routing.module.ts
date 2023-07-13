import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchListComponent } from './movie-search-list/movie-search-list.component';
import { MovieSearchDetailsComponent } from './movie-search-details/movie-search-details.component';
import { HomeComponent } from './home/home.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
    // { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'Search', component: MovieSearchListComponent },
    { path: 'movies/:id', component: MovieSearchDetailsComponent },
    { path: 'top-rated', component: TopRatedMoviesComponent },
    { path: 'upcoming', component: UpcomingMoviesComponent },
    { path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 64], // Optional: Adjust the scroll offset as per your UI requirements
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
