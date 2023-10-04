import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/books.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = 'https://localhost:7085/api/Book/view-all';

  constructor(private http: HttpClient) { }

  //get all books
  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl);
  }
}
