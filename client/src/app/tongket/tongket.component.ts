import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AppService } from "../app.service";
import { ValidateService } from "../validation.service";
@Component({
  selector: 'app-tongket',
  templateUrl: './tongket.component.html',
  styleUrls: ['./tongket.component.css']
})
export class TongketComponent implements OnInit {
  // bien gan vao html khi tim kiem thay
  public id;
  public mssv;
  public ho;
  public ten;
  public tenmon;
  public diem;
  public diemchu;
  public tim;
  public checkTim= false; 
  public sinhvien = [];
  public sinhvienChange =[];
  public apiSinhvien ;
  public apiMon;
  public chonmon;
  // ham khoi tao gom 2 bien so
  // service,flash 
  constructor(private appService: AppService,
    private _flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit() {
    this.getSinhvien();
    this.getMon();
  }
  // get ten mon 
  getMon(){
    this.appService.getMon().subscribe(res=> {
      if(res){
        this.apiMon = res;
      }
    })
  }
  // ham chuyen mon xem
  onChange(val) {
    this.chonmon = JSON.parse(val);
    // reset lai bien sinhvien de xuat du lieu
    this.sinhvien = [];
    // duyen mang  co ten mon giong voi chon;
    for(let i = 0 ; i< this.sinhvienChange.length ; i++){
      if(this.sinhvienChange[i].tenmon == this.chonmon){
        this.sinhvien.push(this.sinhvienChange[i]);
      }
    }
  }
  // ham lay tat ca sinh vien show ra html
  getSinhvien(){
    this.appService.getThongtindiemsinhvien().subscribe(res => {
      if(res){
        // xuat ra mac dinh
        this.sinhvien = res;
        // thay doi khi chon loc theo mon
        this.sinhvienChange = res;
        //lay sinh vien cho vao mang de duyent search
        this.apiSinhvien = res;
      
      }
    })
  }
  // ham xoa ket qua diem so 
  // nhan mssv gia tri dau vao 
  delete(mssv : any){
    let check = confirm("Bạn có muốn xoá mssv: " + mssv + " này không");
    if (check) {
      this.appService.deleteThongtindiemsinhvien(mssv).subscribe(res => {
        if (res) {
          this.getSinhvien();
        }
      });
    }
  }
  // ham tim kiem theo mssv
  search(event){
    // vong lap kiem tra phan tu giong voi mang
    for(let i = 0 ; i < this.apiSinhvien.length ; i++){
      // kiem tra trung
      if(this.apiSinhvien[i].mssv === this.tim){
        // gan bien khi tim thay
        // bat co' va gan gia tri
        
        this.checkTim = true;
        this.id = this.appService[i].id;
        this.mssv = this.apiSinhvien[i].mssv;
        this.ho = this.apiSinhvien[i].ho;
        this.ten = this.apiSinhvien[i].ten;
        this.diem = this.apiSinhvien[i].diem;
        this.diemchu = this.apiSinhvien[i].diemchu;
        break;
      }else{
        // tim khong thay
        // dua ve gia tri ban dau
        // tat co' 
        this.mssv = " ";
        this.ho = " ";
        this.ten = " ";
        this.diem = " ";
        this.diemchu = " ";
        this.checkTim = false;
      }
    }
  }

  
}
