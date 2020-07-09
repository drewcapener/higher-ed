import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectureTheatreComponent } from './lecture-theatre/lecture-theatre.component';


const routes: Routes = [
  { path: 'lecture-theatre', component: LectureTheatreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
