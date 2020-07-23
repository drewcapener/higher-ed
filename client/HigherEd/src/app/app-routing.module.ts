import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectureTheatreComponent } from './lecture-theatre/lecture-theatre.component';
import { ClassArchivesComponent } from './class-archives/class-archives.component';
import { LoginComponent } from './login/login.component';
import { LectureStudioComponent } from './lecture-studio/lecture-studio.component';


const routes: Routes = [
  { path: 'lecture-theatre', component: LectureTheatreComponent },
  { path: 'class-archives', component: ClassArchivesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lecture-studio', component: LectureStudioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
