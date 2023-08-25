import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage {

  items: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    // ... other items
  ];

  searchTerm: string = '';
  searchResults: string[] = [];

  constructor() {
    this.observeSearchInput();
  }

  observeSearchInput() {
    const inputElement = document.getElementById('searchInput') as HTMLInputElement;
    if (inputElement) {
      inputElement.addEventListener('input', event => {
        const searchTerm = (event.target as HTMLInputElement).value;
        this.search(searchTerm);
      });
    }
  }

  search(searchTerm: string) {
    const filteredItems = this.filterItems(searchTerm);
    this.searchResults = filteredItems;
  }

  filterItems(searchTerm: string): string[] {
    searchTerm = searchTerm.toLowerCase();
    return this.items.filter(item => item.toLowerCase().includes(searchTerm));
  }
}
