
const door = document.querySelector('#door');
door.addEventListener("click", function() {
  let classes = door.classList;
  for (obj of classes) { console.log(obj);
    if(obj == 'doorOpen'){  

      changeDoor('open');
    }
    if(obj== 'doorClose'){
      changeDoor('closed');
    }
  }

});

function changeDoor(params) {
  let element = document.querySelector(".centraliza");
  let paragraph = document.querySelector(".return");
  let change = document.querySelector("#change");
  if(params == 'open'){  
    element.style.backgroundColor = '#39D4B5' ;
    change.data = `assets/img/door-closed-fill.svg`;
    door.classList.remove('doorOpen');
    door.classList.add('doorClose');
    paragraph.innerHTML = "Porta fechada às <br>" + doorHour();
  }else{
    element.style.backgroundColor = '#F74543' ;
    change.data = `assets/img/door-open-fill.svg`;
    door.classList.remove('doorClose');
    door.classList.add('doorOpen');
    paragraph.innerHTML = "Porta Aberta. <br>" +  "Feche ela antes de sair!";
   

  }
}

function doorHour(){
  var dataAtual = new Date();

  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1; 
  var ano = dataAtual.getFullYear();
  
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var segundos = dataAtual.getSeconds();
  
  return formatarNumero(dia) + "/" + formatarNumero(mes) + "/" + ano + " " + formatarNumero(horas) + ":" + formatarNumero(minutos) + ":" + formatarNumero(segundos);
  
}

function formatarNumero(numero) {
  return numero < 10 ? "0" + numero : numero;
}

