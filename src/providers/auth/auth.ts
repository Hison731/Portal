import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../app/environment';

@Injectable()
export class AuthProvider {

  isUserLogin:boolean = false;
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  doLogin(user): Promise<any> {
    return new Promise((resolve, reject) => {
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'userLogin', JSON.stringify(user), { headers: header }).subscribe((response: any) => {
        if (response.Status == 'Success') {
          resolve(response.Userdetails);
        } else {
          reject(response.Message);
        }
      }, (err) => {
        console.log(err);
      })

    })

  }

  doSignup(user): Promise<any> {
    return new Promise((resolve, reject) => {
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.serverURL + 'userLogin', JSON.stringify(user), { headers: header }).subscribe((response: any) => {
        if (response.status == 'Success') {
          resolve(response.data);
        } else {
          reject("Unable to find the detail");
        }
      }, (err) => {
        console.log(err);
      })

    })

  }
}
