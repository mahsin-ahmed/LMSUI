import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookReturnComponent } from './book-return/book-return.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { FreeBookComponent } from './free-book/free-book.component';
import { IssuedBookComponent } from './issued-book/issued-book.component';
import { StudentComponent } from './student/student.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';

const routes: Routes = [
  //default route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component:WelcomeMessageComponent },
      { path: 'welcome-message', component:WelcomeMessageComponent },
      { path: 'book-issue', component:BookIssueComponent },
      { path: 'book-return', component:BookReturnComponent },
      { path: 'book-entry', component:BookEntryComponent },
      { path: 'book-update', component:BookUpdateComponent },
      { path: 'free-book-list', component:FreeBookComponent },
      { path: 'issued-book-list', component:IssuedBookComponent },
      { path: 'student-entry', component:StudentComponent },
    ],
  },

  // the 404 must be placed at the last
  { path: '**', component: PageNotFoundComponent },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
