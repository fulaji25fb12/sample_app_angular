import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';
import { CourseModel } from './models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myapp';

  courseForm!: FormGroup;
  courseData: any;
  singleCourse: any;
  cardTitle = 'Add';
  btnValue = 'Add';
  textMsg!: string;

  constructor(private fb: FormBuilder, private apiService: ApiService) { 
    this.courseForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.apiService.getCourse().subscribe({
      next: (res) => {
        this.courseData = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  editCourse(id: number) {
    this.apiService.getCourseById(id).subscribe({
      next: (res) => {
        this.singleCourse = res;
        this.courseForm.controls['name'].setValue(res.name);
        this.cardTitle = 'Update';
        this.btnValue = 'Update';
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  submitForm() {
    if(this.singleCourse) {
      this.apiService.updateCourse(this.courseForm.value, this.singleCourse.id).subscribe({
        next: (res) => {
          if(res) {
            this.getCourses();
            this.courseForm.reset();
            this.singleCourse = '';
            this.cardTitle = 'Add';
            this.btnValue = 'Add';
            this.textMsg = 'Update Course';
          }
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    else {
      this.apiService.addCourse(this.courseForm.value).subscribe({
        next: (res) => {
          if(res) {
            this.getCourses();
            this.courseForm.reset();
            this.textMsg = 'Add Course';
          }
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  deleteCourse(id: number) {
    this.apiService.deleteCourse(id).subscribe({
      next: (res) => {
        if(res) {
          this.textMsg = 'Deleted Course';
          this.getCourses();
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
