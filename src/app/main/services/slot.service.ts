import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Slot } from 'src/app/structures/slot';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:3000/slots';


@Injectable()
export class SlotService {

  slots: Slot;

  constructor(private http: HttpClient) { }

  addSlot(slot: Slot): Observable<any> {
     return this.http.post<Slot>(apiUrl, slot, httpOptions);
  }
  getSlots(): Observable<any> {
    return this.http.get<Slot[]>(apiUrl, httpOptions);
  }

}
