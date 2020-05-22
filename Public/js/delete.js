function darkMode() {
	document.body.classList.toggle("dark-mode");
	if(document.body.classList.contains("dark-mode"))
		localStorage.setItem("darkmode", "true");
	else
		localStorage.setItem("darkmode", "false");
}

window.onload = function(){
	if (typeof(Storage) !== "undefined" && localStorage.getItem("darkmode") == "true") {
		document.body.classList.toggle("dark-mode");
	}
}

document.getElementById("form").addEventListener("submit", async function(e){
    e.preventDefault()
    const obj = {
        username: document.getElementById("user").value,
        mail: document.getElementById("mail").value,
        password: document.getElementById("pass").value
    }
    const res = await fetch("http://localhost:3000/delete", {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    })
    console.log(res.status);
    
    if(res.status == 200){
        alert("Account deleted :(")
        localStorage.clear()
        window.location.href = "index.html";
        return
    }
    alert("Something went wrong")
})