// const userName = "Josh"
// const userEmail = "test@gmail.com"

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
        name: userName,
        email: userEmail
        })
    })
    .then(res => res.json())
    .then(user => {
        const append = document.createElement("p")
        const body = document.querySelector("#body")
        append.textContent = user.id
        body.append(append)

    })
    .catch(function (error) {
        const append = document.createElement("p")
        const body = document.querySelector("#body")
        append.textContent = error.message
        body.append(append)
    })
}