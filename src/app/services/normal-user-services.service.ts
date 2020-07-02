import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:8080/api/users"
const EDITPROFILE = "editProfile"
const CHANGE_PASS = "changePassword"
<<<<<<< HEAD
const GET_USER = "getUserById"
=======
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0

@Injectable({
  providedIn: 'root'
})
export class NormalUserServicesService {

  constructor(private http : HttpClient) { }

  updateProfile(id, data) {
    return this.http.put(`${BASE_URL}/${EDITPROFILE}/${id}`, data);
  }

  changePassword(id, data) {
    return this.http.put(`${BASE_URL}/${CHANGE_PASS}/${id}`, data);
  }

<<<<<<< HEAD
  getUserById(id){
    return this.http.get(`${BASE_URL}/${GET_USER}/${id}`);
  }
=======
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
}
