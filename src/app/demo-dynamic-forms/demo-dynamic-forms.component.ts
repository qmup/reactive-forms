import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-dynamic-forms',
  templateUrl: './demo-dynamic-forms.component.html',
  styleUrls: ['./demo-dynamic-forms.component.css']
})
export class DemoDynamicFormsComponent implements OnInit {
  dynamicForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.dynamicForm = new FormGroup({
      fullname: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experientInYear: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }

  loadData(): void {
    this.dynamicForm.setValue({
      fullname: 'Nguyễn Minh Quân',
      email: 'quan@gmail.com',
      skills: {
        skillName: 'Angular',
        experientInYear: 1,
        proficiency: 'intermediate'
      }
    });
  }

  onSubmit(): void {
    console.log(this.dynamicForm.value);
  }

}
