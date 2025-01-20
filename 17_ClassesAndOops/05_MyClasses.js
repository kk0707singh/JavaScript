class user {
    constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    }
    encryptPassword(){
        return`${this.password}abc`
    }
    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new user(username='sidharth', email='kk@singh.com', password='98765')
console.log(chai.encryptPassword());
console.log(chai.changeUserName());






// BEHIND THE SCENE
function User(username, password,email){
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function(){
    return`${this.password}abc`
}

User.prototype.changeUserName = function(){
    return`${this.username.toUpperCase()}`
}

const tea = new User('tea', '34567', 'tea@chai.com')
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUserName());






