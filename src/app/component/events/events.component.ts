import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventService} from "../../service/event/event.service";
import {JsonPipe} from "@angular/common";
import {Event} from "../../interface/event.interface";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  service = inject(EventService)
  events: Event[] = []
    constructor() {
    this.service.getEvents().subscribe(value => this.events = value)
  }
}
