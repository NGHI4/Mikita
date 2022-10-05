import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {studentcompoment} from "./student/student.component";
import {teachercomponent} from "./teacher/teacher";
import {logincomponent} from "./Login/login";
import {registercomponent} from "./Register/register";
import {Route, RouterModule, Routes} from "@angular/router";
import {thoitietcomponents} from "./thoitiet/thoitiet";
import {HttpClientModule} from "@angular/common/http";


const appRoutes: Routes = [
  {path:'',component:logincomponent},
  {path:'register',component:registercomponent},
  {path:'thoitiet',component:thoitietcomponents},
];
@NgModule({
  declarations: [
    AppComponent, ClassroomComponent , studentcompoment ,teachercomponent, logincomponent, registercomponent, thoitietcomponents
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
