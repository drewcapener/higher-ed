import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectureTheatreComponent } from './lecture-theatre/lecture-theatre.component';
import { ClassArchivesComponent } from './class-archives/class-archives.component';


const routes: Routes = [
  { path: 'lecture-theatre', component: LectureTheatreComponent },
  { path: 'class-archives', component: ClassArchivesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
