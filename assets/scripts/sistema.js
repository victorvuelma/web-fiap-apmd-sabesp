const urlParams = new URLSearchParams(window.location.search);
const sistema = urlParams.get("nome");

document.title =
  "Sabesp - " +
  sistema +
  " - Qualidade da Água Distribuída por Sistema de Abastecimento";

const body = document.querySelector("body");

const h1 = document.querySelector("h1");
h1.innerHTML = sistema;

const url =
  "https://json-server-apmd-sabesp.herokuapp.com/params?sistema=" + sistema;
fetch(url).then((response) =>
  response.json().then((params) => {
    // body.appendChild(Header(params));
  })
);
