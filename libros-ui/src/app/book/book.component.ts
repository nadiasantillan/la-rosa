import { Component, Input } from '@angular/core';
import { Book } from '../book'
import { environment } from '../../environments/environment';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent {
  @Input() book?: Book;
  phoneNumber = environment.phoneNumber;

  faWhatsapp = faWhatsapp;
}
