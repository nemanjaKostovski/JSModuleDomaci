// default - ne moramo da ubacujemo brekets kod naziva klase kada importujemo
class Student {
    constructor(
        firstName,
        lastName,
        age,
        gender,
        yearsOfStudy
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.yearsOfStudy = yearsOfStudy;
        console.log(`Init student - ${this.firstName}`);
    }
    getStudent() {
        return `<li>${this.firstName} ${this.lastName}</li>`;
    }
}

export default Student