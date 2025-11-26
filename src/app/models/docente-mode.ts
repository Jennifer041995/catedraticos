export interface DocenteModel {
    nombre: string;
    facultad: string;
    materia: string;
    descripcion: string;
    resenia: string;
    img: string;
}

export interface DocenteResponse{
    lista_docs: {
        catedratico1?: DocenteModel;
        catedratico2?: DocenteModel;
        catedratico3?: DocenteModel;
        catedratico4?: DocenteModel;
        catedratico5?: DocenteModel;
    }
}

export class DocenteResenia{
    constructor(
        public nombre: string,
        public facultad: string,
        public materia: string,
        public descripcion: string,
        public resenia: string,
        public img: string,
    ){}

    getResenia(): DocenteModel{
        return {
            nombre: this.nombre,
            facultad: this.facultad,
            materia: this.materia,
            descripcion: this.descripcion,
            resenia: this.resenia,
            img: this.img,
        }
    }
}
