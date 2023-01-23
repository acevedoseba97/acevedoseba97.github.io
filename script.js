/**Función fetch para traer los datos de la API de Random User Generator a la página del CV, se actualizarán 
 * el nombre de usuario, foto de perfil, número de teléfono y correo por cada reingreso
 * a la página. Para contextualizar el hecho de que dejé el país como Argentina, utilizo información
 * sólo de gente española para poder validar el castellano de alguna forma*/

fetch('https://randomuser.me/api/?nat=es')
    .then(response => response.json())
    .then(json => {
        let usuario = document.getElementById('nombre-usuario')
        usuario.innerHTML = `<p>${json.results[0].name.first} ${json.results[0].name.last}</p>`;

        let telCelular = document.getElementById('num-celular')
        telCelular.innerHTML = `<p>${json.results[0].cell}</p>`;

        let correo = document.getElementById('correo')
        correo.innerHTML = `<p>${json.results[0].email}</p>`;

        let imagenPerfil = document.getElementById('imagen-perfil')
        imagenPerfil.innerHTML = `<img src='${json.results[0].picture.large}'>`;

    });

//Función para hacer aparecer el contenido de 'Intereses'

function mostrarIntereses() {
    document.getElementById('intereses').innerHTML = `<ul>
            <li>Videojuegos</li>
            <li>Cine</li>
            <li>Lectura</li>
            <li>Repostería</li>
        </ul>`;
    document.getElementById('intereses').style.display = 'block';
};

//Función para ocultar el contenido de 'Intereses'

function ocultarIntereses() {
    document.getElementById('intereses').style.display = 'none';
};

//Función para cambiar el fondo de la sección del usuario

function cambiarFondo() {
    document.getElementById('fondo-usuario').style.backgroundImage = 'url(fondo01.jpeg)';
    document.getElementById('fondo-usuario').style.backgroundSize = 'cover';
    document.getElementById('fondo-usuario').style.backgroundRepeat = 'no-repeat';

};

//Función para reestablecer el fondo de la sección del usuario

function fondoDefault() {
    document.getElementById('fondo-usuario').style.backgroundImage = 'none';
}