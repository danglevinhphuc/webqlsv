import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
  // kiem tra khac rong
  validateNull(comment){
    if(comment == undefined){
      return false;
    }else{
      return true;
    }
  }
  validateLogin(login){
    if(login.username == undefined || login.password == undefined){
      return false;
    }else{
      return true;
    }
  }
  // Kiem tra email dung chuan
  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validateSignUp(signup){
    if(signup.username == undefined || signup.password == undefined || signup.email == undefined){
      return false;
    }else{
      return true;
    }
  }
  validateDiem(diem: Number){
    if(diem >= 0 && diem <4){
      return "F";
    }else if(diem >=4 && diem <5){
      return "D";
    }else if(diem >=5 && diem <5.5){
      return "D+";
    }else if(diem >=5.5 && diem <6.5){
      return "C";
    }else if(diem >=6.5 && diem <7){
      return "C+";
    }else if(diem >=7 && diem <8){
      return "B";
    }else if(diem >=8 && diem <9){
      return "B+";
    }else if(diem >=9 && diem <=10){
      return "A";
    }
    
  }

}
