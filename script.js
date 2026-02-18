// When the user scrolls the page, execute myFunction
window.onscroll = function() {progress()};

function progress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function openProject(evt, projectName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Show first tab by default on page load
document.addEventListener('DOMContentLoaded', function() {
    var tabcontent = document.getElementsByClassName('tabcontent');
    if (tabcontent.length > 0) {
        document.getElementById('homeServer').style.display = 'block';
        // Activate the homeServer button
        var tablinks = document.getElementsByClassName('tablinks');
        if (tablinks.length > 0) {
            tablinks.className += ' active';
        }
    }
});
