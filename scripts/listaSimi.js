const todoList = document.getElementById('todo-list');
const newTodo = document.getElementById('new-todo');
const addTodo = document.getElementById('add-todo');
const filterTodo = document.getElementById('filter-todo');
const deleteCompleted = document.getElementById('delete-completed');

const date_horas = document.querySelector('.receberdate');
const receberdate = document.querySelector('.rcbd2');
const IconLixeira = "https://cdn-icons-png.flaticon.com/512/7778/7778893.png";


	const date = new Date();
	let dia = date.getDay();
	let mes = date.getMonth();
	let ano = date.getFullYear();

	

	let minutos = date.getMinutes();
	let horas = date.getHours();

	let total = `Ultima atualizaçâo em: ${dia + '/'+mes+'/'+ano  + ' ' + ' As ' +horas + ':' +minutos}`;

	receberdate.innerHTML = `${dia + '/'+mes+'/'+ano }`;

	const desc =  `${dia + '/'+mes+'/'+ano }`;

let todos = [];

addTodo.addEventListener('click', addTodoToList);

newTodo.addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		addTodoToList();
	}
});

filterTodo.addEventListener('keyup', filterTodos);
deleteCompleted.addEventListener('click', deleteCompletedTodos);

// Load todos from localStorage

if (localStorage.getItem('todos')) {
	todos = JSON.parse(localStorage.getItem('todos'));
	renderTodos();
}

function addTodoToList() {


    const todo = newTodo.value.trim();
    if (todo !== '') {

		date_horas.innerHTML = `${total}`;
		localStorage.setItem('saveDate', JSON.stringify(total));
        const isDuplicate = todos.some(function(item) {
            return item.text.toLowerCase() === todo.toLowerCase();

        });
        if (!isDuplicate) {
            todos.push({text: todo, completed: false});
            saveTodos();
            renderTodos();
            newTodo.value = '';
        } else {
          
			swal("Atenção", 'Ja existe na lista de similar')
        }
    }

}


function renderTodos() {

	todoList.innerHTML = '';
	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i];
		const li = document.createElement('h3');
		li.textContent = todo.text;
		if (todo.completed) {
			li.classList.add('liLista');
		}
		const deleteButton = document.createElement('img');
		deleteButton.setAttribute('src', `${IconLixeira}`);
		deleteButton.width = 30;
		deleteButton.classList.add('btdele')

		deleteButton.addEventListener('click', function() {
			deleteTodoAtIndex(i);
		});
		li.appendChild(deleteButton);
		li.addEventListener('click', function() {
			toggleCompleted(i);
		});
		todoList.appendChild(li);
	}
}

function toggleCompleted(index) {

	// const rm = document.querySelector('.receberMarcados');

	todos[index].completed = !todos[index].completed;
	saveTodos();
	renderTodos();

}

function deleteTodoAtIndex(index) {
	todos.splice(index, 1);
	saveTodos();
	renderTodos();
}

function filterTodos() {

	const filterText = filterTodo.value.trim().toLowerCase();
	const filteredTodos = todos.filter(function(todo) {
		return todo.text.toLowerCase().includes(filterText);
	});
	renderFilteredTodos(filteredTodos);
}

function renderFilteredTodos(filteredTodos) {
	
	todoList.innerHTML = '';
	for (let i = 0; i < filteredTodos.length; i++) {
		const todo = filteredTodos[i];
		const li = document.createElement('h3');
		li.textContent = todo.text;
		if (todo.completed) {
			li.classList.add('liLista');
		}
		const deleteButton = document.createElement('img');
		deleteButton.setAttribute('src', `${IconLixeira}`);
		deleteButton.width = 30;
		deleteButton.classList.add('btdele')


		deleteButton.addEventListener('click', function() {
			deleteTodoAtIndex(todos.indexOf(todo));
		});
		li.appendChild(deleteButton);
		li.addEventListener('click', function() {
			toggleCompleted(todos.indexOf(todo));
		});
		todoList.appendChild(li);
	}
}

function deleteCompletedTodos(){
	todos = todos.filter(function(todo) {
		return !todo.completed;
	});
	saveTodos();
	renderTodos();
}

function saveTodos() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function dateSalvo(){

 	const save01 = JSON.parse(localStorage.getItem('saveDate'));

	if(save01){

		date_horas.innerHTML = `${save01}`;
	}
}

const btpdf2 = document.querySelector(".btpdf2");

btpdf2.addEventListener('click', ()=> gerarPDF2());

function gerarPDF2() {
	
	
let table = '<table><thead><tr><th>Medicamentos</th><th>Status</th></tr></thead><tbody>';


todos.forEach(function(item) {
table += '<tr><td>' + item.text + '</td><td>' + (item.completo ? 'Completo' : 'Em falta ou poucas unidades') + '</td></tr>';
});


table += '</tbody></table>';


const titulo = '<h1>Lista de Similar</h1>';


const printContent = '<html><head><title>Lista de Similar</title><style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 5px; text-align: left; }</style></head><body>' + titulo + table + '</body></html>';


const printWindow = window.open('', '_blank', 'width=600,height=800');
printWindow.document.open();
printWindow.document.write(printContent);
printWindow.document.close();


printWindow.print();
printWindow.close();
}


function addItemsCodBarra(event){

	const txt = event.value;

	for(const codigo of codBarras){

		if(txt == codigo.cod){

			todos.push({text: codigo.nome, completed: false});
			saveTodos();
            renderTodos();
            newTodo.value = '';
		}
	}

}

const btC2 = document.querySelector('.btcopiar2');

btC2.addEventListener('click', ()=> copiarItens2());

function copiarItens2() {


    swal('Lista Similar Copiada com sucesso!');
    let table = `<table><thead><tr><th></th>SIMILARES:<th>Lista Copiada em: ${desc}</th></tr></thead><tbody>`;
  
   
    todos.forEach(function(item) {
      table += '<tr><td>' + item.text + '</td><td>' + '</td></tr>';
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

	
  }

dateSalvo()






