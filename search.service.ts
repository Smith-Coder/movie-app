import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private searchTermSubject = new BehaviorSubject<string>('');
    public searchTerm$ = this.searchTermSubject.asObservable();

    setSearchTerm(searchTerm: string): void {
        this.searchTermSubject.next(searchTerm);
    }
}
