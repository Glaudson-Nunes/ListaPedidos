
const btAtivarIA = document.querySelector('.btAssi');
const btDesativarIA = document.querySelector('.btAssi2');
const ValueDateInput = document.querySelector('.dateIa');
const infor = document.querySelector('.InforData');
const boxIA = document.querySelector('.textIA');
const btEntend = document.querySelector('#btEntendi');
const btLembrete = document.querySelector('#btLembrete');
const iconConec = document.querySelector('.iconConetado1');



const input = document.querySelector(".minha-data");

btDesativarIA.addEventListener('click', ()=> DesativarIA())
btAtivarIA.addEventListener('click', ()=> AtivarIA());
btEntend.addEventListener("click", ()=> DesativarTextLembrete());
btLembrete.addEventListener('click', ()=> ManterLembrete());


const AtivarIA = () =>{

  const dataInserida = new Date(input.value);

  if(input.value === ''){

    swal("Insira uma data", 'Você deve Inserir uma data valida');
    return

 
  }else{

    btAtivarIA.style.display = 'none';
    btDesativarIA.style.display = 'block'
    localStorage.setItem("minha-data", dataInserida.toISOString());
    const bt = 'Ativado';
    localStorage.setItem("btAtivado", bt);
    iconConec.style.display = 'block';
    localStorage.setItem('iconAtivo', iconConec);
    setTimeout(()=>{

      location.reload();

    },2000)
    swal('Você Programou lista para atualizar no dia ' +dataInserida);
    // localStorage.setItem('inforData',  infor.innerHTML = `As listas serâo atualizadas em: ${dataInserida}`);

    ComparaButton();


  }
 
  const verificarData = () => {

    const dataAtual = new Date();
    const dataSalva = new Date(localStorage.getItem("minha-data"));

    if (dataAtual >= dataSalva) {
        
        AddIASimilares();
        saveTodos();
        renderTodos();
        AddIAEticos();
        salvarTarefas();

      localStorage.removeItem("minha-data"); // remove a data salva do localStorage
      localStorage.removeItem('btAtivado');
      localStorage.removeItem('iconAtivo');
      btAtivarIA.style.display = 'block';
      btDesativarIA.style.display = 'none';
      const listaAtulizada = 'ok';
      localStorage.setItem('okIA', listaAtulizada);

     
    } else {
      setTimeout(verificarData, 1000); // aguarda 1 segundo e verifica novamente
    }
  };

  // Inicia a verificação da data
  verificarData();
}



const DesativarIA = () =>{

  localStorage.removeItem("minha-data");
  localStorage.removeItem('btAtivado');
  localStorage.removeItem('iconAtivo');
  // localStorage.removeItem('inforData');
  btAtivarIA.style.display = 'block';
  btDesativarIA.style.display = 'none';
  input.value = "";
  swal('IA Desativada', "Você desativou a IA")
  setTimeout(()=>{

    location.reload();

  },2000)
  return

}


const ComparaButton = () =>{

  const Verificando = localStorage.getItem('btAtivado');

  if(Verificando){

    btAtivarIA.style.display = 'none';
    btDesativarIA.style.display = 'block';
  }

}

 const verListaIa = () =>{

  const okIa = localStorage.getItem('okIA');

  if(okIa){

    boxIA.style.display = 'flex';
  }

}

const verIcon = () =>{

  const IAicon = localStorage.getItem('iconAtivo');

  if(IAicon){

    iconConec.style.display = 'block'
  }
}

const DesativarTextLembrete = () =>{

  localStorage.removeItem('okIA');
  boxIA.style.display = 'none';

}


const ManterLembrete = () =>{

  swal("Lembrete Definido", 'Você sera Notificado toda vez que a pagina recarregar')
  boxIA.style.display = 'none';


}


// const VerificarDtaText = () =>{

  
// const InforSalva =localStorage.getItem("inforData");

// if(InforSalva){

//     infor.innerHTML = `${InforSalva}`
// }
// }

ComparaButton()
verListaIa()
verIcon()


// Verifica se há uma data salva no localStorage e preenche o input com ela
const dataSalva = localStorage.getItem("minha-data");
if (dataSalva) {
  input.value = new Date(dataSalva).toISOString().slice(0, 10);
}


// const keyAPI = 'e3d4e77a9b17f89f3046b298593131db'
