fetch('/api/active')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let max = 20
    myJson.length < max ? max = myJson.length : null
    for (i = 0 ; i < max ; i++) {
        const element = myJson[i];

        fetch(`/api/poll/${element.id}/option`)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson2) {

                fetch(`/api/user/${element.userId}`)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(myJson3) {
                        let sr = parseInt(myJson2[0].starRating)
                        let src = parseInt(myJson2[0].starRatingCount)

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
                                                <span style="font-size: 24px;">&#9734;   ${ !(sr === 0) ? Math.round(sr / src * 2) / 2 : 'New!'}</span>
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
