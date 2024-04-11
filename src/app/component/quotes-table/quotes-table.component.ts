import { QuoteslistService } from './../../services/quoteslist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes-table',
  templateUrl: './quotes-table.component.html',
  styleUrls: ['./quotes-table.component.css']
})
export class QuotesTableComponent {
  searchText: any;
  quotes: any[] = [];

  constructor(private Service: QuoteslistService) { }

  ngOnInit(): void {
    this.fetchQuotes();
  }


  fetchQuotes() {
    
    this.Service.getQuotes().subscribe(
      (response) => {
        this.quotes = response;
        console.log('Quotes:', this.quotes);
      },
      (error) => {
        console.error('Error fetching quotes:', error);
      }
    );
  }

  updateQuote(id: number, newData: any) {
  
    const payload = {
      id: id,
      author: newData.author,
      tags: newData.tags,
      quoteText: newData.quoteText
    };

    this.Service.updateQuote(id, payload).subscribe(
      (response) => {
        console.log('Quote updated successfully:', response);
      },
      (error) => {
        console.error('Error updating quote:', error);
      }
    );
  }


  deleteQuote(id: number) {
    
    this.Service.deleteQuote(id).subscribe(
      (response) => {
        console.log('Quote deleted successfully:', response);
        // Optionally, you can remove the quote from the local array of quotes
      },
      (error) => {
        console.error('Error deleting quote:', error);
      }
    );
  }
}
