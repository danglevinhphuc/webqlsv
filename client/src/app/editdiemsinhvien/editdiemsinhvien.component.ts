import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { AppService } from "../app.service";
import { ValidateService } from "../validation.service";

@Component({
  selector: 'app-editdiemsinhvien',
  templateUrl: './editdiemsinhvien.component.html',
  styleUrls: ['./editdiemsinhvien.component.css']
})
export class EditdiemsinhvienComponent implements OnInit {
  public mssv : String;
  public diem : number;
  public tenmon: String;
  
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
      .switchMap((params: Params) => this.appService.checkDiemsinhvien(params['id']))
      .subscribe(res => {
        
        // get tu dung lieu show ra form
        this.mssv = res.mssv;
        this.diem = res.diem;
        this.tenmon = res.tenmon;
      });
  }
  // function them diem cho sinh vien 
  // gui du lieu den service
  suadiemSinhvien(event) {
  
    
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
              'diemchu': diemchu,
              'tenmon' :this.tenmon 
            }
            this.appService.editDiemsinhvien(data).subscribe(res => {
              if (res) {
                
                // Thong bao den ng dung them thanh cong
                this._flashMessagesService.show("Sửa điểm thành công", { cssClass: 'alert-success', timeout: 3000 });
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
  }
  // khi ng dung focus vao form search thi chuyen huong den danh sach sinh vien de tim kim
  onFocus(event){
    let link = ['/tongket'];
    this.router.navigate(link);
  }
}
