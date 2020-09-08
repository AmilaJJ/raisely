import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import Api from './api.config.json';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedUpResponse: any = '';

  constructor(public apiService: ApiService) { }

  checkEmailValidity(emailObj){
    return new Promise((resolve, reject) => {
    this.apiService.post(Api.emailValidity, emailObj).subscribe(res => {
      const responseData = JSON.parse(res);
      if (responseData.data?.status === 'OK'){
        resolve(true);
      }else if (responseData.data?.status === 'EXISTS'){
        resolve(false);
      }else{
        reject();
      }
    });
  });
  }

  signUp(signUpObj){
    return new Promise((resolve, reject) => {
    this.apiService.post(Api.signup, signUpObj).subscribe(res => {
      this.signedUpResponse = JSON.parse(res);
      if (this.signedUpResponse){
        resolve(this.signedUpResponse);
      }else
      {
        reject();
      }
    });
  });
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    if (token){
      return true;
    }else{
      return false;
    }
  }
}
