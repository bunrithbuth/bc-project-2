$(document).foundation();

let user = {
    authUser () {
        if(!localStorage.getItem('user')) {
          return false
        }else{
          let user = JSON.parse(localStorage.getItem('user'))
          $('.top-bar-right li').empty();
          $('.top-bar-right li').append(`
            <a class="top-bar-right" id="nav3" onclick="user.logout()">Log Out</a>
          `);
          $('.manager').css('display','block');
        }
      },
      logout () {
        localStorage.clear();
        $('.top-bar-right li').empty();
          $('.top-bar-right li').append(`
            <a class="top-bar-right" id="nav3" href="/signin">Log In</a>
          `);
          $('.manager').css('display','none')
      }
};

user.authUser();