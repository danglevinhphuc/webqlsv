import {Injectable} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AppService{
    URL = "http://localhost:8000/php-angularjs/";
    constructor(private http:Http){}
    // lay tat ca sinh vien ve thong tin
    // gui du lieu den php 
    getDatasinhvien(){
        // GET
       return  this.http.get(this.URL+"?c=trangchu&a=getsinhvien").map(res => res.json());
    }
    // kiem tra sinh vien co ton tai hay khong
    // gui du lieu den php 
    // 1 bien so dau vao
    checkDatasinhvien(mssv : String){
        //GET
       return  this.http.get(this.URL+"?c=trangchu&a=checksinhvien&mssv="+mssv).map(res => res.json());
    }
    // servivce them sinh vien
    // gui du lieu den php 
    // 1 bien so dau vao
    postDatasinhvien(value : any){
        // chuan hoa thanh du lieu qua php
        const body = new URLSearchParams(value);
        body.set("ho",value.ho);
        body.set("mssv",value.mssv);
        body.set("sdt",value.sdt);
        body.set("email",value.email);
        body.set("gioitinh",value.gioitinh);
        body.set("ten",value.ten);
        
        // chuan hoa va gui du lieu
        // POST
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'});
        return this.http.post(this.URL+"?c=trangchu&a=postsinhvien",body,{headers: headers}).map(res=>res.json());
    }
    deleteDatasinhvien(value: any){
        // DELETE
        return this.http.delete(this.URL+"?c=trangchu&a=deletesinhvien&mssv="+value).map(res=>res.json());
    }
    // servivce sua sinh vien
    // gui du lieu den php 
    // 1 bien so dau vao
    editDatasinhvien(value: any){
        
        const body = new URLSearchParams(value);
        body.set("ho",value.ho);
        body.set("sdt",value.sdt);
        body.set("email",value.email);
        body.set("gioitinh",value.gioitinh);
        body.set("ten",value.ten);
        // chuan hoa va gui du lieu
        // POST
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'});
        return this.http.post(this.URL+"?c=trangchu&a=editsinhvien&mssv="+value.mssv,body,{headers: headers}).map(res=>res.json());
    }
    // servivce get mamon va tenmon
    getMon(){
        // Get
        return  this.http.get(this.URL+"?c=trangchu&a=getMon").map(res => res.json());
    }
    // Them diem cho sinh vien
    // 1 bien so dau vao
    postDiemsinhvien(value : any){
        // chuan hoa thanh du lieu qua php
        const body = new URLSearchParams(value);
        body.set("mssv",value.mssv);
        body.set("diem",value.diem);
        body.set("tenmon",value.tenmon);
        body.set("diemchu",value.diemchu);
        // chuan hoa va gui du lieu
        // POST
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'});
        return this.http.post(this.URL+"?c=trangchu&a=postdiemsinhvien",body,{headers: headers}).map(res=>res.json());
    }
    // get thong tin sinh vien ve mon hoc
    getThongtindiemsinhvien(){
        // Get
        return  this.http.get(this.URL+"?c=trangchu&a=getthongtindiemsinhvien").map(res => res.json());
    }
    // xoa thong tin diem so cua 1 sinh vien
    deleteThongtindiemsinhvien(value:any){
        // DELETE
        return this.http.delete(this.URL+"?c=trangchu&a=deletethongtindiemsinhvien&id="+value).map(res=>res.json());
    }
    // ham lay diem sinh vien cho viec sua
    checkDiemsinhvien(value){
        // Get
        return  this.http.get(this.URL+"?c=trangchu&a=checkdiemsinhvien&id="+value).map(res => res.json());
    }
    // sua diem cua sinh vien
    editDiemsinhvien(value){
        const body = new URLSearchParams(value);
        body.set("mssv",value.mssv);
        body.set("diem",value.diem);
        body.set("diemchu",value.diemchu);
        body.set("tenmon",value.tenmon);
        // chuan hoa va gui du lieu
        // POST
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'});
        return this.http.post(this.URL+"?c=trangchu&a=editdiemsinhvien&mssv="+value.mssv,body,{headers: headers}).map(res=>res.json());
    }
    // get thong tin giao vien day
    getGiaovien(){
        // Get
        return  this.http.get(this.URL+"?c=trangchu&a=getgiaovien").map(res => res.json());
    }
    // edit giao vien 
    // 1 du lieu dau vao
    editDatagiaovien(value){
        const body = new URLSearchParams(value);
        body.set("msgv",value.msgv);
        body.set("hoten",value.hoten);
        body.set("diachi",value.diachi);
        body.set("sdt",value.sdt);
        body.set("email",value.email);
        // chuan hoa va gui du lieu
        // POST
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'});
        return this.http.post(this.URL+"?c=trangchu&a=editGiaovien&mgsv="+value.msgv,body,{headers: headers}).map(res=>res.json());
    }
    // Them mon hoc bien dau vao la ten mon
    themMon(value){
        const body = new URLSearchParams(value);
        body.set("tenmon",value);
         // chuan hoa va gui du lieu
        // POST
        let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'});
        return this.http.post(this.URL+"?c=trangchu&a=themMon",body,{headers: headers}).map(res=>res.json());
    }
    // xoa mon hoc
    xoaMon(value){
        // DELETE
        return this.http.delete(this.URL+"?c=trangchu&a=xoaMon&id="+value).map(res=>res.json());
    }
}
