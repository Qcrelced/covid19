import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { SymptomesComponent } from './symptomes/symptomes.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'symptomes', component: SymptomesComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
