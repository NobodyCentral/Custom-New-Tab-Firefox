document.addEventListener('DOMContentLoaded', function () {
    const url_input = document.getElementById('Input');
    const saveBtn = document.getElementById('save');

    const savedData = localStorage.getItem('url');
    if (savedData) {
        url_input.value = savedData;
    }

    saveBtn.addEventListener('click', function () {
        const url = url_input.value;
        localStorage.setItem('url', url);
    });
});