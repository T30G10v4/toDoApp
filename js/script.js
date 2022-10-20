const newTaskDOM = document.getElementById("new-task");
console.log(newTaskDOM);

const expiringDOM = document.getElementById("expiring");
console.log(expiringDOM);

let id = 1;

newTaskDOM.addEventListener("click", addTask);

function addTask() {

    
    
    expiringDOM.innerHTML += `
    
    <div class="task m-btm-2em p-1em flex-row-center-center">
    <div class="col-xs-one text-align-center">
      <i class="fa-solid fa-car"></i>
    </div>
    <div class="col-xs-one">
      <div class="priority high"></div>
    </div>
    <div class="col-xs-one text-align-center font-size-20">
      <p>ID ${id}</p>
      
    </div>
    <div class="col-xs-eight m-lft-1em font-size-20">
      <p>21 OTT 2022</p>
      <p>Bollo Auto</p>
      <p>100€</p>
    </div>
    <div class="col-xs-one text-align-center">
      <div id="" class="done-btn btn p-1em">DONE</div>
    </div>
  </div>
    
    `;

    id++;

}

