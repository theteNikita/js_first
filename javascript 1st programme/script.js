  var isstatus = document.querySelector("h5")//stranger//


  var Addfriend = document.querySelector("#Add") ///addd//
  var Removefriend = document.querySelector("#Remove")

  Addfriend.addEventListener("click",function(){ //addd///
    isstatus.innerHTML="Friends"
    isstatus.style.color="green"
  })

  Removefriend.addEventListener("click",function(){
    isstatus.innerHTML="stranger"
    isstatus.style.color="red"
  })


  