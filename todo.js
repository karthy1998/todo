const addbutton = document.querySelector('.addbutton'); 
var input = document.querySelector('.input');
var container = document.querySelector('.container');

class item{
      constructor(itemName){
          this.createDiv(itemName);
          console.log(itemName);
      }
      createDiv(itemName){
          let input = document.createElement('input');
          input.value = itemName;
          input.disabled = true;
          input.classList.add('item_input');
          input.type = "text";

          let itembox = document.createElement('div');
          itembox.classList.add('item');

          let edit = document.createElement('button');
          edit.innerHTML = "Edit";
          edit.classList.add('edit');

          let remove = document.createElement('button');
          remove.innerHTML = "Remove"
          remove.classList.add('remove');

          container.appendChild(itembox);
          itembox.appendChild(input);
          itembox.appendChild(edit);
          itembox.appendChild(remove);


          edit.addEventListener('click', ()=> this.edit(input));
          remove.addEventListener('click', ()=>this.remove(itembox));
      }
      edit(input){
          input.disabled = !input.disabled;
      }
      remove(item){
          container.removeChild(item);
      }
} 

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addbutton.addEventListener('click', check);
window.addEventListener('keydown', (e)=>{
    if(e.which == 13){
        check();
    }
})