// $(document).ready(function () {
//     getMyPolls();

// });


function getMyPolls() {
    $.get("/api/myPolls", function (data) {
        console.log("Posts", data);
        for (var i = 0; i < data.length; i++) {
            $('.polls').append(`
                Created: ${data[i].createdAt} <br>
                Updated: ${data[i].updatedAt} <br>
                <button onClick='deletePoll(${data[i].id})'>Delete</button>
            `);
        }

    });
};

function deletePoll(id){
    

}