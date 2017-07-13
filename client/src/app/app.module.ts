import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes }   from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {ValidateService} from "./validation.service";

import {AppService} from "./app.service";
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DrashboardComponent } from './drashboard/drashboard.component';
import { DanhsachsinhvienComponent } from './danhsachsinhvien/danhsachsinhvien.component';
import { ThongtingiaovienComponent } from './thongtingiaovien/thongtingiaovien.component';
import { ThemdiemComponent } from './themdiem/themdiem.component';
import { TongketComponent } from './tongket/tongket.component';

import { ThemsinhvienComponent } from './themsinhvien/themsinhvien.component';
import { EditsinhvienComponent } from './editsinhvien/editsinhvien.component';
import { EditdiemsinhvienComponent } from './editdiemsinhvien/editdiemsinhvien.component';


// dieu huong menu drashboard
const routes: Routes = [
  { path: '', redirectTo: '/danhsachsinhvien', pathMatch: 'full' },
  { path: 'dashboard',  component: DrashboardComponent },
  { path: 'danhsachsinhvien',  component: DanhsachsinhvienComponent },
  { path: 'thongtingiaovien',  component: ThongtingiaovienComponent },
  { path: 'themdiem',  component: ThemdiemComponent },
  { path: 'tongket',  component: TongketComponent },
  { path: 'themsinhvien',  component: ThemsinhvienComponent },
  { path: 'editsinhvien/:id',  component: EditsinhvienComponent },
  { path: 'editdiemsinhvien/:id',  component: EditdiemsinhvienComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DrashboardComponent,
    DanhsachsinhvienComponent,
    ThongtingiaovienComponent,
    ThemdiemComponent,
    TongketComponent,
    ThemsinhvienComponent,
    EditsinhvienComponent,
    EditdiemsinhvienComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) ,
    FlashMessagesModule
    
  ],
  providers: [AppService,ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
