import { Component } from '@angular/core';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Libros de la Rosa';
  location = 'Luján, Buenos Aires';

  faLocation = faLocationCrosshairs;
}
