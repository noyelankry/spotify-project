import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';

const routes: Routes = [
  { path: "", component: SearchPanelComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
