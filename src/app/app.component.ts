import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'eventon-web-angular';
}
