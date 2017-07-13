import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { AppService } from "../app.service";
import { ValidateService } from "../validation.service";
@Component({
  selector: 'app-editsinhvien',
  templateUrl: './editsinhvien.component.html',
  styleUrls: ['./editsinhvien.component.css']
})
export class EditsinhvienComponent implements OnInit {
  //mssv ban dau
  public idParam: String;
  public mssv: String;
  public sdt: String;
  public ho: String;
  public ten: String;
  public gioitinh = "nam";
  public email: String;
  public apiCheck: any[];
  // ham khoi tao gom 5 bien so
  // service,flash, derective, validation,params
  constructor(private appService: AppService,
    private _flashMessagesService: FlashMessagesService,
    private route: ActivatedRoute,
    private validateService: ValidateService,
    private router: Router) { }

  ngOnInit() {
    // lay du lieu show ra form
    this.route.params
      .switchMap((params: Params) => this.appService.checkDatasinhvien(params['id']))
      .subscribe(res => {
        // get tu dung lieu show ra form
        this.idParam = res.mssv;
        this.ho = res.ho;
        this.ten = res.ten;
        this.sdt = res.sdt;
        this.gioitinh = res.gioitinh;
        this.email = res.email;
      });
     
  }

  // Sua sinh vien lay du lieu tu form
  // check form dung chuan truoc khi gui du lieu
  suaSinhvien(event) {
    // nhan du lieu tat ca api tu php de check co ton tai hay khong
    // kiem tra ho va ten khac rong
    if (this.ho.length != 0 && this.ten.length!= 0){
      // kiem tra email dung chuan email
      if (this.validateService.validateEmail(this.email)) {
        // kiem tra ton tai
        // kiem tra neu khong ton tai thi them du lieu vao
        
          // thoa tat ca dieu kiem gui du lieu den php
          let data = {
            "mssv": this.idParam,
            "ho": this.ho,
            "ten": this.ten,
            "sdt": this.sdt,
            "gioitinh": this.gioitinh,
            "email": this.email
          }
          // dua du lieu qua service
          this.appService.editDatasinhvien(data).subscribe(res => {
            if (res) {
              // reset form va thông báo thêm thành công
              this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
          });
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
