import {Component, Input} from "@angular/core";
@Component({
  selector: 'student',
  templateUrl: './student.component.html'
})
export  class studentcompoment{

  @Input()
  classN?: string;

}
