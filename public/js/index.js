
fetch('/api/poll/active')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let max = 12
    myJson.length < max ? max = myJson.length : null
    for (i = 0 ; i < max ; i++) {
        const element = myJson[i];
        console.log(element)
        $('.masonry-css').append(`
        <div class="masonry-css-item">
            <div class="callout">
            <h4>${element.name}</h4> HERE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aliquam, corrupti, quis rem beatae quidem, labore, aspernatur nihil distinctio fugit sint facilis sunt eius fugiat iusto blanditiis tenetur alias ut.
            </div>
        </div>
    `)
    }
  });
