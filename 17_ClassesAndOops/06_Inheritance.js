class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME IS: ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`a new course is added by: ${this.username}`);
        
    }
}

const chai = new Teacher('chai', 'chai@coffee.com', '334455')
chai.addCourse()
console.log(chai);

