import { Component, OnInit } from '@angular/core';
import { BooksService } from './service/books.service';
import { Book } from './model/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Library Management System';
  books : Book[] = [];

  constructor(private bookservice : BooksService){

  }
  ngOnInit(): void {
    //this.getBooks();
  }

  
}
