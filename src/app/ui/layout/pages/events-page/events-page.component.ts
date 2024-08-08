import { Component, inject } from '@angular/core';
import { EventService } from '../../../../data/service/event/event.service';
import { Event } from '../../../../data/interface/event.interface';

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.less',
})
export class EventsPageComponent {
  eventService = inject(EventService);

  events: Event[] = [];

  constructor() {
    this.eventService.getEvents().subscribe((response) => {
      this.events = response;
    });
  }
}
