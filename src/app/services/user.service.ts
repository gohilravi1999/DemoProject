import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserInformation } from '../model/user-information';

@Injectable()
export class UserService {

  private signupUrl: string;
 
  constructor(private http: HttpClient) {
    this.signupUrl = 'http://localhost:8080/signup';
  }

  public save(userInformation: UserInformation) {
    return this.http.post<UserInformation>(this.signupUrl, userInformation);
  }
}
