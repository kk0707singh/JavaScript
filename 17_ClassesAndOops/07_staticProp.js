class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is:${this.username}`);
        
    }
    createId(){
        console.log('123');
        
    }
}
const Sid = new user('sidharth')
Sid.createId()
Sid.logMe()


class Teacher extends user{
    constructor(email){
        this.email = email
    }
}