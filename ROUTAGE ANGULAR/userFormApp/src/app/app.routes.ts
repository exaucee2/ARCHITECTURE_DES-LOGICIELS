import { Routes } from '@angular/router';
import { UserFormComponent } from './formulaire/formulaire.component';
import { UserTableComponent } from './table/table.component';
export const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'details', component: UserTableComponent },
  { path: '**', redirectTo: '' }
];
