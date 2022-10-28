/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  // Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
  class Persona {
    
    constructor(nombre, edad, hobbies, amigos) {
      this.nombre=nombre;
      this.edad=edad;
      this.hobbies=hobbies;
      this.amigos=amigos;
    }



    addFriend(nombre, edad) {
      // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // no debe retornar nada.
      var nuevoAmigo= new Object();
      nuevoAmigo.nombre=nombre;
      nuevoAmigo.edad=edad;
      
      this.amigos.push(nuevoAmigo);

      
    }

    addHobby(hobby) {
      // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
      // no debe retornar nada.
      this.hobbies.push(hobby);

    }
    getFriends() {
      // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']
      var soloNombres=[];
      for(var i=0;i<=this.amigos.length-1;i++){
        soloNombres.push(this.amigos[i].nombre)
      }
      
      return soloNombres;

    }

    getHobbies() {
      // Escribe una función que retorne un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']
      return this.hobbies;

    }

    getPromedioEdad() {
      // Escribe una función que retorne el promedio de edad de los amigos de una persona
      // ej, si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() // retorna 29
      var acu=0;
      var promedio=1;


      for(var i=0;i<=this.amigos.length-1;i++){
        acu=acu+this.amigos[i].edad;
      }

      promedio=acu/this.amigos.length;
      
      return promedio;


    }

  };

  return Persona;
}

// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona