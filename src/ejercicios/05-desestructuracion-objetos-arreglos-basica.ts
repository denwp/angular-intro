

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        anio: 2020,
        autor: 'Yo'
    }
}
// el vol es el nombre q se le da al valor de volumen, se puede llamar con vol, o autorDetalle
//const { volumen: vol, segundo, cancion, detalles: {autor: autorDetalle} }: Reproductor = reproductor;
const { volumen, segundo, cancion, detalles }: Reproductor = reproductor;

const {autor} = detalles;

// console.log('El volumen actual es :', volumen);
// console.log('El segundo actual es :', segundo);
// console.log('La cancion actual es :', cancion);
// console.log('El autor actual es :', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3]  = dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);