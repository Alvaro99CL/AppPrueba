console.log('inicio')
const agregar = document.getElementById('agregar');
const input   = document.getElementById('texto');
const ul      = document.querySelector('ul');
const vacio   = document.querySelector('.vacio');

agregar.addEventListener("click" , (e)=>{
    e.preventDefault();

    const texto = input.value;
    if (texto != '') {            
        const li = document.createElement('li');
        const p = document.createElement('p');

        p.textContent = texto;

        li.appendChild(p);
        li.appendChild( addBtnBorrar() );

        ul.appendChild(li);

        input.value = '';

        // vacio.style.display = 'none';
        vacio.style.display = "none";

    }
});

function addBtnBorrar(){
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn-delete';//agregar una clase

    deleteBtn.addEventListener('click' , (e)=>{        
        const item = e.target.parentElement;//seleccionar el padre que contiene al elemento                
        // ul.remove(item);
        ul.removeChild(item);

        const items = document.querySelectorAll('li');
        if (items.length == 0 ) {
            vacio.style.display = "block";
        }

    });
    
    return deleteBtn;
}
// const mi_pizza2 = document.getElementById('pizza2')
// const mi_pizza3 = document.getElementById('pizza3')

