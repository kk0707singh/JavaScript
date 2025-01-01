// const tinderUser = new Object()    //Singleton object create krne ka tareeka

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "KrishnaKantSingh"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log(Object.keys(tinderUser));    //returns array of keys that are very usefull
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));   //individual key aur value ka array
console.log(tinderUser.hasOwnProperty('loggedIn'));    //to check whether the element is present or not





const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "krishna",
            lastname: "Singh"
        }
    }
}
console.log(regularUser);

console.log(regularUser.fullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// // const allObj = Object.assign(obj1,obj2)  //we can also use --------Object.assign({}, obj1,obj2)
// // console.log(allObj);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = [
//     {
//         // id: 1,
//         // email: "a@gmail.com"
//     },
//     {

//     },
//     {

//     },
// ]
// // users[1].email
// // console.log(users[1].email);


const course = {
    courseName: "chai aur code",
    instructorName: "HiteshChaudhary",
    price: "999"
}


//-------------------objects destructure----------------------------------


console.log(course.instructorName);    //fetch value from object
//  course.instructorName


const{courseName} = course             //alternate const{courseName: SubjectName} = course
// console.log(courseName);            // pasd the value in log



//------------------Json API---------------------------

// {
//     "name": "krishnaKantSingh",
//     "courseName": "chaiAurCode",
//     "price": "free"

// }

[
    {},
    {},
    {}
]
