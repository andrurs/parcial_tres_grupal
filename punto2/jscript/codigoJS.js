const marcas = {
    ford: {
        logo: 'logos/logo_ford2.png',
        descripcion: 'Ford Motor Company es una empresa automotriz estadounidense fundada en 1903.',
        año: 1903,
        fondo: 'logos/ford_car.jpg'
    },
    chevrolet: {
        logo: 'logos/logo_chevrolet.jpg',
        descripcion: 'Chevrolet es una marca de General Motors. Fundada en 1911.',
        año: 1911,
        fondo: 'logos/chevrolet_car.jpg'
    },
    toyota: {
        logo: 'logos/logo_toyota2.png',
        descripcion: 'Toyota Motor Corporation es una empresa japonesa líder en la industria automotriz.',
        año: 1937,
        fondo: 'logos/toyota_car.jpg'
    },
    honda: {
        logo: 'logos/logo_honda2.png',
        descripcion: 'Honda Motor Co., Ltd. es una compañía japonesa conocida por su confiabilidad y eficiencia.',
        año: 1948,
        fondo: 'logos/honda_car.jpg'
    }
};

const fondoMarca = document.getElementById('fondoMarca');
const logo = document.querySelector('.logo');
const descripcion = document.querySelector('.descripcion');
const anio = document.getElementById('anio');
const selectMarca = document.getElementById('marca');

selectMarca.addEventListener('change', function() {
    const marcaSeleccionada = selectMarca.value;
    const marcaInfo = marcas[marcaSeleccionada];

    fondoMarca.style.backgroundImage = `url(${marcaInfo.fondo})`;
    logo.src = marcaInfo.logo;
    descripcion.textContent = marcaInfo.descripcion;
    anio.textContent = `Año de fundación: ${marcaInfo.año}`;
});