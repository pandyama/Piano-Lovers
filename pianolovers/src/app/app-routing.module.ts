import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MaterialModule } from './material/material.module';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'lessons', component: LessonsComponent},
    {path: 'events', component: EventsComponent},
    {path: 'contact', component: ContactComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  declarations: [HomeComponent, 
                LessonsComponent,
                EventsComponent,
                ContactComponent]
})
export class AppRoutingModule { }