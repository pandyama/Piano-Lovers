import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'lessons', component: LessonsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [HomeComponent, LessonsComponent]
})
export class AppRoutingModule { }