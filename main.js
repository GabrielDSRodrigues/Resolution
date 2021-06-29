function id(e) { return document.getElementById(e); }

let url = id("campoURL");
let btnURL = id("btnURL");

btnURL.addEventListener("click", () => {
  id("janela").src = url.value;
});

let camposLH = [id("campoL"), id("campoH")];
let btnSize = id("btnSize");

btnSize.addEventListener("click", () => {
  if (url.value != "") {
    id("janela").style.width = camposLH[0].value + "px";
    id("janela").style.height = camposLH[1].value + "px";
  }
})

let optionsVal = [
  [1024,600], [1024,768], [1280,768], [1280,950], [1366,768]//Notebooks
];
let options = id("options");
options.addEventListener("change", () => {
  console.log([options.value])
  if (url.value != "") {
    id("janela").style.width = optionsVal[parseInt(options.value)][0]+"px";
    id("janela").style.heigth = optionsVal[parseInt(options.value)][1]+"px";
  }
});