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


// **************************************************************
// scroll up button
const mybutton = document.querySelector('.scroll__btn');


window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click' , topFunction)


// **************************************************************



// //--------------------------------Dropzone
// const myDropzone = document.querySelector('.dz-success-mark')


//  myDropzone.on("complete", function(file) {
//     myDropzone.removeFile(file);
//  });



//  dark and light button

let switchElement = document.querySelector('.sunn')

switchElement.addEventListener('click', () => {

  document.body.classList.toggle('light')

})