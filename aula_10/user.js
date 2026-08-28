var users = JSON.parse(localStorage.getItem("users")) || [];

var loggeded = JSON.parse(localStorage.getItem("loggeded")) || {};
var hello = document.getElementById("hello");
if (hello && loggeded) hello.innerHTML = "Olá " + loggeded.nome
//function name (parametro p1 p2){}*/
function createBotton(text, classe, i) {
    let bt = document.createElement("a");
    bt.innerHTML = text;
    bt.dataset.id = i;

    classe.forEach((c) => {
        bt.classList.add (c);
    });
    

    bt.classList.add("cursor-pointer");
    bt.classList.add("#feature");
    bt.classList.add(".text-secondary")
    
    
    return bt;

}
var listUsers = document.getElementById("listUsers")
if (listUsers) {
    let i = 0
    users.forEach((u) => {
        let tdName = document.createElement("td");
        tdName.innerHTML = u.nome;

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = u.email;

        let tdAction = document.createElement("td");
        tdAction.createBotton(text, classe, i);
        tdAction.appendChild(createBotton("V",[show,"cursor-pointe", "#feature", ".text-secondary" ]));
        tdAction.appendChild(createBotton("X",[show,"cursor-pointe", "#feature", ".text-secondary" ]));
        
        let tr = document.createElement("tr");
        tr.id = i;
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAction);
        listUsers.appendChild(tr)
        i++;
    });
}
var botoesV = document.querySelectorAll(".show");
botoesV.forEach((b) => {
    b.addEventListener("click", () => {
        const id = b.parentElement.parentElement.id;
        b.innerHTML = users[id].nascimento;
    })
});
var botoesD = document.querySelectorAll(".delete");
botoesD.forEach((b) => {
    b.addEventListener("click", () => {
        const id = b.dataset.id;
        users.splice(id, 1);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "painel.html"
    })
});

var formR = document.getElementById("formRegister");
formR?.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.getElementById("iName").value;
    let email = document.getElementById("iEmail").value;
    let pass = document.getElementById("iPass").value;
    let birth = document.getElementById("iBirth").value;

    const user = {//objeto anônimo, estrutura, json
        nome: name,
        email: email,
        senha: pass,
        nascimento: birth
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
    window.location.href = "painel.html"
})

var formL = document.getElementById("btLogin");
// get = pegar, elemento = elemento do html

formL?.addEventListener("click", (e) => {
    e.preventDefault();

    // document é a pagína toda
    let email = document.getElementById("iEmailLogin").value;
    let pass = document.getElementById("iPassLogin").value;

    let user = users.find(u => {
        return u.email == email
    })
    //not usuario
    if (!user) {
        console.log("Usuário não encontrado");
        return
    }

    if (user.senha == pass) {
        console.log("Usuario Logado");
        localStorage.setItem("logado", JSON.stringify(user));
        window.location.href = "painel.html"

    } else {
        console.log("Senha invalida");
    }
})
