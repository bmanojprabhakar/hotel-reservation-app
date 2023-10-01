import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationClientUrl = "http://localhost:3001"
  private reservations: Reservation[] = [];

  constructor(
    private http: HttpClient
  ) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationClientUrl+"/reservations");
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.reservationClientUrl+"/reservation/"+id);
  }

  doReservation(reservation: Reservation): Observable<void> {
    reservation.id = Date.now().toString();
    return this.http.post<void>(this.reservationClientUrl+"/reservation", reservation);
  }

  updateReservation(id: string, reservation: Reservation): Observable<void> {
    return this.http.put<void>(this.reservationClientUrl+"/reservation/"+id, reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.reservationClientUrl+"/reservation/"+id);
  }
}
