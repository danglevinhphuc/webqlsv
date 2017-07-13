import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AppService } from "../app.service";
@Component({
  selector: 'app-danhsachsinhvien',
  templateUrl: './danhsachsinhvien.component.html',
  styleUrls: ['./danhsachsinhvien.component.css']
})
export class DanhsachsinhvienComponent implements OnInit, OnDestroy {
  // bien gan vao html khi tim kiem thay
  public mssv;
  public ho;
  public ten;
  public gioitinh;
  public sdt;
  public email
  public sinhvien;
  public apiSinhvien;
  public tim;
  public checkTim= false;
  public chuyen= true;
  constructor(private appService: AppService,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    // load du lieu len html page
    // Tat ca du lieu lay tu php
    this.getDataSinhvien();
  }
  ngOnDestroy() {
  }
  getDataSinhvien() {
    this.appService.getDatasinhvien().subscribe(res=>{
      if(res){
        this.sinhvien = res;
        //lay sinh vien cho vao mang de duyent search
        this.apiSinhvien = res;
      }
    })
  }
  delete(mssv: string) {
    let check = confirm("Bạn có muốn xoá mssv: " + mssv + " này không");
    if (check) {
      this.appService.deleteDatasinhvien(mssv).subscribe(res => {
        if (res) {
          this.getDataSinhvien();
        }
      });
    }
  }
  // ham tim kim theo mssv
  search(event){
    // vong lap kiem tra phan tu giong voi mang
    for(let i = 0 ; i < this.apiSinhvien.length ; i++){
      // kiem tra trung
      if(this.apiSinhvien[i].mssv === this.tim){
        // gan bien khi tim thay
        // bat co' va gan gia tri
        this.checkTim = true;
        this.mssv = this.apiSinhvien[i].mssv;
        this.ho = this.apiSinhvien[i].ho;
        this.ten = this.apiSinhvien[i].ten;
        this.sdt = this.apiSinhvien[i].sdt;
        this.gioitinh = this.apiSinhvien[i].gioitinh;
        this.email = this.apiSinhvien[i].email;
        break;
      }else{
        // tim khong thay
        // dua ve gia tri ban dau
        // tat co' 
        this.mssv = " ";
        this.ho = " ";
        this.ten = " ";
        this.sdt = " ";
        this.gioitinh = " ";
        this.email = " ";
        this.checkTim = false;
      }
    }
  }
}
