var a = document.querySelector("h5")
var add = document.querySelector("#add")
flag = 0
  add.addEventListener("click",function(){
    if(flag == 0){
    a.innerHTML = "Friends"
    a.style.color = "green"
      add.innerHTML = "Remove friend"
       flag = 1
      }else{
      a.innerHTML = "Stranger"
      a.style.color = "red"
      add.innerHTML = "Add friend"
      flag = 0
      }
  })            