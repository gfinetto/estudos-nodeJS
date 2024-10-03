const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   console.log(objPersonagem);

   delete objPersonagem.aliado;
   console.log(objPersonagem);
   console.log(objPersonagem.aliado);

   //Também é possível utilizar a notação de colchetes para deleter alguma propriedade do objeto:

   delete objPersonagem['status'];
   console.log(objPersonagem);