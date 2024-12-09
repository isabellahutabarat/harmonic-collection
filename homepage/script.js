let individualIssues = document.querySelectorAll('.individual-issue');
let spine = document.querySelector('#yellow-record');

let extendDropdown = () => {
    individualIssues.forEach((el) => {el.classList.toggle("hidden")})
}

let hideDropdown = () => {
    individualIssues.forEach((el) => {el.classList.toggle("hidden")})
}

spine.addEventListener("mouseenter", extendDropdown);
spine.addEventListener("mouseleave", hideDropdown)