import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = "";

  constructor(private searchService: SearchService, private router: Router) { }

  searchMovies(): void {
    if (this.searchTerm) {
      this.searchService.setSearchTerm(this.searchTerm);
      this.router.navigate(['/Search']);
    }
  }
}
