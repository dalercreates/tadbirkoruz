// dropdown
const dropdownButton = document.getElementById('dropdown-btn');

dropdownButton.addEventListener('click', () => {
    if (dropdownButton.classList.contains('active')) {
        dropdownButton.classList.remove('active')
    } else {
        dropdownButton.classList.add('active')
    }
})