import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router }            from '@angular/router';
import { AppService } from "../app.service";
import { ValidateService } from "../validation.service";
@Component({
  selector: 'app-themsinhvien',
  templateUrl: './themsinhvien.component.html',
  styleUrls: ['./themsinhvien.component.css']
})
export class ThemsinhvienComponent implements OnInit {
  public mssv: String;
  public sdt: String;
  public ho: String;
  public ten: String;
  public gioitinh = "nam";
  public email: String;
  public apiCheck: any[];
  public checkExit : String;
  // ham khoi tao gom 3 bien so
  // thong bao 
  // service api
  // check form
  constructor(private _flashMessagesService: FlashMessagesService,
    private appService: AppService,
    private validateService: ValidateService,
    private router: Router) { }

  ngOnInit() {
    this.appService.getDatasinhvien().subscribe(res => {
      if (res) {
        this.apiCheck = res;
      }
    });
  }
  onKeyup(event:any){
    for(let i = 0 ; i < this.apiCheck.length ; i++){
      if(this.apiCheck[i].mssv === this.mssv){
        this._flashMessagesService.show("Tài khoản tồn tại", { cssClass: 'alert-danger', timeout: 1000 });
        this.checkExit = "Tài khoản đã tồn tại";
        break;
      }else{
        this.checkExit = "";
      }
    }
  }
  // Them sinh vien lay du lieu tu form
  // check form dung chuan truoc khi gui du lieu
  themSinhvien() {
    // nhan du lieu tat ca api tu php de check co ton tai hay khong
   
    if (this.validateService.validateNull(this.mssv) &&
      this.validateService.validateNull(this.ho) &&
      this.validateService.validateNull(this.ten)) {
      // kiem tra email dung chuan email
      if (this.validateService.validateEmail(this.email)) {
        // kiem tra ton tai
        // kiem tra neu khong ton tai thi them du lieu vao
        if (!this.checkExit) {
          // thoa tat ca dieu kiem gui du lieu den php
          let data = {
            "mssv": this.mssv,
            "ho": this.ho,
            "ten": this.ten,
            "sdt": this.sdt,
            "gioitinh": this.gioitinh,
            "email": this.email
          }
          // dua du lieu qua service
          this.appService.postDatasinhvien(data).subscribe(res => {
            if (res) {
              // reset form va thông báo thêm thành công
              this.mssv = "";
              this.ho = "";
              this.ten = "";
              this.sdt = "";
              
              this.email = "";
              
              this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
          });
        }else{
          this._flashMessagesService.show("Tài khoản tồn tại", { cssClass: 'alert-danger', timeout: 3000 });
        }

      } else {
        // Thong bao  khi xuat hien loi
        this._flashMessagesService.show('Check email', { cssClass: 'alert-danger', timeout: 3000 });
      }

    } else {
      // Thong bao  khi xuat hien loi
      this._flashMessagesService.show('Check again', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }
  // khi ng dung focus vao form search thi chuyen huong den danh sach sinh vien de tim kim
  onFocus(event){
    let link = ['/danhsachsinhvien'];
    this.router.navigate(link);
  }
}

