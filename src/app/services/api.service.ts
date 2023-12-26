import { Injectable } from "@angular/core";
import { HelperService } from "../helper/helper.service";
import { Observable } from "rxjs";
import { CourseModel } from "../models/course.model";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private helper: HelperService) { }

    getCourse(): Observable<CourseModel> {
        return this.helper.getApiCall<CourseModel>('api/courses');
    }

    getCourseById(id: number): Observable<CourseModel> {
        return this.helper.getApiCall<CourseModel>(`api/courses/${id}`);
    }

    addCourse(course: CourseModel): Observable<CourseModel> {
        return this.helper.postApiCall<CourseModel>('api/courses', course);
    }

    updateCourse(course: CourseModel, id: any): Observable<CourseModel> {
        return this.helper.putApiCall<CourseModel>(`api/courses/${id}`, course);
    }

    deleteCourse(id: number): Observable<CourseModel> {
        return this.helper.deleteApiCall<CourseModel>(`api/courses/${id}`);
    }

}