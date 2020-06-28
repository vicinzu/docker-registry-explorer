import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrListRepositoriesComponent } from './components/dr-list-repositories/dr-list-repositories.component';

const routes: Routes = [
  { path: '', component: DrListRepositoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
