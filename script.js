document.addEventListener('DOMContentLoaded', function () {
  const outputContainer1 = document.getElementById('outputContainer1');
  const outputContainer2 = document.getElementById('outputContainer2');
  const outputContainer3 = document.getElementById('outputContainer3');
  const outputContainer4 = document.getElementById('outputContainer4');
  const outputContainer5 = document.getElementById('outputContainer5');
  const outputContainer6 = document.getElementById('outputContainer6');


  const generateNumber1 = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    outputContainer1.textContent = `Number rolled (1-100): ${randomNumber}`;
    outputContainer1.style.fontFamily = 'Arial, sans-serif';
    outputContainer1.style.fontSize = '24px';
  };

  const generateNumber2 = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
    outputContainer2.textContent = `Number rolled (1-20): ${randomNumber}`;
    outputContainer2.style.fontFamily = 'Arial, sans-serif';
    outputContainer2.style.fontSize = '24px';
  };

  const generateNumber3 = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    outputContainer3.textContent = `Number rolled (1-12): ${randomNumber}`;
    outputContainer3.style.fontFamily = 'Arial, sans-serif';
    outputContainer3.style.fontSize = '24px';
  };
  const generateNumber4 = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    outputContainer4.textContent = `Number rolled (1-10): ${randomNumber}`;
    outputContainer4.style.fontFamily = 'Arial, sans-serif';
    outputContainer4.style.fontSize = '24px';
  };
  const generateNumber5 = () => {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    outputContainer5.textContent = `Number rolled (1-8): ${randomNumber}`;
    outputContainer5.style.fontFamily = 'Arial, sans-serif';
    outputContainer5.style.fontSize = '24px';
  };
  const generateNumber6 = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    outputContainer6.textContent = `Number rolled (1-6): ${randomNumber}`;
    outputContainer6.style.fontFamily = 'Arial, sans-serif';
    outputContainer6.style.fontSize = '24px'
  };

  document.getElementById('numberButton1').addEventListener('click', generateNumber1);
  document.getElementById('numberButton2').addEventListener('click', generateNumber2);
  document.getElementById('numberButton3').addEventListener('click', generateNumber3);
  document.getElementById('numberButton4').addEventListener('click', generateNumber4);
  document.getElementById('numberButton5').addEventListener('click', generateNumber5);
  document.getElementById('numberButton6').addEventListener('click', generateNumber6);
});