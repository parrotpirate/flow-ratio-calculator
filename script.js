function firstPassCalc (event) {
  event.preventDefault();
  outputContainer = document.getElementById("first-pass-output");
  outputContainer.classList.remove('clicked', 'finished');
  outputContainer.innerHTML = '';
  outputContainer.classList.add('loading');
  let ratioInput = document.getElementById("first-pass-ratio");
  let ratio = parseFloat(ratioInput.value);
  let resultInput = document.getElementById("first-pass-result");
  let result = parseFloat(resultInput.value);
  let calc = ratio * (100 + result) / 100;
  let output = calc.toFixed(3);

  outputContainer.classList.remove('loading');
  outputContainer.classList.add('finished');
  outputContainer.innerHTML = output;
  outputContainer.value = output;
  document.getElementById("second-pass-ratio").value = output;
}

function secondPassCalc (event) {
  event.preventDefault();
  outputContainer = document.getElementById("second-pass-output");
  outputContainer.classList.remove('clicked', 'finished');
  outputContainer.innerHTML = '';
  outputContainer.classList.add('loading');
  let ratioInput = document.getElementById("second-pass-ratio");
  let ratio = ratioInput.value;
  let resultInput = document.getElementById("second-pass-result");
  let result = parseFloat(resultInput.value);
  let calc = ratio * (100 + result) / 100;
  let output = calc.toFixed(3);

  outputContainer.classList.remove('loading');
  outputContainer.classList.add('finished');
  outputContainer.innerHTML = output;
  outputContainer.value = output;
}

function copyContent (event) {
  navigator.clipboard.writeText(event.target.value);
  event.target.classList.add('clicked');
}

document.getElementById('first-pass-form').addEventListener("submit", firstPassCalc)
document.getElementById('second-pass-form').addEventListener("submit", secondPassCalc)
document.getElementById('first-pass-output').addEventListener('click', copyContent);
document.getElementById('second-pass-output').addEventListener('click', copyContent);