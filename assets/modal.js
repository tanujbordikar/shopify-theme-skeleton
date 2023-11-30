const showOverlay = () => document.querySelector(".modal-dark-overlay").style.display = "block";
const showModal = () => document.querySelector(".modal-container").style.display = "block";

const hideOverlay = () => document.querySelector(".modal-dark-overlay").style.display = "none";
const hideModal = () => document.querySelector(".modal-container").style.display = "none";

// Open Modal
document.querySelector("#openModal").onclick = function(){
    showOverlay();
    showModal();

}

// Close Modal
document.querySelector("#closeModal").onclick = function(){
    hideOverlay();
    hideModal();

}

// Close Modal when clicked outside the modal
window.onclick = function(e){
    if(e.target === document.querySelector('.modal-container')){
        hideOverlay();
        hideModal();
    }
}