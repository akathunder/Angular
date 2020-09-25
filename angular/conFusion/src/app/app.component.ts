import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //etiqueta donde va a verse en el index <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ristorante Con Fusion';
  author = 'Hector Marquez'
}
