function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    document.title = `Arul's Portfolio`;

}

function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here 
    document.getElementById('header').children[0]
    .innerText = 'Arul Seth';
}

function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here 

    document.getElementsByClassName('section')[0].children[1]
    .innerText = `My name is Arul and I am currently 21 years old. 
    I am attending the software bootcamp App Academy.`
    
}

export {
    changeTitle,
    changeHeader,
    changeAboutMe
}





