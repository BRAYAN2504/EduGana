function initializeApp() {
    var togglePassword = document.getElementById('togglePassword');
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.getElementById('eyeIcon');
    var eyeOffIcon = document.getElementById('eyeOffIcon');
    var loginBtn = document.getElementById('loginBtn');
    var loginText = document.getElementById('loginText');
    var loginSpinner = document.getElementById('loginSpinner');

    // Alternar visibilidad de la contraseña
    togglePassword.addEventListener('click', function () {
        var isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

        eyeIcon.classList.toggle('hidden');
        eyeOffIcon.classList.toggle('hidden');
    });

    // Acción del botón de inicio de sesión
    loginBtn.addEventListener('click', function () {
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        if (!email || !password) {
            alert('Por favor completa todos los campos');
            return;
        }

        loginBtn.disabled = true;
        loginText.classList.add('hidden');
        loginSpinner.classList.remove('hidden');

        // Simular carga (puedes reemplazar esto con lógica real más adelante)
        setTimeout(function () {
            loginBtn.disabled = false;
            loginText.classList.remove('hidden');
            loginSpinner.classList.add('hidden');
            alert('¡Bienvenido a EduGana!');
        }, 1500);
    });
}

// Asegurar que el DOM esté listo antes de ejecutar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
