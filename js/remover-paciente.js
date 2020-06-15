var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(event){
      console.log("Fui duplamente clicado");
      this.remove();
    });
});

// 7. 3 Delegando eventos
