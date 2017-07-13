import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AppService } from "../app.service";
import { ValidateService } from "../validation.service";
@Component({
  selector: 'app-themdiem',
  templateUrl: './themdiem.component.html',
  styleUrls: ['./themdiem.component.css']
})
export class ThemdiemComponent implements OnInit {
  // bien giu api du lieu gui den tu php
  public apiCheck: any;
  public mssv: String;
  public ho = " ";
  public ten = " ";
  public diem: Number;
  public mon: String;
  public apiMon;
  public tenmon;
  // ham khoi tao gom 3 bien so
  // thong bao 
  // service api
  // check form

  constructor(private _flashMessagesService: FlashMessagesService,
    private appService: AppService,
    private validateService: ValidateService,
    private router: Router) { }

  ngOnInit() {
    // lay du lieu sinh vien
    this.getSinhvien();
    this.getMon();
  }
  getMon() {
    // lay du lieu mon hoc
    this.appService.getMon().subscribe(res => {
      //this.mon = res.tenmon;
      
      if(res){
        this.apiMon = res;
      }
    })
  }
  getSinhvien() {
    this.appService.getDatasinhvien().subscribe(res => {
      this.apiCheck = res;
    });
  }
  // ham get ho va ten cua sinh vien qua mssv da chọn
  dataMssv(event) {
    for (let i = 0; i < this.apiCheck.length; i++) {
      if (this.apiCheck[i].mssv === this.mssv) {
        this.ho = this.apiCheck[i].ho;
        this.ten = this.apiCheck[i].ten;
        break;
      } else {
        this.ho = " ";
        this.ten = " ";
      }
    }
  }
  // function them diem cho sinh vien 
  // gui du lieu den service
  themdiemSinhvien(event) {
    // kiem tra 2 lan mssv xem co rong hay khong
    if (this.validateService.validateNull(this.mssv)) {
      if (this.mssv !== " " && this.ho !== " " && this.validateService.validateNull(this.mon)) {
        console.log(this.mon);
        // kiem tra diem nhap vao co rong hay khong 2 lan kiem tran
        if (this.validateService.validateNull(this.diem)) {
          // kiem tra thoa dieu kien nhap diem
          // phai lon hon 0 va nho hon 10
          if (this.diem >= 0 && this.diem <= 10) {
            // tong hop du lieu can them 
            // duoi dang json mang
            let diemchu = this.validateService.validateDiem(this.diem);
            let data = {
              'mssv': this.mssv,
              'diem': this.diem,
              'tenmon': this.mon,
              'diemchu': diemchu
            }
            this.appService.postDiemsinhvien(data).subscribe(res => {
              if (res) {
                //reset lai input
                this.mssv = " ";
                this.ho = " ";
                this.ten = " ";
                this.getSinhvien();
                // Thong bao den ng dung them thanh cong
                this._flashMessagesService.show("Thêm điểm thành công", { cssClass: 'alert-success', timeout: 3000 });
              }
            });


          } else {
            // Thong bao den ng dung
            this._flashMessagesService.show("Điểm phải từ 0 -> 10", { cssClass: 'alert-danger', timeout: 3000 });
          }
        } else {
          // Thong bao den ng dung
          this._flashMessagesService.show("Chưa có điểm", { cssClass: 'alert-danger', timeout: 3000 });
        }
      } else {
        // Thong bao den ng dung
        this._flashMessagesService.show("Chưa có mssv hoặc mssv sai hoặc chưa có môn dạy ", { cssClass: 'alert-danger', timeout: 3000 });
      }
    } else {
      // Thong bao den ng dung
      this._flashMessagesService.show("Chưa có mssv ", { cssClass: 'alert-danger', timeout: 3000 });
    }
  }
  // khi ng dung focus vao form search thi chuyen huong den danh sach sinh vien de tim kim
  onFocus(event) {
    let link = ['/tongket'];
    this.router.navigate(link);
  }
  // Them mon day
  themMon(event) {
    // bien co thong bao co ton tai hay khong
    let check = 0;
    // kiem tra 2 lan mssv xem co rong hay khong
    if (this.validateService.validateNull(this.tenmon) && this.tenmon.length > 0) {
      //check trung ten
      //khi trung thi k cho them va thong bao den nguoi dung
      for (let i = 0; i < this.apiMon.length; i++) {
        if (this.apiMon[i].tenmon === this.tenmon) {
          check = 1;
          break;
        } else {
          check = 0;
        }
      }
      if (check === 0) {
        this.appService.themMon(this.tenmon).subscribe(res => {
          if (res) {
            this.tenmon = " ";
            this.getMon();
          }
        })
      }else{
        this._flashMessagesService.show("Tên môn đã tồn tại", { cssClass: 'alert-danger', timeout: 3000 });
      }

    } else {
      this._flashMessagesService.show("Chưa có tên môn", { cssClass: 'alert-danger', timeout: 3000 });
    }
  }
  // Xoa mon 
  xoaMon(value) {
    // hoi truoc khi xoa
    let check = confirm("Bạn có muốn xoá không");
    if (check) {
      this.appService.xoaMon(value).subscribe(res => {
        if (res) {
          this.getMon();
        }
      })
    }
  }
}
