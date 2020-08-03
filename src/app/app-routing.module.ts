import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormNormalComponent } from './form-normal/form-normal.component';

const routes: Routes = [
  { path: '', component: FormNormalComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [FormNormalComponent];
