import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface UserModel {
  userName: string;
  userDob: string;
  email: string;
  phone: string;
  age: number;
}

@Injectable()
export class UserInfoService {
    private backend_url = "http://localhost:3000/api/user/submit";

    constructor(private http: HttpClient){}

    saveForm(userForm: UserModel){
        this.http.post(this.backend_url, userForm)
            .subscribe(res => {
                //form has been saved
                console.log(res);
            }, err => {
                console.log(err);
            });
    }
}