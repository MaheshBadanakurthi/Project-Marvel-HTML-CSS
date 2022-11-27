
let Char=document.getElementById('Characters')
let Comic=document.getElementById('Comics')
let story=document.getElementById('Stories')

function forCharecters(){
    // Comic.classList.add('hide');
    // story.classList.add('hide')
    Char.classList.add('active')

    console.log("charecter are working")

}

function forComics(){
    Char.classList.remove('active')
    // story.classList.add('hide')

    Comic.classList.add('active')
    console.log("Comics are working")


}
 
function forStories(){
    // Char.classList.add('hide')
    story.classList.add('active')

    Comic.classList.remove('active')
    console.log("Stories are working")

}



