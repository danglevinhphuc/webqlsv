import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AppService } from "../app.service";
import { ValidateService } from "../validation.service";
import { Router }            from '@angular/router';
@Component({
  selector: 'app-thongtingiaovien',
  templateUrl: './thongtingiaovien.component.html',
  styleUrls: ['./thongtingiaovien.component.css']
})
export class ThongtingiaovienComponent implements OnInit {
  public giaovien: any;
  public msgv: String;
  public hoten: String;
  public diachi: String;
  public email: String;
  public sdt: Number;
  public tenmon: String;
  public avarta; String;
  // ham khoi tao gom 4 bien so
  // thong bao 
  // service api
  // check form
  // router chuyen huong 
  constructor(private _flashMessagesService: FlashMessagesService,
    private appService: AppService,
    private validateService: ValidateService,
    private router: Router) { }

  ngOnInit() {
    this.getGiaovien();
  }
  // ham get thong tin giao vien show ra html
  getGiaovien() {
    this.appService.getGiaovien().subscribe(res => {
      if (res) {
        this.giaovien = res;
        // tao thong tin cho viec sua thong tin giao vien
        this.msgv = this.giaovien[0].msgv;
        this.hoten = this.giaovien[0].hoten;
        this.diachi = this.giaovien[0].diachi;
        this.sdt = this.giaovien[0].sdt;
        this.email = this.giaovien[0].email;
        this.avarta =this.giaovien[0].avatar;
      }
    })
  }
  suaThongtingv(event) {
    // nhan du lieu tat ca api tu php de check co ton tai hay khong

    if (
      this.validateService.validateNull(this.hoten)) {
      // kiem tra email dung chuan email
      if (this.validateService.validateEmail(this.email)) {
        // tao 1 json data gui api
        let data = {
          "msgv": this.msgv,
          "hoten": this.hoten,
          "diachi": this.diachi,
          "sdt": this.sdt,
          "email": this.email
        }
        // thong bao ng dung neu thay doi se xoa het tat ca du lieu diem sv
        let confirm_check = confirm("Bạn có muốn sửa không");
        if (confirm_check) {
          // dua du lieu qua service
          this.appService.editDatagiaovien(data).subscribe(res => {
            if (res) {
              // reset form va thông báo thêm thành công

              this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
          });
        }

      }

      else {
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
