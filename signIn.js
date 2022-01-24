var database = [
    {
        username: "vivek",
        password: "12345",
    },
    {
        username: "kriss",
        password: "11111",
    },
    {
        username: "jai",
        password: "22222",
    },
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
        username: "abc",
        timeline: "Javascript is cool!"
    }
];

function IsUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}
function signIn(username, password) {
    if (IsUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("OOps...you have entered wrong username or password");
    }
}
var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);