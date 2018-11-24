let sr = 0;
let src = 0;

fetch('/api/active')
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
                sr = parseInt(myJson2[0].starRating)
                src = parseInt(myJson2[0].starRatingCount)

                console.log (sr + ', ' + src)

                fetch(`/api/user/${element.userId}`)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(myJson3) {
                        console.log(myJson3)

                        switch(element.type){
                            case 'stars':
                                console.log(Math.round(parseInt(sr) / parseInt(src) * 2) / 2)
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
                                                <span style="font-size: 24px;">&#9734;   ${Math.round(sr / src * 2) / 2}</span>
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