import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuotesTableComponent } from './quotes-table/quotes-table.component';
import { ComponentRoutingModule } from './component-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    QuotesTableComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ]
})
export class ComponentModule { }
