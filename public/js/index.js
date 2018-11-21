
<<<<<<< HEAD
$(document).ready(function() {
    $(document).foundation()
    showForm.style.display = "none"
})
=======
fetch('/api/poll/active')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let max = 12
    myJson.length < max ? max = myJson.length : null
    for (i = 0 ; i < max ; i++) {
        const element = myJson[i];
        //console.log(element)

        fetch(`/poll/${element.id}/option`)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson2) {
                console.log(myJson2)
                switch(element.type){
                    case 'star':
                        $('.masonry-css').append(`
                            <div class="masonry-css-item">
                                <a href="/poll/${element.id}">
                                <div class="callout">
                                    <h4 style="padding: 0px;">${element.name}</h4>
                                    <p>
                                        This would of been the description
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
                }
            })
            }
  });
>>>>>>> ad971f0cac37f836cbef8fe4df6f535698237a13
