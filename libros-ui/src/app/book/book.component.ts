import { Component, Input } from '@angular/core';
import { Book } from '../book'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent {
  @Input() book?: Book;
  phoneNumber = environment.phoneNumber;
}
