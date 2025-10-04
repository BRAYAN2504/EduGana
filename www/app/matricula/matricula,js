document.addEventListener('DOMContentLoaded', () => {
    const btnMatricular = document.getElementById('btnMatricular');
    const studentList = document.getElementById('studentList');

    btnMatricular.addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value.trim();
        const dni = document.getElementById('dni').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const curso = document.getElementById('curso').value.trim();

        if(!nombre || !dni || !correo || !curso) {
            alert('Por favor completa todos los campos.');
            return;
        }

        const studentItem = document.createElement('div');
        studentItem.classList.add('student-item');
        studentItem.innerHTML = `
            <strong>${nombre}</strong> | DNI: ${dni} | Correo: ${correo} | Curso: ${curso}
        `;

        studentList.appendChild(studentItem);

        // Limpiar campos
        document.getElementById('nombre').value = '';
        document.getElementById('dni').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('curso').value = '';
    });
});
