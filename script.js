
var cats = [
    {
        numberOfClicks:0,
        name:'AMY',
        url:'https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg'
    },
    {
        numberOfClicks:0,
        name:'BEN',
        url:'https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg'
    },
    {
        numberOfClicks:0,
        name:'POL',
    },
    {
        numberOfClicks:0,
        name:'VIN'
    },
    {
        numberOfClicks:0,
        name:'RAY'
    }
]

var currentCat;

function render(){
    $('.catName').html(currentCat.name);
    $('img').attr('src',currentCat.url);
    $('.clickCount').html('<div>Number Of Clicks=' + currentCat.numberOfClicks + '</div>');

}

$('img').click(function(){
    currentCat.numberOfClicks++;
    $('.clickCount').html('<div>Number Of Clicks=' + currentCat.numberOfClicks + '</div>');
})

var buttons = $('button');

for(var i = 0; i < buttons.length; i++){
    $(buttons[i]).on('click',(function(iCopy){
        return function(){
            console.log(iCopy);
            currentCat = cats[iCopy];
            render();
        }
    })(i));
}

