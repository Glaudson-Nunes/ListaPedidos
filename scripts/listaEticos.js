const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

const inputTarefa = document.getElementById('tarefa');
const btnAdicionar = document.getElementById('adicionar');
const ul = document.getElementById('lista-tarefas');
const inputFiltro = document.getElementById('filtro');
const btnDeletarConcluidas = document.getElementById('deletar-concluidas');

const IconLixeira2 = "https://cdn-icons-png.flaticon.com/512/7778/7778893.png";

function criarTarefa(textoTarefa, concluida = false) {
  const li = document.createElement('h3');
  li.textContent = textoTarefa;
  if (concluida) {
    li.classList.add('concluida');
  }
  ul.appendChild(li);
  inputTarefa.value = '';

  li.addEventListener('click', function() {
    li.classList.toggle('concluida');
    salvarTarefas();
  });

  const btnDeletar = document.createElement('img');
  btnDeletar.setAttribute('src', `${IconLixeira2}`);
  btnDeletar.width = 30;
  btnDeletar.classList.add('.btdele')
  btnDeletar.addEventListener('click', function(evento) {
    evento.stopPropagation();
    const index = tarefas.indexOf(textoTarefa);
    tarefas.splice(index, 1);
    salvarTarefas();
    li.remove();
  });

  li.appendChild(btnDeletar);
  salvarTarefas();
}

const rd2 = document.querySelector(".receberdate2");

function adicionarTarefa() {

	rd2.innerHTML = `${total}`
	localStorage.setItem('saveDATAEti', JSON.stringify(total));
	const textoTarefa = inputTarefa.value.trim();
	if (textoTarefa === '') {
	  return;
	}
	if (tarefas.some(tarefa => tarefa.texto === textoTarefa)) {
		swal("Atençâo" + ' Ja Existe na sua lista ');
	  return;
	}
	const novaTarefa = { texto: textoTarefa, concluida: false };
	criarTarefa(novaTarefa.texto, novaTarefa.concluida);
	tarefas.push(novaTarefa);
	novaTarefa.concluida = false; // adicionado
	salvarTarefas();
}

function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
  tarefas.forEach(function(tarefa) {
    criarTarefa(tarefa.texto, tarefa.concluida);
  });
}

function deletarConcluidas() {
  const tarefasConcluidas = document.querySelectorAll('.concluida');
  tarefasConcluidas.forEach(function(tarefaConcluida) {
    const textoTarefaConcluida = tarefaConcluida.textContent;
    const index = tarefas.findIndex(tarefa => tarefa.texto === textoTarefaConcluida);
    tarefas.splice(index, 1);
    tarefaConcluida.remove();
  });
  salvarTarefas();
}

btnAdicionar.addEventListener('click', adicionarTarefa);
inputTarefa.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    adicionarTarefa();
  }
});

inputFiltro.addEventListener('input', function() {
  const valorFiltro = inputFiltro.value.trim().toLowerCase();
  Array.from(ul.children).forEach(function(li) {
    const textoTarefa = li.textContent.toLowerCase();
    if (textoTarefa.includes(valorFiltro)) {
      li.style.display = 'flex';
    } else {
      li.style.display = 'none';
    }
  });
});


function dateSalvo2(){

	const save02 = JSON.parse(localStorage.getItem('saveDATAEti'));

   if(save02){

	   rd2.innerHTML = `${save02}`;
   }
}

function addItemsCodBarra2(event){

	const txt2 = event.value;

	for(const codigo2 of codBarras){

		if(txt2 == codigo2.cod){
			
			tarefas.push({texto: codigo2.nome, concluida: false});
			salvarTarefas();
            inputTarefa.value = "";
		}
	}

}


const TotalItems2 = document.querySelector('.totalItems2');
TotalItems2.textContent = tarefas.length;

function atualizarTotal2() {
  TotalItems2.textContent = `Total de Items: ${tarefas.length}`;
  }

  setInterval(atualizarTotal2, 1000);

const btpdfE = document.querySelector(".btpdf3");

btpdfE.addEventListener('click', ()=> gerarPDFti());

function gerarPDFti() {
	
	
	let table = '<table><thead><tr><th>Medicamentos</th><th>Status</th></tr></thead><tbody>';
	
	
	tarefas.forEach(function(item) {
	table += '<tr><td>' + item.texto + '</td><td>' + (item.completo ? 'Completo' : 'Em falta ou poucas unidades') + '</td></tr>';
	});
	
	
	table += '</tbody></table>';
	
	
	const titulo = '<h1>Lista de Eticos</h1>';
	
	
	const printContent = '<html><head><title>Lista de Eticos</title><style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 5px; text-align: left; }</style></head><body>' + titulo + table + '</body></html>';
	
	
	const printWindow = window.open('', '_blank', 'width=600,height=800');
	printWindow.document.open();
	printWindow.document.write(printContent);
	printWindow.document.close();
	
	
	printWindow.print();
	printWindow.close();
}

const btCoE = document.querySelector(".btcopiar");

btCoE.addEventListener('click', ()=> copiarItensEti());

function copiarItensEti() {


   
    let table = `<table><thead><tr><th></th>ETICOS:<th>Lista Copiada em: ${desc}</th></tr></thead><tbody>`;
  
   
    tarefas.forEach(function(item) {
      table += '<tr><td>' + item.texto + '</td><td>' + '</td></tr>';
    });
  
   
    table += '</tbody></table>';
  
   
    const tempElement = document.createElement('div');
    tempElement.innerHTML = table;
  
   
    tempElement.style.position = 'absolute';
    tempElement.style.left = '-9999px';
  
   
    document.body.appendChild(tempElement);
  
  
    const range = document.createRange();
    range.selectNodeContents(tempElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  
    document.execCommand('copy');
  
    document.body.removeChild(tempElement);
	swal('Lista de Eticos copiada com sucesso!');
	
  }

dateSalvo2()

btnDeletarConcluidas.addEventListener('click', deletarConcluidas);

carregarTarefas();
