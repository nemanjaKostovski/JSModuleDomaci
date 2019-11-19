import User from './user';
import { countItems, Gender } from '../services/utils';

const userLists = [
    {
        firstName: 'Prvi',
        lastName: 'Korisnik',
        age: 20,
        gender: 0
    },
    {
        firstName: 'Drugi',
        lastName: 'Korisnik',
        age: 21,
        gender: 1
    }
];

export default class Users {
    constructor() {}
    getUsers() {
        let html = '<ul>';
        userLists.forEach(user => {
            let item = new User(user.firstName, user.lastName, user.age, user.gender, user.yearsOfStudy);
            html += item.getUser();
        });
        html += '</ul>';
        console.log('Init users', countItems(userLists));
        return html;
    }
}
