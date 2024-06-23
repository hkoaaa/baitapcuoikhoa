document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {

        console.log("123123")

        event.preventDefault(); 
        const hoten = document.getElementById('hoten').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userData = {
            hoten:hoten,
            email: email,
            password: password
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = '../login/longin.html'
    });
});