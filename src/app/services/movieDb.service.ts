import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {

  constructor(private httpClient: HttpClient,) { }


  myServiceHeader: HttpHeaders = new HttpHeaders({
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWFjMGVhY2I2OTA5MjEzOWEzNzc1MDY1OTEyM2U5NyIsInN1YiI6IjVmYTJkOWI0YzY2OWFkMDAzYjM0Nzc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qtv3IC5UX0x3CCIZ9wQrTr1dpoOK4263eOvQt3iyWSk",
    "Content-Type": "application/json;charset=utf-8"
  })


  getList1(): Observable<any> {
    return this.httpClient.get<any>("https://api.themoviedb.org/4/list/1?language=tr", { headers: this.myServiceHeader });
  }

}
