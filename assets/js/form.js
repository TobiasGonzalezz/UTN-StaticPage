window.addEventListener("DOMContentLoaded", () => {
    // localStorage.clear()
    console.log("La pagina esta cargada")

    const formRegister = document.querySelector("form")
    const registerName = formRegister.querySelector("#nombre")
    const registerLastName = formRegister.querySelector("#apellido")
    const registerdayOfDeparture = formRegister.querySelector("#diaS")
    const registerReturnDay = formRegister.querySelector("#diaF")
    const registerNumberOfPeople = formRegister.querySelector("#cantidad")
    const registerEmail = formRegister.querySelector("#email")
    const registerPhone = formRegister.querySelector("#telefono")
    const registerDNI = formRegister.querySelector("#DNI")
    const buttonRegister = formRegister.querySelector("#register")

    // mandar datos al localStorage

    buttonRegister.addEventListener("click", (event) => {
        event.preventDefault()
        const userData = {
            Name: registerName.value,
            lastName: registerLastName.value,
            Email: registerEmail.value,
            dayOfDeparture: registerdayOfDeparture.value,
            ReturnDay: registerReturnDay.value,
            NumberOfPeople: registerNumberOfPeople.value,
            Phone: registerPhone.value,
            DNI: registerDNI.value
        }
        // window.localStorage.setItem("name", userData.Name)
        // window.localStorage.setItem("lastName", userData.lastName)
        // window.localStorage.setItem("email", userData.Email)
        // window.localStorage.setItem("password", userData.Password)
        // window.localStorage.setItem("password2", userData.Password2)
        // window.localStorage.setItem("date", userData.Date)

   
 console.log(userData)   

        // Verificarcion para registrarse

        // if (userData.Name === "" || userData.lastName === "" || userData.Email === "" || userData.Password === "" || userData.Password2 === "" || userData.Date === "") {
        //     swal({
        //         title: "Error",
        //         text: "Por favor completa todos los campos",
        //         icon: "warning",
        //     })
        // } else if (userData.Password != userData.Password2) {
        //     swal({
        //         title: "Error",
        //         text: "Las contraseñas no coinciden 🤷‍♀️",
        //         icon: "error",
        //     })
        // }
        // else {
        //     swal({
        //         title: "Perfecto",
        //         text: "Te registraste con exito 👌",
        //         icon: "success",
        //     })
        //         .then((registroExitoso) => {
        //             if (registroExitoso) {
        //                 const url = window.location.href.replace("sign_up.html", "sign_in.html")
        //                 // window.location.href = url
        //             }
        //         })
        // }
    })
});

