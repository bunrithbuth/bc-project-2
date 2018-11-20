
fetch('/api/poll/active')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    for (const key in myJson) {
        const element = myJson[key];
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
$(document).ready(function() {
    $(document).foundation()
})
