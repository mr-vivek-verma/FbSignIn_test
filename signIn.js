var database = [
    {
        username: "vivek verma",
        password: "12345",
    }
];

var newsFeed = [
    {
        username: "ABC",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "XYZ",
        timeline: "Javascript is preeetyy cool!"
    },
    {
        username: "Demo1",
        timeline: "Javascript Demo1"
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password)
        console.log(newsFeed);
    else {
        alert("OOps...you have entered wrong username or password");
    }
}

signIn(userNamePrompt, passwordPrompt);