import { Component, Renderer2 } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userForm: any;
  tags: string[] = ['']; // Initialize an array with an empty tag field
  quotes:string[]=['']


  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private Service: HomeService
  ) {}

  ngOnInit(): void {
    this.createForm()
   }

  createForm() {
    this.userForm = this.formBuilder.group({
      id: [0],
      author: [''],
      tags: this.tags,
      quoteText: this.quotes
    });
  }

  addTagField() {
    this.tags.push('');
  }

  addQuotesField() {
    this.quotes.push('');
  }

  submit() {
    debugger
    const quoteData = {
      // id: this.userForm.value.id,
      author: this.userForm.value.author,
      tags: [this.userForm.value.tags],
      quoteText: [this.userForm.value.quoteText]
    };
    debugger
    this.Service.addQuote(quoteData).subscribe(
      (response) => {
        console.log('Quote added successfully:', response);

      },
      (error) => {
        console.error('Error adding quote:', error);

      }
    );
  }

}
