import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/api/admin/"
const MAKE_INACTIVE = "makeInactive"
const MAKE_ACTIVE = "makeActive"

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http : HttpClient) { }

  listOfActiveUser() : Observable<any>{
    return this.http.get(API_URL + 'getListOfActiveUser');
  }

  listOfInActiveUser() : Observable<any>{
    return this.http.get(API_URL + 'getListOfInActiveUser');
  }

  makeInactive(data){
    return this.http.put(`${API_URL}${MAKE_INACTIVE}`,data);
  }

  makeActive(data){
    return this.http.put(`${API_URL}${MAKE_ACTIVE}`,data);
  }
}
