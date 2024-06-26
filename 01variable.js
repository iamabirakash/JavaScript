const accountId = "abcd"
let accountEmail = "abcd@google.com"
var accountPassword = "abcd1234"
accountCity = "Jaipur"  //it is legit in JS but we avoid practicing it
let accountState;  //the output will show UNDEFINED

console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword, accountState])

//prefer not to use var because of issue in block and functional scope