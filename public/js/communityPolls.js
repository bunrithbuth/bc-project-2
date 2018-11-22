let onPage = 1

pageChange(onPage)

$('#hpbutton1').css("background-color", "#14679e");
$('#hpbutton1').css("color", "#fefefe");


function pageChange(num) {
    let onPage = num
    
    $('.masonry-css').empty()

    fetch(`/api/active/${onPage}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let max = 2
        myJson.length < max ? max = myJson.length : null
        for (i = 0 ; i < max ; i++) {
            const element = myJson[i];
            console.log(element)

            fetch(`/api/poll/${element.id}/option`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson2) {
                    //console.log(myJson2)

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

            fetch('/api/count/active')
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    console.log('count ' + myJson.count)
                    console.log('perpage ' + myJson.perpage)
                    let pages = Math.ceil(myJson.count/myJson.perpage)
                    console.log('pages ' + pages)

                    $('.pagination').empty()

                    if(onPage > 1){
                        $('.pagination').append(` <li class="pagination-previous"><a href="#" onclick="pageChange(${onPage-1})" aria-label="Previous page">Previous</a></li> `)
                    }else if(onPage === 1){
                        $('.pagination').append(` <li class="pagination-previous disabled">Previous</li> `)
                    }

                    if(myJson.count/myJson.perpage < 5){
                        for(i = 1; i < (pages+1); i++){
                            if(i === onPage){
                                $('.pagination').append(` <li class="current"><span class="show-for-sr">You're on page</span> ${i}</li> `)
                            }else{
                                $('.pagination').append(` <li><a href="#" onClick="pageChange(${i})" aria-label="Page ${i}">${i}</a></li> `)
                            }
                        }
                    }else{
                        const delta = 2

                        let range = []
                        for (let i = Math.max(2, onPage - delta); i <= Math.min(pages - 1, onPage + delta); i++) {
                            range.push(i)
                        }

                        if (onPage - delta > 2) {
                            range.unshift("...")
                        }
                        if (onPage + delta < pages - 1) {
                            range.push("...")
                        }

                        range.unshift(1)
                        range.push(pages)
                        
                        console.log(range)

                        range.forEach(i => {
                            if(i !== "..."){
                                if(i === onPage){
                                    $('.pagination').append(` <li class="current"><span class="show-for-sr">You're on page</span> ${i}</li> `)
                                }else{
                                    $('.pagination').append(` <li><a href="#" onClick="pageChange(${i})" aria-label="Page ${i}">${i}</a></li> `)
                                }
                            }else{
                                $('.pagination').append(` <li class="ellipsis"></li> `)
                            }
                        });
                    }

                    if(onPage < pages){
                        $('.pagination').append(` <li class="pagination-next"><a href="#" onclick="pageChange(${onPage+1})" aria-label="Next page">Next</a></li> `)
                    }else if(onPage === pages){
                        $('.pagination').append(` <li class="pagination-next disabled">Next</li> `)
                    }
                })
            });
}