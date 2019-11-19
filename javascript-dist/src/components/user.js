// napraviti User i getUser()
// Isti fazon kao i students student i teachers teacher
class User {
    constructor(
        firstName,
        lastName,
        age,
        gender
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        console.log(`Init user - ${this.firstName}`);
    }
    getUser() {
        return `<li>${this.firstName} ${this.lastName}</li>`;
    }
}

export default User