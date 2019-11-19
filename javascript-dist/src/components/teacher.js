 class Teacher {
    constructor(
        firstName,
        lastName,
        age,
        gender,
        yearsOfExperience
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.yearsOfExperience = yearsOfExperience;
        console.log(`Init teacher - ${this.firstName}`);
    }
    getTeacher() {
        return `<li> ${this.firstName} ${this.lastName}</li>`;
    }
}

export default Teacher