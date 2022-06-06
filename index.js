window.addEventListener('DOMContentLoaded', function(){
    let formRegister = document.querySelector(".form-register");
    formRegister.addEventListener("submit", function(e){
        // e.preventDefault();
        let canSubmit = false;
        let inputName = document.querySelector("#fName");

        if(inputName.value == ""){
            document.querySelector(".input-container.fName .input-error").innerHTML = "El nombre es obligatorio"
            let canSubmit = true;

        }else{
            if (inputName.value.length<3){
                document.querySelector(".input-container.fName .input-error").innerHTML = "El nombre tiene que tener minimo 3 caracteres"
            let canSubmit = true;

            }else{
                document.querySelector(".input-container.fName .input-error").innerHTML = ""
            }            
        }

        let inputLName = document.querySelector("#lName");

        if(inputLName.value == ""){
            document.querySelector(".input-container.lName .input-error").innerHTML = "El apellido es obligatorio"
            let canSubmit = true;

        }else{
            if (inputLName.value.length<3){
                document.querySelector(".input-container.lName .input-error").innerHTML = "El apellido tiene que tener minimo 3 caracteres"
                let canSubmit = true;

            }else{
                document.querySelector(".input-container.lName .input-error").innerHTML = ""
            }            
        }

        let inputCedula = document.querySelector("#cedula");
        // console.log(inputCedula.value)
        if(inputCedula.value == ""){
            document.querySelector(".input-container.cedula .input-error").innerHTML = "La cedula es obligatoria"
            let canSubmit = true;

        }else{
            if (inputCedula.value.length < 10 || inputCedula.value.length > 10 || isNaN(Number(inputCedula.value))){
                document.querySelector(".input-container.cedula .input-error").innerHTML = "La cedula tiene que tener 10 caracteres y ser solo numeros"
                let canSubmit = true;
            }else{
                document.querySelector(".input-container.cedula .input-error").innerHTML = ""
            }            
        }


        let inputEmail = document.querySelector("#email");

        if(inputEmail.value == ""){
            document.querySelector(".input-container.email .input-error").innerHTML = "El email es obligatorio"
            let canSubmit = true;

        }else{
            let index1 = inputEmail.value.indexOf("@");
            let index2 = inputEmail.value.indexOf(".");
            if (index1<0 || index2<0 || index1 > index2){
                document.querySelector(".input-container.email .input-error").innerHTML = "El email es invalido"
                let canSubmit = true;

            }else{
                document.querySelector(".input-container.email .input-error").innerHTML = ""
            }            
        }

        if(canSubmit){
            e.preventDefault()
        }
    })

})