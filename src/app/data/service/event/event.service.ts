import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../interface/event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  http = inject(HttpClient);

  getEvents() {
    return this.http.get<Event[]>('http://localhost:8080/api/events');
  }
}
