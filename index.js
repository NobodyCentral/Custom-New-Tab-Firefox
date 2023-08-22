const url = localStorage.getItem('url');

if (url) {
    window.location.href = url;
} else {
    window.location.href = 'https://www.google.com';
};