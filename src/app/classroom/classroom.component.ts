import {Component} from "@angular/core";

@Component({
  selector: 'classroom',
  templateUrl: './classroom.component.html'
})
export class ClassroomComponent {
  className = 'T2207A - SEM 1`';
  siso = 27;

  schoolName = 'FPT Academy International';

  themSinhVien() {
    this.siso++;
  }

  giamSinhVien() {
    this.siso--;
  }
  sobangai = 10;
  themBanGai() {
    if (this.sobangai > 0){
      this.sobangai++;
    }
  }

  giamBanGai() {
    if (this.sobangai > 0){
      this.sobangai--;
    }
  }
}




