const addForm = document.querySelector('.add');
const list  = document.querySelector('.todos');
const searchForm = document.querySelector('.search');

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const todo = addForm.addInput.value.trim().charAt(0).toUpperCase() + addForm.addInput.value.trim().slice(1);

  let html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html;
  addForm.reset();
});

list.addEventListener('click', function(e){
  if(e.target.tagName === "I"){
    e.target.parentElement.remove();
  }
})

searchForm.addEventListener('keyup', function(e){
  const words = searchForm.search.value.toLowerCase();

  const span = list.querySelectorAll('span');
  const itemArray = Array.from(span);
  // console.log(itemArray);

  itemArray.forEach(items => {
    // console.log(items.textContent.toLowerCase());
    if(items.textContent.toLowerCase().includes(words)){
      items.parentElement.classList.remove('d-none');
    }else{
      items.parentElement.classList.add('d-none');
    }
  })
})
