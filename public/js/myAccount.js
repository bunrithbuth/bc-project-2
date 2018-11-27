let curUser = JSON.parse(localStorage.getItem("user"))


function appendUserInfo() {
    $('.account').append(`
    <img src="${curUser.photoURL}" alt="User profile" style="height:200px; width:200px">
    <br>
    Name: ${curUser.name}
    <br>
    Email: ${curUser.email}
    `)
}

$('#update').on('click', function () {
    event.preventDefault()
    console.log(document.getElementById('photoURL').value)
    var temp = {
        userId: curUser.id,
        photoURL: document.getElementById('photoURL').value
    }

    $.ajax({
        method: "PUT",
        url: "/api/user/" + curUser.id,
        data: temp
    }).then(res => {
        console.log(res)
    });

    curUser.photoURL = document.getElementById('photoURL').value;
        console.log(curUser)
        localStorage.setItem("user", JSON.stringify(curUser));
        location.reload();
});


console.log(curUser)
appendUserInfo();


