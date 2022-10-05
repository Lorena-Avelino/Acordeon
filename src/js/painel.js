// var acordeon = document.getElementsByClassName("acordeon");
var acordeon = document.querySelectorAll(".acordeon");

// for(let i = 0; i<acordeon.length; i++ ) {
//     acordeon[i].addEventListener("click", function() {        
//         for(let j = 0; j<acordeon.length; j++){
//             if(this.open === true && acordeon[i] === acordeon[j]){
//                 return;
//             } else if(this.open === false && acordeon[i] != acordeon[j]){
//                 acordeon[j].removeAttribute("open", "true");
//             }
//             console.log(acordeon[j]);
//         }
//     })
// }

// acordeon.forEach(function (element) {
//     element.addEventListener("click", function() {        
//         for(let i = 0; i<acordeon.length; i++){
//             if(!this.open && element != acordeon[i]){
//                 acordeon[i].removeAttribute("open", "true");
//             }
//         }
//     });
// });

acordeon.forEach(function (element) {
    element.addEventListener("click", function() {        
        acordeon.forEach(function (el) {
            if(!element.open && element !== el){
                el.removeAttribute("open", "true");
                console.log("aqui");
            }
        });
    });
});