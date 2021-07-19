import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MaterialModule } from './material/material.module';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'lessons', component: LessonsComponent},
    {path: 'events', component: EventsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'signup', component: SignupComponent}
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
                ContactComponent,
                SignupComponent]
})
export class AppRoutingModule { }