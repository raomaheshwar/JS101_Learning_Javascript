//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let given_username = "Maheshwar";
let given_password = "12345";

let input_username = "Maheshwar";
let input_password = "1234";

if(given_username == input_username){
  if(given_password == input_password){
    console.log("you can log in");
    }
    else{
      console.log("ypur password is not matching");
    }
}
else{
  console.log("your user name is not matching");
}
