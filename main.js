function id(e) { return document.getElementById(e); }

let url = id("campoURL");
let btnURL = id("btnURL");

let janela = id("janela");

btnURL.addEventListener("click", () => {
  id("janela").src = url.value;
});

let camposLH = [id("campoL"), id("campoH")];
let btnSize = id("btnSize");

btnSize.addEventListener("click", () => {
  if (url.value != "") {
    janela.style.width = camposLH[0].value + "px";
    janela.style.height = camposLH[1].value + "px";
  }
})

let optionsVal = [
  [1024, 600], [1024, 768], [1280, 768], [1280, 950], [1366, 768], // Notebooks
  [1600, 900], [1920, 1080], [2160, 1440], [2560, 1440], [3200, 1800], [3440, 1440], [3840, 2160], [5120, 2880], [7680, 4320] // Monitores e Televisores    
];

let options = id("options");

for (let i = 0; i < optionsVal.length; i++) {
  options.insertAdjacentHTML("beforeend", `<option value="${i}">${optionsVal[i][0]} x ${optionsVal[i][1]}</option>`);
}

janela.style.width = optionsVal[0][0] + "px";
janela.style.height = optionsVal[0][1] + "px";
document.querySelector("header").style.width = optionsVal[0][0] + "px";

options.addEventListener("change", () => {
  document.querySelector("header").style.width = optionsVal[parseInt(options.value)][0] + "px";
  camposLH[0].value = optionsVal[parseInt(options.value)][0];
  camposLH[1].value = optionsVal[parseInt(options.value)][1];
  janela.style.width = optionsVal[parseInt(options.value)][0] + "px";
  janela.style.height = optionsVal[parseInt(options.value)][1] + "px";
});