class user{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    
    set password(value){
        this._password = value.toUpperCase()
    }
}
const sid = new user('s@singh.sid', '123')
console.log(sid.password);
console.log(sid.email);

