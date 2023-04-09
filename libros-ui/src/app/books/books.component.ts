import { Component } from '@angular/core';
import { Book } from '../book'
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent {
  books: Book[] = []

  constructor(private bookService: BookService) {}
  getBooks(): void {
    this.books = this.bookService.getBooks();
  }
  ngOnInit(): void {
    this.getBooks();
  }
}
