function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}
function backspace() {
  const resultField = document.getElementById('result');
  resultField.value = resultField.value.slice(0, -1);
}
function calculate() {
  const resultField = document.getElementById('result');
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = 'Error';
  }
}


// Tilt effect
const wrapper = document.getElementById("tilt-wrapper");
const container = document.getElementById("container");
wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
wrapper.addEventListener("mouseleave", () => {
    container.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

document.addEventListener("keydown", (e) => {
    const allowedKeys = '0123456789.+-*/()%()';
    if (allowedKeys.includes(e.key)) {
      appendToResult(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
      calculate();
    } else if (e.key === 'Backspace') {
      backspace();
    } else if (e.key === 'Escape') {
      clearResult();
    }
  });