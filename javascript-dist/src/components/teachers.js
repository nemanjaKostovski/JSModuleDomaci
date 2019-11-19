import Teacher from './teacher';
import { countItems, Gender } from '../services/utils';


const teacherLists = [

    {
        firstName: 'Prvi',
        lastName: 'Profesor',
        age: 35,
        gender: 1,
        yearsOfExperience: 5
    },
    {
        firstName: 'Drugi',
        lastName: 'Profesor',
        age: 45,
        gender: 0,
        yearsOfExperience: 12
    }
];

export default class Teachers {
    constructor() {}
    getTeachers() {
        let html = '<ul>';
        teacherLists.forEach(teacher => {
           let item = new Teacher( teacher.firstName, teacher.lastName, teacher.age, teacher.gender, teacher.yearsOfExperience);
            html += item.getTeacher();
        });
        html += '</ul>';
        console.log('Init teachers', countItems(teacherLists));
        return html;
    }
}