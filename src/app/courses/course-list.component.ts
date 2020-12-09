import { Component } from '@angular/core';
import { Course } from './course';
import { OnInit} from '@angular/core';

@Component({
    selector: 'app-course-list',
    templateUrl : 'course-list.component.html'
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];
    
    ngOnInit(): void {
        this.courses = [
            {
                id: 1 ,
                name: 'Bootcamp Everis',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-996',
                duration: 120,
                rating: 4.5,
                releaseDate: '20 de dezembro de 2020'
            },
            {
                id: 2 ,
                name: 'Melhor do Brasil',
                imageUrl: '/assets/images/http.png',
                price: 100,
                code: 'EVS-2020',
                duration: 60,
                rating: 4 ,
                releaseDate: '18 de dezembro de 2020'
            }
           
        ]
    }


}
