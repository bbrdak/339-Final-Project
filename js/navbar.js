//use document.links to look at the different links for the page
let index = 0;
for(let i = 0; i < document.links.length; ++i) {
    if(document.links[i].href == document.URL || document.URL == 'https://bbrdak.github.io/339-Final-Project/') {
        index = i;
        break;
    }
}
document.links[index].classList.add("selected");
document.links[index + 3].classList.add("selected");