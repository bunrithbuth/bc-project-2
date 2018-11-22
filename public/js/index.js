
<<<<<<< HEAD
<<<<<<< HEAD
$(document).ready(function() {
    $(document).foundation()
    showForm.style.display = "none"
})
=======
fetch('/api/poll/active')
=======
fetch('/api/active')
>>>>>>> 808ada085a641869f8f741066c3334a43271e4e6
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson)
    let max = 20
    myJson.length < max ? max = myJson.length : null
    for (i = 0 ; i < max ; i++) {
        const element = myJson[i];

        fetch(`/api/poll/${element.id}/option`)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson2) {
                console.log(myJson2)

                fetch(`/api/user/${element.userId}`)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(myJson3) {
                        console.log(myJson3)

                        switch(element.type){
                            case 'stars':
                                $('.masonry-css').append(`
                                    <div class="masonry-css-item">
                                        <a href="/poll/${element.id}">
                                        <div class="callout">
                                            <h4 style="padding: 0px;">${element.name}</h4>
                                            <p>
                                                &#0151; ${myJson3.name}
                                            </p>
                                            <p>
                                                <span>Rating: </span>
                                                <span style="font-size: 24px;">&#9734;   3.5</span>
                                            </p>
                                        </div>
                                        </a>
                                    </div>
                                `)
                            break;
                            case 'twoChoices':
                                $('.masonry-css').append(`
                                    <div class="masonry-css-item">
                                        <a href="/poll/${element.id}">
                                        <div class="callout">
                                            <h5 style="padding: 0px;">${element.name}</h5>
                                            <h6>
                                                ${myJson2[0].name}
                                            </h6>
                                            <h6>
                                                ${myJson2[1].name}
                                            </h6>
                                            <p>
                                                &#0151; ${myJson3.name}
                                            </p>
                                        </div>
                                        </a>
                                    </div>
                                `)
                            break;
                            case 'multiple':
                                $('.masonry-css').append(`
                                    <div class="masonry-css-item">
                                        <a href="/poll/${element.id}">
                                        <div class="callout">
                                            <h5 style="padding: 0px;">${element.name}</h5>
                                            <h6>
                                                ${myJson2[0].name}
                                            </h6>
                                            <h6>
                                                ${myJson2[1].name}
                                            </h6>
                                            <h6>
                                                ${myJson2[2].name}
                                            </h6>
                                            <p>
                                                &#0151; ${myJson3.name}
                                            </p>
                                        </div>
                                        </a>
                                    </div>
                                `)
                            break;
                        }
                    })
            })
        }
  });
>>>>>>> ad971f0cac37f836cbef8fe4df6f535698237a13
