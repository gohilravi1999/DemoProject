import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:8080/api/order/"
const ADD_ORDER = "makeOrder"
const APPROVED_ORDER = "getApprovedOrder"
const REJECTED_ORDER = "getRejectedOrder"
const CANCELED_ORDER = "getCanceledOrder"
const PENDING_ORDER = "getPendingOrder"
const ALL_ORDER = "getAllPendingOrder"
const ORDER = "getAllOrder"
const ORDER_DETAIL = "getOrderDetail"
const EDIT_ORDER = "editOrder"
const APPROVE = "approveOrder"
const REJECT = "rejectOrder"
const CANCEL = "cancelOrder"
const ALL_APPROVED = "getAllApproved"
const ALL_REJECTED = "getAllRejected"

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  addOrder(id,data){
    return this.http.post(`${API_URL}${ADD_ORDER}/${id}`,data);
  }

  getApproved(id){
    return this.http.get(`${API_URL}${APPROVED_ORDER}/${id}`);
  }

  getRejected(id){
    return this.http.get(`${API_URL}${REJECTED_ORDER}/${id}`);
  }

  getCanceled(id){
    return this.http.get(`${API_URL}${CANCELED_ORDER}/${id}`);
  }

  getPending(id){
    return this.http.get(`${API_URL}${PENDING_ORDER}/${id}`);
  }

  getAll(){
    return this.http.get(`${API_URL}${ALL_ORDER}`);
  }

  getOrders(){
    return this.http.get(`${API_URL}${ORDER}`);
  }

  getOrder(id){
    return this.http.get(`${API_URL}${ORDER_DETAIL}/${id}`);
  }

  editOrder(id,data){
    return this.http.put(`${API_URL}${EDIT_ORDER}/${id}`,data);
  }

  onApprove(data){
    return this.http.put(`${API_URL}${APPROVE}`,data);
  }

  onReject(data){
    return this.http.put(`${API_URL}${REJECT}`,data);
  }

  onCancelOrder(data){
    return this.http.put(`${API_URL}${CANCEL}`,data);
  }

  getAllApproved(){
    return this.http.get(`${API_URL}${ALL_APPROVED}`);
  }

  getAllRejected(){
    return this.http.get(`${API_URL}${ALL_REJECTED}`);
  }

}
