let tablinks = document.getElementsByClassName("tablinks");
let tabcontents = document.getElementsByClassName("tab-contents");

const openTab = (tabName) => {
    // Remove active classes from all tabs and tab links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // Add active class to the content of the clicked tab
    document.getElementById(tabName).classList.add("active-tab");
}
