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
hola.push

//prototype objects with class

class Student_2 {
    constructor(name,age,cursosAprobados){
        this.name=name;
    this.age=age;
    this.cursosAprobados=[];
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    };
};

const miguelito = new Student_2("Miguel", 28, "[a,b,c]");

miguelito.aprobarCurso("rca");
console.log(miguelito.cursosAprobados);

//prototype objects with class and R.O.R.O

class Student_3 {
    constructor({
        name,
        age,
        cursosAprobados,
    }) {
            this.name=name;
            this.age=age;
            this.cursosAprobados=[];
        }

        aprobarCurso(nuevoCursito){
            this.cursosAprobados.push(nuevoCursito);
        };
};


// Student_3.prototype.aprobarCurso = function (nuevoCursito) {
    
//         this.cursosAprobados.push(nuevoCursito);
    
// }

const raul = new Student_3({cursosAprobados:"[a,b,c]", name:"Raul", age: 28})

raul.aprobarCurso("rca");

console.log(raul.cursosAprobados);

//Course class

class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = "spanish",
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito; 
    }
  }
}
  
const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: "english",
});
  
  //LearningPath class

  class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  })
  
//Student class

  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
  }
  
  class FreeStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      if (newCourse.isFree) {
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
      }
    }
  }
  
  class BasicStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      if (newCourse.lang !== "english") {
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
      }
    }
  }
  
  class ExpertStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    }
  }
  
  
  
  const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });

// Teacher class

  class Teacher {
    constructor({
      id,
      name,
      speciality,
    }) {
      this.id = id;
      this.name = name;
      this.speciality = speciality;
    }
  }

  const FreddyVega = new Teacher({
    id: 1,
    name: 'Freddy Vega',
    speciality: 'CEO',
  });
  console.log(FreddyVega);
  
  const ClauAlderete = new Teacher({
    id: 2,
    name: 'Clau Alderete',
    speciality: 'Digital Marketing',
  });
  console.log(ClauAlderete);

// clase class

  class Clase {
    constructor(nombre, profesor, video) {
      this.nombre = nombre;
      this.profesor = profesor;
      this.video = video;
    }
  }

const HtmlDefinitivo = new Clase({nombre: "HTML Definitivo", profesor: "Natalia", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});
const CssDefinitivo = new Clase({nombre: "CSS Definitivo",profesor:  "Natalia", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});
const JsDefinitivo = new Clase({nombre: "JS Definitivo", profesor: "Natalia", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});
const PhpDefinitivo = new Clase({nombre: "PHP Definitivo", profesor: "Natalia", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});
const PythonDefinitivo = new Clase({nombre: "Python Definitivo", profesor: "Natalia", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});

const ecuacionesAvanzadas = new Clase("Ecuaciones Avanzadas", "Natalia", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
const sumasArimeticas = new Clase("Sumas Aritmeticas", "Natalia", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
const matrices = new Clase("Matrices", "Natalia", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
const algebraLineal = new Clase("Algebra Lineal", "Natalia", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");

// Example for get and set

// class Course {
//     constructor({
//       name,
//       classes = [],
//     }) {
//       this._name = name;
//       this.classes = classes;
//     }

// get name() {
//     return this._name;
//   }

//   set name(nuevoNombrecito) {
//     if (nuevoNombrecito === "Curso Malito de Programación Básica") {
//       console.error("Web... no");
//     } else {
//       this._name = nuevoNombrecito; 
//     }
//   }