
// Search icon navbar

const search_btn = document.querySelector('.glass');
let input = document.querySelector('.search_input');
let deleteBtn = document.querySelector('.delete');

search_btn.addEventListener('click',function(){
    input.classList.toggle('search_input--show');
    deleteBtn.style.display = ('block');
    if (!input.classList.contains('search_input--show')) {
        deleteBtn.style.display = ('none');
    }
})

deleteBtn.addEventListener('click',function(){
    input.classList.remove('search_input--show');
    deleteBtn.style.display = ('none');
})
