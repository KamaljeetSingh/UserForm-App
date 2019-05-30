import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel, UserInfoService } from './user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @ViewChild('userForm') userForm: NgForm;

  user: UserModel = {
    userName: null,
    userDob: null,
    email: null,
    phone: null,    
    age: null
  };
  
  ageInvalid: boolean = false;
  todayDate = new Date();

  constructor(private userService: UserInfoService) { }

  ngOnInit() {
  }

  onChangeAge(){
    if(this.user.age < 18){
      this.userForm.form.controls['age'].setErrors({'incorrect': true});
    }
    else{
      this.userForm.form.controls['age'].setErrors(null);
    }
  }

  onChangeDob(){
    let dob = new Date(this.user.userDob);
    this.user.age = this.getDateDiff(this.todayDate, dob);
    this.onChangeAge();
  }

  onSubmit(){
    this.userService.saveForm(this.user);
  }

  private getDateDiff(date1: Date, date2: Date): number{
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return Math.floor(diffDays/365);
  }

}
