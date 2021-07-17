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

let optionsVal = {
  desktop: [
  [1024, 600], [1024, 768], [1280, 768], [1280, 950], [1366, 768], // Notebooks
  [1600, 900], [1920, 1080], [2160, 1440], [2560, 1440], [3200, 1800], [3440, 1440], [3840, 2160], [5120, 2880], [7680, 4320] // Monitores e Televisores    
],
  mobile: [
  [320, 480], [320, 533], [360, 640], [375, 667], [384, 640], [400, 640], [414, 736], [424, 753], [480, 854], [540, 960], [720, 1280]
]
}

let options = {
  desktop: id("desktop"),
  mobile: id("mobile")
}

for (let i = 0; i < optionsVal.desktop.length; i++) {
  options.desktop.insertAdjacentHTML("beforeend", `<option value="${i}">${optionsVal.desktop[i][0]} x ${optionsVal.desktop[i][1]}</option>`);
}

for (let i = 0; i < optionsVal.mobile.length; i++) {
  options.mobile.insertAdjacentHTML("beforeend", `<option value="${i}">${optionsVal.mobile[i][0]} x ${optionsVal.mobile[i][1]}</option>`);
}

janela.style.width = optionsVal.desktop[0][0] + "px";
janela.style.height = optionsVal.desktop[0][1] + "px";
document.querySelector("header").style.width = optionsVal.desktop[0][0] + "px";

options.desktop.addEventListener("change", () => {
  document.querySelector("header").style.width = optionsVal.desktop[parseInt(options.desktop.value)][0] + "px";
  camposLH[0].value = optionsVal.desktop[parseInt(options.desktop.value)][0];
  camposLH[1].value = optionsVal.desktop[parseInt(options.desktop.value)][1];
  janela.style.width = optionsVal.desktop[parseInt(options.desktop.value)][0] + "px";
  janela.style.height = optionsVal.desktop[parseInt(options.desktop.value)][1] + "px";
});

options.mobile.addEventListener("change", () => {
  document.querySelector("header").style.width = "100%";
  camposLH[0].value = optionsVal.mobile[parseInt(options.mobile.value)][0];
  camposLH[1].value = optionsVal.mobile[parseInt(options.mobile.value)][1];
  janela.style.width = optionsVal.mobile[parseInt(options.mobile.value)][0] + "px";
  janela.style.height = optionsVal.mobile[parseInt(options.mobile.value)][1] + "px";
});