import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
//import {CommonModule} from '@angular/common';
//import { Component } from '@angular/core';

// const routes:Routes=[
//   {
//     path:'',
//     component:BookIssueComponent
//   },
//   {
//     path:'book-issue',
//     loadComponent:()=>import('./book-issue/book-issue.component').then(x=>x.BookIssueComponent)
//   },
//   {
//     path:'book-return',
//     loadComponent:()=>import('./book-return/book-return.component').then(x=>x.BookReturnComponent)
//   },
//   {
//     path:'book-entry',
//     loadComponent:()=>import('./book-entry/book-entry.component').then(x=>x.BookEntryComponent)
//   },
//   {
//     path:'book-update',
//     loadComponent:()=>import('./book-update/book-update.component').then(x=>x.BookUpdateComponent)
//   },
//   {
//     path:'free-book-list',
//     loadComponent:()=>import('./free-book/free-book.component').then(x=>x.FreeBookComponent)
//   },
//   {
//     path:'issued-book-list',
//     loadComponent:()=>import('./issued-book/issued-book.component').then(x=>x.IssuedBookComponent)
//   },
//   {
//     path:'student-entry',
//     loadComponent:()=>import('./student/student.component').then(x=>x.StudentComponent)
//   },
//   {
//     path:'**',
//     component:PageNotFoundComponent
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    WelcomeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
