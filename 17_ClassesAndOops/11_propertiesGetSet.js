function user(email, password){
    this._email = email;
    this._password = password
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUppercase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new user('chai@coffee.com', 'chaicoffee')
console.log(chai.email);
