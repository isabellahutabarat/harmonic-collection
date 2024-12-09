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

let leftSpine = document.querySelector('#left-spine');
let spineContent = document.querySelector('.spine--content');

leftSpine.addEventListener('mouseenter', () => {
    spineContent.style.visibility = 'visible';
    spineContent.style.opacity = '1';
});

leftSpine.addEventListener('mouseleave', () => {
    spineContent.style.visibility = 'hidden';
    spineContent.style.opacity = '0';
});
