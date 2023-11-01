
// let login = false;


function active_canvas  (ide) {
    // alert("hola");
    var padre = document.getElementById("canvas");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
}


// function active_login (){

//     var doc_login = document.getElementById('id01');
//     doc_login.style.display = "block";
// }


// var modal = document.getElementById('id01');

// // // When the user clicks anywhere outside of the modal, close it
// // window.onclick = function(event) {
// //     if (event.target == modal) {
// //         modal.style.display = "none";
// //     }
// // }





// function check_login (){
//      alert("hola")
//     const userCont = document.getElementById('usuario');
//     const user = userCont.innerHTML;
//     console.log(userCont)
// }



// const userCont = document.querySelector('.a_home');
// console.log(userCont);

// console.log(userCont.classList)
