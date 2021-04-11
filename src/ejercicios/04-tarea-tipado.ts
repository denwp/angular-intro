

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: DireccionSuperHeroe,
    mostrarDireccion: () => string;
}

interface DireccionSuperHeroe {
    calle: string;
    pais: string;
    ciudad: string;
}


const superHeroe: SuperHeroe = {
    nombre: 'SpiderMan',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad+ ', '+ this.direccion.pais
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);