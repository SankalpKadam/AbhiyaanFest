$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    // console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

// $('#defaultopen').click();

function reveal() {
    var carouselbtn = document.getElementById('btn-cultural');
    var windowHeight = window.innerHeight;
    var elementDistancefromTop = carouselbtn.getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementDistancefromTop < windowHeight - elementVisible) {
        carouselbtn.addClass('active');
    } else {
        carouselbtn.removeClass('active');
    }
}
window.addEventListener(scroll, reveal);

// function openCity(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

function openCity(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "#ffffff";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = "#ffffff";
    elmnt.style.color = "#000000";

}

function openEvent(EventName, elmnt, color, animate, img) {
    var i, tabcontent, tablinks, carousel_text, event_image;
    tabcontent = document.getElementsByClassName("carousel-item");
    carousel_text = document.getElementsByClassName('carousel-text');
    event_image = document.getElementsByClassName('event-image');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("Eventtablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    for (let index = 0; index < carousel_text.length; index++) {
        carousel_text[index].classList.remove('activeTextbg');

    }
    for (let ind = 0; ind < carousel_text.length; ind++) {
        event_image[ind].classList.remove('activeImage');

    }
    document.getElementById(EventName).style.display = "block";
    document.getElementById(animate).classList.add('activeTextbg');
    document.getElementById(img).classList.add('activeImage');
    elmnt.style.backgroundColor = "#dd0a37";

}
// document.getElementById("defaultOpenEvent").click();
document.getElementById("defaultOpen").click();