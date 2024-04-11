import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotesTableComponent } from './quotes-table/quotes-table.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'table-list', component: QuotesTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
