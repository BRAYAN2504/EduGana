function initializeApp() {
    var togglePassword = document.getElementById('togglePassword');
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.getElementById('eyeIcon');
    var eyeOffIcon = document.getElementById('eyeOffIcon');
    var loginBtn = document.getElementById('loginBtn');
    var loginText = document.getElementById('loginText');
    var loginSpinner = document.getElementById('loginSpinner');

    togglePassword.addEventListener('click', function() {
        var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        eyeIcon.classList.toggle('hidden');
        eyeOffIcon.classList.toggle('hidden');
    });

    loginBtn.addEventListener('click', function() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (!email || !password) {
            alert('Por favor completa todos los campos');
            return;
        }

        loginBtn.disabled = true;
        loginText.classList.add('hidden');
        loginSpinner.classList.remove('hidden');

        setTimeout(function() {
            loginBtn.disabled = false;
            loginText.classList.remove('hidden');
            loginSpinner.classList.add('hidden');
            alert('¡Bienvenido a EduGana!');
        }, 1500);
    });

    document.getElementById('googleBtn').addEventListener('click', function() {
        console.log('Login con Google');
    });

    document.getElementById('facebookBtn').addEventListener('click', function() {
        console.log('Login con Facebook');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
