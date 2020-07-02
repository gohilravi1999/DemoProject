import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/api/admin/"
const MAKE_INACTIVE = "makeInactive"
const MAKE_ACTIVE = "makeActive"
const MAKE_INACTIVE_PRODUCT = "makeInactiveProduct"
const MAKE_ACTIVE_PRODUCT = "makeActiveProduct"
const EDIT_PRODUCT = "editProduct"
const GET_PRODUCT = "getProduct"

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

  listOfAllUser() : Observable<any>{
    return this.http.get(API_URL + 'getAllUser');
  }
  makeInactive(data){
    return this.http.put(`${API_URL}${MAKE_INACTIVE}`,data);
  }

  makeActive(data){
    return this.http.put(`${API_URL}${MAKE_ACTIVE}`,data);
  }

  listOfActiveProduct(){
    return this.http.get(API_URL + 'getListOfActiveProduct');
  }

  listOfInActiveProduct(){
    return this.http.get(API_URL + 'getListOfInActiveProduct');
  }

  makeInactiveProduct(data){
    return this.http.put(`${API_URL}${MAKE_INACTIVE_PRODUCT}`,data);
  }

  makeActiveProduct(data){
    return this.http.put(`${API_URL}${MAKE_ACTIVE_PRODUCT}`,data);
  }

  addNewProduct(data){
    return this.http.post(API_URL+'addProduct',data);
  }

  editProduct(id,data){
    return this.http.put(`${API_URL}${EDIT_PRODUCT}/${id}`,data);
  }

  getProduct(id){
    return this.http.get(`${API_URL}${GET_PRODUCT}/${id}`);
  }
}
