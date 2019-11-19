import Students from '../components/students'
import Teachers from '../components/teachers'
import Users from '../components/users'

class Content {
    constructor() {
        console.log('Init content');
        console.log('Init content');
    }
    getHtml() {
        const students = new Students();
        let html = '<div>';
        html += students.getStudents();
        console.log('Init content');
        const teachers = new Teachers();
        html += teachers.getTeachers();
        console.log('Init content');
        const users = new Users();
        html += users.getUsers();
        html += '</div>';
        
        return html;
    }



}

export default Content;