$(document).foundation();

let user = {
    authUser () {
        if(!localStorage.getItem('user')) {
          return false
        }else{
          let user = JSON.parse(localStorage.getItem('user'))
          console.log(user)

          $('.top-bar-right li').empty();
          $('.top-bar-right li').append(`
            <a class="top-bar-right" id="nav3" onclick="user.logout()">Log Out</a>
          `);
        }
      },
      logout () {
        localStorage.clear();
        $('.top-bar-right li').empty();
          $('.top-bar-right li').append(`
            <a class="top-bar-right" id="nav3" href="/signin">Log In</a>
          `);
      }
};

user.authUser();