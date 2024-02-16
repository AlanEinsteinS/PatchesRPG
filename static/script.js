function exibirConteudo(patchId) {
  var patchButtons = document.getElementsByClassName("patch-button");
  for (var i = 0; i < patchButtons.length; i++) {
    patchButtons[i].classList.remove("active");
  }

  var patchContents = document.getElementsByClassName("patch-content");
  for (var i = 0; i < patchContents.length; i++) {
    patchContents[i].classList.remove("active");
  }

  var button = document.getElementById(patchId + "-button");
  button.classList.add("active");

  var content = document.getElementById(patchId + "-content");
  content.classList.add("active");
}

function toggleDetalhesPatches1() {
  var patchDetails = document.getElementById("patch-details1");
  if (patchDetails.style.display === "block") {
    patchDetails.style.display = "none";
  } else {
    patchDetails.style.display = "block";
  }
}

function toggleDetalhesPatches2() {
  var patchDetails = document.getElementById("patch-details2");
  if (patchDetails.style.display === "block") {
    patchDetails.style.display = "none";
  } else {
    patchDetails.style.display = "block";
  }
}

function toggleDetalhesPatches3() {
  var patchDetails = document.getElementById("patch-details3");
  if (patchDetails.style.display === "block") {
    patchDetails.style.display = "none";
  } else {
    patchDetails.style.display = "block";
  }
}

function toggleDetalhesPatches4() {
  var patchDetails = document.getElementById("patch-details4");
  if (patchDetails.style.display === "block") {
    patchDetails.style.display = "none";
  } else {
    patchDetails.style.display = "block";
  }
}

function toggleDetalhesPatches5() {
  var patchDetails = document.getElementById("patch-details5");
  if (patchDetails.style.display === "block") {
    patchDetails.style.display = "none";
  } else {
    patchDetails.style.display = "block";
  }
}

function toggleDetalhesPatches6() {
  var patchDetails = document.getElementById("patch-details6");
  if (patchDetails.style.display === "block") {
    patchDetails.style.display = "none";
  } else {
    patchDetails.style.display = "block";
  }
}

function exibirConteudo(patchId) {
  var patchButtons = document.getElementsByClassName("patch-button");
  for (var i = 0; i < patchButtons.length; i++) {
    patchButtons[i].classList.remove("active");
  }

  var patchContents = document.getElementsByClassName("patch-content");
  for (var i = 0; i < patchContents.length; i++) {
    patchContents[i].classList.remove("active");
  }

  var button = document.getElementById(patchId + "-button");
  button.classList.add("active");

  var content = document.getElementById(patchId + "-content");
  content.classList.add("active");

  closeAllDetails(); // Chama a função para fechar todos os detalhes
}

function closeAllDetails() {
  var patchDetails = document.getElementsByClassName("patch-details");
  for (var i = 0; i < patchDetails.length; i++) {
    patchDetails[i].style.display = "none";
  }
}

// Adicione esta parte para fechar os detalhes quando um patch-button for clicado
var patchButtons = document.getElementsByClassName("patch-button");
for (var i = 0; i < patchButtons.length; i++) {
  patchButtons[i].addEventListener("click", function() {
    closeAllDetails();
  });
}


