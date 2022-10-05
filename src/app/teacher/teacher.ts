import {Component, Input} from "@angular/core";
@Component({
  selector: 'teacher',
  templateUrl: './teacher.html'
})
export  class teachercomponent{
  @Input()
  schoolN?: string;
}


