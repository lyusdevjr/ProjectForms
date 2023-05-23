const savedButton = document.getElementById('submit-btn');

savedButton.style.display = 'none';

function disableButton() {
  savedButton.disabled = true;
}

savedButton.addEventListener('click', function (e) {
  if (document.getElementById('agreement').checked) {
    disableButton();
  } else {
    e.preventDefault();
    alert('Você precisa concordar com os termos para enviar o formulário.');
  }
});

function enableButton() {
  savedButton.disabled = false;
}

function mostrarBotao() {
  if (document.getElementById('agreement').checked) {
    savedButton.style.display = 'block';
    enableButton();
  } else {
    savedButton.style.display = 'none';
    disableButton();
  }
}
document.getElementById('agreement').addEventListener('click', mostrarBotao);

mostrarBotao();
