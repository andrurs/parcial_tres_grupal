function mostrarTablas() {
    const numero = parseInt(document.getElementById('numero').value);
    mostrarTablaFor(numero);
    mostrarTablaForIn(numero);
    mostrarTablaForOf(numero);
    mostrarTablaWhile(numero);
    mostrarTablaDoWhile(numero);
}

// Ciclo 'for'
function mostrarTablaFor(numero) {
    let contenido = `<h2>Tabla de multiplicar con "for"</h2><ul>`;
    for (let i = 1; i <= 10; i++) { 
        contenido += `<li>${numero} x ${i} = ${numero * i}</li>`; 
    }
    contenido += '</ul>';
    document.getElementById('tabla-for').innerHTML = contenido;
}

// Ciclo 'for in'
function mostrarTablaForIn(numero) {
    let contenido = `<h2>Tabla de multiplicar con "for in"</h2><ul>`; 
    let tabla = {};
    for (let i = 1; i <= 10; i++) { 
        tabla[i] = numero * i; 
    }
    for (let i in tabla) { 
        contenido += `<li>${numero} x ${i} = ${tabla[i]}</li>`; 
    }
    contenido += '</ul>'; 
    document.getElementById('tabla-for-in').innerHTML = contenido;
}

// Ciclo 'for of'
function mostrarTablaForOf(numero) {
    let contenido = `<h2>Tabla de multiplicar con "for of"</h2><ul>`; 
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(numero * i); 
    }
    for (let valor of tabla) {
        contenido += `<li>${numero} x ${tabla.indexOf(valor) + 1} = ${valor}</li>`; 
    }
    contenido += '</ul>';
    document.getElementById('tabla-for-of').innerHTML = contenido; 
}

// Ciclo 'while'
function mostrarTablaWhile(numero) {
    let contenido = `<h2>Tabla de multiplicar con "while"</h2><ul>`; 
    let i = 1; 
    while (i <= 10) { 
        contenido += `<li>${numero} x ${i} = ${numero * i}</li>`; 
        i++;
    }
    contenido += '</ul>'; 
    document.getElementById('tabla-while').innerHTML = contenido;
}

// Ciclo 'do while'
function mostrarTablaDoWhile(numero) {
    let contenido = `<h2>Tabla de multiplicar con "do while"</h2><ul>`;
    let i = 1; 
    do {
        contenido += `<li>${numero} x ${i} = ${numero * i}</li>`; 
        i++; 
    } while (i <= 10); 
    contenido += '</ul>'; 
    document.getElementById('tabla-do-while').innerHTML = contenido; 
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarTablas();
});

function irAPagina(pagina) {
    window.location.href = pagina;
}
