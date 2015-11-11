function init() {
    var navLinks = document.querySelectorAll("header nav a");
    for(var i = 0; i < navLinks.length; i++) {
        var link = navLinks[i];
        link.id = i;
        link.addEventListener('click', handleLinkClick, false);
    }
}

function handleLinkClick(eventInformation) {
    var origin = eventInformation.target;
    displaySection(origin.id);
    eventInformation.preventDefault();
}

function displaySection(index) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        if (parseInt(index) === parseInt(i)) {
            sections[i].className = '';
        } else {
            sections[i].className = 'hidden';
        }
    }
}
