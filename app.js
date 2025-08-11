//Variables DOM
let input_amigo = document.getElementById('amigo');
let ul_amigos = document.getElementById('listaAmigos');
let ul_resultado = document.getElementById('resultado');
let boton_añadir = document.querySelector('.button-add');
let boton_sortear_reiniciar = document.querySelector('.button-draw');

//Lista para guardar los nombres de amigos
let listaAmigos = [];

function actualizarListaAmigos(){
    //Limpiar la lista existente
    ul_amigos.innerHTML = '';
    
    //Iterar sobre el arreglo y agregar el nombre a la lista HTML
    for(i = 0; i < listaAmigos.length; i++){
        const nuevoElementoLista = document.createElement('li');
        nuevoElementoLista.appendChild(document.createTextNode(listaAmigos[i]));
        ul_amigos.appendChild(nuevoElementoLista);
    }
}

function agregarAmigo(){
    let nombreAmigo = input_amigo.value;
    //Validar que la entrada no se intente guardar vacía
    if(nombreAmigo != ''){
        //Actualizar el array de amigos
        listaAmigos.push(nombreAmigo.toUpperCase());
        //Limpiar el cuadro de entrada
        input_amigo.value = '';
        //Llamar actualizarListaAmigos con el nombre registrado para que se actualice en el HTML
        actualizarListaAmigos();
    }else{
        alert('Por favor, inserte un nombre.');
    }
}

function sortearAmigo(){
    //Limiamos ambas listas para quitar la lista de nombre y asegurarnos que el resultado está vacio
    ul_amigos.innerHTML = '';
    ul_resultado.innerHTML = '';

    //Se valida que haya amigos disponibles
    if(listaAmigos.length != 0){
        const elementoResultado = document.createElement('li');
        //Generar un índice
        let indiceAmigo = Math.floor(Math.random() * listaAmigos.length);

        //Tomámos el elemento li y colocamos en su texto el valor del array en el indice generado con Math.random
        elementoResultado.appendChild(document.createTextNode(`¡Tu amigo secreto será ${listaAmigos[indiceAmigo]}!`));
        ul_resultado.appendChild(elementoResultado);

        //Desactivamos el input y el botón para añadir los nombres
        input_amigo.setAttribute('disabled', 'true');
        boton_añadir.setAttribute('disabled', 'true');

        //Cambiamos el atributo onclick="sortearAmigo()" al botón para que pueda reiniciar la app
        boton_sortear_reiniciar.setAttribute('onclick', 'comenzarDeNuevo()');
        //Cambiamos el texto del botón para mostrar el reinicio de la app
        boton_sortear_reiniciar.innerHTML = '<img src="assets/reload_icon.png" alt="Ícono para recargar">Reiniciar';
    }else{
        alert('No se han agregado amigos');
    }
}

function comenzarDeNuevo(){
    //Limpiamos el array
    listaAmigos = [];

    //Limpiamos la lista del resultado
    ul_resultado.innerHTML = '';
    
    //Habilitamos el input y el botón
    input_amigo.removeAttribute('disabled');
    boton_añadir.removeAttribute('disabled');
    
    //Cambiamos el atributo de onclick="comenzarDeNuevo()" por onclick="sortearAmigo()"
    boton_sortear_reiniciar.setAttribute('onclick', 'sortearAmigo()');
    //Cambiamos el texto del botón para mostrar la ejecución de la app
    boton_sortear_reiniciar.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Sortear amigo';
}