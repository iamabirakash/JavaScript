// const helloUser = new Object();   SINGLETON
// const helloUser = {};   NOT A SINGLETONE
// helloUser.id = "123"
// helloUser.name = "Hello"
// helloUser.isLoggedIn = false

// console.log(helloUser);

// -----------------------------------------------------------

// const helloUser = {
//     email: "abc@google.com",
//     fullname: {
//         userFullName: {
//             firstName: "Hello",
//             lastName: "User"
//         }
//     }
// }

// console.log(helloUser.fullname);

// ******************* MERGING **************************

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign(obj1,obj2) //obj1 target others source,,obj1 gets updated and merged
// const obj3 = Object.assign({},obj1,obj2) //prefered the {} is target and others are source,,,{} gets updated merged

// const obj3 = {...obj1,...obj2} //prefred

// console.log(obj3);


// *************************** FOR DATABSES ***************************

// const helloUser = {};
// helloUser.id = "123"
// helloUser.name = "Hello"
// helloUser.isLoggedIn = false

// console.log(helloUser);
// console.log(Object.keys(helloUser));
// console.log(Object.values(helloUser));

// *************************** DESTRUCTURING (used in react) ******************************


// const helloUser = {
//     email: "abc@google.com",
//     fullname: {
//         userFullName: {
//             firstName: "Hello",
//             lastName: "User"
//         }
//     }
// }

// console.log(helloUser.email);

// const {email} = helloUser
// const {email: mail} = helloUser   NICKNAME MAIL

// console.log(email);
// console.log(mail);


// ******************************** API ***********************************
