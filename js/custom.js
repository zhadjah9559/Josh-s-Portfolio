function runScripts(){
    //use .modal because .fade is unique
    //<div class="modal fade">
    var modal = document.querySelectorAll('.fade');

    //use .modals because .modals is unique
    //<div class="col-sm-6 modals"
    var images = document.querySelectorAll('.modals');

    var closeBtn = document.querySelectorAll('.mfp-close');

    for(let i=0; i < images.length; i++){
        images[i].addEventListener("click", () => {
            modal.style.display = 'block'
        })
    } 

    for(let i=0; i < closeBtn.length; i++){
        closeBtn[i].addEventListener("click", () => {
            modal.style.display= 'none'
        })
    }
}