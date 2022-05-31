//Literals objects

// const natalia={
//     name:"Natalia",
//     age:20,
//     cursosAprobados:["Curso Definitivo de HTML y CSS","Curso Práctico de HTML y CSS"],

//     aprobarCurso(nuevoCursito){
//         this.cursosAprobados.push(nuevoCursito);
//     };

// natalia.aprobarCurso("POO");
// console.log(natalia.cursosAprobados);

//prototype objects

function Student(name,age,cursosAprobados){
    this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito)
    // }
};

//Create function outside.

Student.prototype.aprobarCurso=function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

//instancing. 

const juanita=new Student("Juanita Alejandra",15,["Curso de Introducción a la Producción de Videojuegos","Curso de Creación de Personajes",],);

//prototype objects with class

class Student_2 {
    constructor(name,age,cursosAprobados){
        this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    };
};

const miguelito = new Student_2("Miguel", 28, "[a,b,c]")

//prototype objects with class and R.O.R.O

class Student_3 {
    constructor({name,age,cursosAprobados}){
        this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    };
};

const raul = new Student_3({cursosAprobados:"[a,b,c]", name:"Miguel", age: 28})

console.log(raul);