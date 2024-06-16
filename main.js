

var prevScrollpos = window.pageYOffset;

window.onscroll = function(onscroll){
    var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.getElementById("navbar").style.top = "0";
} else {
document.getElementById("navbar").style.top = "-50px";
}
prevScrollpos = currentScrollPos;

}

const contactContainer = document.getElementsByClassName('contact-container');
const btnSubmit = document.getElementsByClassName('btn-submit');