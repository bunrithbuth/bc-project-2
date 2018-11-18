/** How to use
   The buttons appear in the firebaseui-auth-container
   Once the user signs in, their current session is saved to firebase.auth().currentUser
   */

var config = {
    apiKey: "AIzaSyDzwxpyn4S-n67J4Xwtv7tBUrMcF34nIdk",
    authDomain: "taco-bigguy4u.firebaseapp.com",
    databaseURL: "https://taco-bigguy4u.firebaseio.com",
    projectId: "taco-bigguy4u",
    storageBucket: "taco-bigguy4u.appspot.com",
    messagingSenderId: "564240678896"
};


firebase.initializeApp(config);

var userSignedIn = false;
var database = firebase.database();

var api = {}
var userProfile = {}
function apiKeyUpdate() {
    api = getApiKeys();
}

function getApiKeys() {
    return retrieveData('/api/')
}

$(document).on('click', '#signout', function () {
    signOut();
})

function updateUserProfile() {
    rst = {};
    database.ref('/users/' + getUid()).once('value', function (snap) {
        snap.forEach(function (child) {
            rst[child.key] = child.val();
        })
    }).then(function () {
        userProfile = rst;
    })
}

function retrieveData(path) {
    rst = {};
    database.ref(path).once('value', function (snap) {
        snap.forEach(function (child) {
            rst[child.key] = child.val();
        })
    }).then(function () {
        return rst;
    })
}

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirctUrl) {
            return true;
        },
        uiShown: function () {
            document.getElementById('loader').style.display = 'none';
        }
    },
    signInFlow: 'popup',
    signInSuccessUrl: '/manage',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
}

ui.start('#firebaseui-auth-container', uiConfig);

// When the user sign in or sign out, this function will be triggered.
firebase.auth().onAuthStateChanged(function (user) {

    let elements = {
        signin: [document.getElementById("firebaseui-auth-container"),
        getUser(),
        checkNewUser()
        ],

        signout: [document.getElementById("signout-button")]
    }
})

function checkNewUser() {
    var temp = {
        name: firebase.auth().currentUser.displayName,
        email: firebase.auth().currentUser.email,
        photoURL: firebase.auth().currentUser.photoURL
    }
    console.log(firebase.auth().currentUser)
    $.post("/api/signin", temp).then(function(data){
        localStorage.setItem(temp);
    });
}

// return current user object from firebase.auth
function getUser() {
    return firebase.auth().currentUser;
}

// returns uid of current loged in user
function getUid() {
    return getUser().uid;
}

function getUemail() {
    return getUser().email;
}

function signOut() {
    console.log('signing out')
    firebase.auth().signOut();
}

function pushProfile() {
    database.ref('/users/' + getUid()).set(userProfile);
}

function addUserProfile(user) {
    let existing = false;
    database.ref('/users/').once('value', function (snap) {
        snap.forEach(function (child) {
            if (child.key == user.uid) {
                existing = true;
            }
        })
    }).then(function () {
        if (existing) {
            updateUserProfile();
        } else {
            database.ref('/users/' + user.uid).set(constructUser(user));
            updateUserProfile();
        }
    })
}

function constructUser(user) {
    return {
        name: user.displayName,
        uid: user.uid,
        email: user.email,
    }
}

$(document).ready(function () {
    if (userSignedIn) {
        updateUserProfile();
    }
})

