function sumar(a: number ,b: number): number{
    return a + b;
}


const sumarFlecha = (a: number, b:number): number =>{   
    return a + b;

}

function multiplicar( numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

interface PersonajeLDR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje : PersonajeLDR, curarX : number) : void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLDR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 20 );
console.log(nuevoPersonaje);