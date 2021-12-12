let form = document.querySelector("form")
let biblioteka = []
let book = {
  tytul: "",
  autor: "",
  priorytet: 0,
  kategoria: "",
}

let bibliotekahtml = () => {
  var html =
    "<table><tr><th>Tytuł</th><th>Autor</th><th>Priorytet</th><th>Kategoria</th></tr>"
  for (var i = 0; i < biblioteka.length; i++) {
    html +=
      "<tr><td>" +
      biblioteka[i].tytul +
      "</td><td>" +
      biblioteka[i].autor +
      "</td><td>" +
      biblioteka[i].priorytet +
      "</td><td>" +
      biblioteka[i].kategoria +
      "</td></tr>"
  }

  html += "</table>"
  document.getElementById("library").innerHTML = html
}

let validate = () => {
  let tytulLength = document.querySelector("#tytul").value.length
  let autorLength = document.querySelector("#autor").value.length
  if (
    tytulLength < 1 ||
    autorLength < 3 ||
    priorytet < 1 ||
    priorytet > 5 ||
    kategoria == ""
  ) {
    alert(
      `1. Tytuł książki musi zawierać co najmniej 1 znak; \n 2. Autor książki musi zawierać co najmniej 3 znaki; \n 3. Priorytet przeczytania (1-5); \n 4. Wybierz kategorie.`
    )
  } else {
    biblioteka.push(book)
    document.querySelector("#tytul").value = ""
    document.querySelector("#autor").value = ""
    document.querySelector("#priorytet").value = ""
    document.querySelector("#kategoria").value = ""
  }
}

if (localStorage.getItem("bibliotekaString") !== null) {
  biblioteka = JSON.parse(localStorage.getItem("bibliotekaString"))
  bibliotekahtml()
}

document.querySelector("button").onclick = (e) => {
  e.preventDefault()
  tytul = document.querySelector("#tytul").value
  autor = document.querySelector("#autor").value
  priorytet = document.querySelector("#priorytet").value
  kategoria = document.querySelector("#kategoria").value
  book = {
    tytul: tytul,
    autor: autor,
    priorytet: priorytet,
    kategoria: kategoria,
  }
  validate()
  localStorage.setItem("bibliotekaString", JSON.stringify(biblioteka))
  bibliotekahtml()
}
