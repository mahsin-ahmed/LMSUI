import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Book } from '../model/books.model';

@Component({
  selector: 'app-free-book',
  //templateUrl: './free-book.component.html',
  template: `<ul>
  <li *ngFor="let color of colors">
      {{color}}
  </li>
</ul>`,
  //styleUrls: ['./free-book.component.css'],
  standalone: true
})

export class FreeBookComponent {
   colors=["blue", "red"];
  constructor(private bookservice : BooksService){
    //this.getBooks();
  }
//(click)="getBooks()"
getBooks(){
  this.bookservice.getAllBooks()
  .subscribe(
    response => {
      //this.listBook = response;
      //console.log(this.listBook);
    }
  );
}

}
