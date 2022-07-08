import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';

const routes: Routes = [
  { path: "", component: SearchPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
