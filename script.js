const historyContainer1 = document.getElementById('historyContainer1');
const historyContainer2 = document.getElementById('historyContainer2');
const historyContainer3 = document.getElementById('historyContainer3');
const historyContainer4 = document.getElementById('historyContainer4');
const historyContainer5 = document.getElementById('historyContainer5');
const historyContainer6 = document.getElementById('historyContainer6');
const historyContainer7 = document.getElementById('historyContainer7');

let history1 = [];
let history2 = [];
let history3 = [];
let history4 = [];
let history5 = [];
let history6 = [];
let history7 = [];



  const generateNumber1 = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    outputContainer1.textContent = `Number rolled (1-100): ${randomNumber}`;
    outputContainer1.style.fontFamily = 'Arial, sans-serif';
    outputContainer1.style.fontSize = '24px';
    historyContainer1.style.display = 'flex';
    historyContainer1.style.flexDirection = 'row';
    updateHistory(history1, randomNumber, 'historyContainer1');
  };

  const generateNumber2 = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
    outputContainer2.textContent = `Number rolled (1-20): ${randomNumber}`;
    outputContainer2.style.fontFamily = 'Arial, sans-serif';
    outputContainer2.style.fontSize = '24px';
    historyContainer2.style.display = 'flex';
    historyContainer2.style.flexDirection = 'row';
    updateHistory(history2, randomNumber, 'historyContainer2');
  };

  const generateNumber3 = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    outputContainer3.textContent = `Number rolled (1-12): ${randomNumber}`;
    outputContainer3.style.fontFamily = 'Arial, sans-serif';
    outputContainer3.style.fontSize = '24px';
    historyContainer3.style.display = 'flex';
    historyContainer3.style.flexDirection = 'row';
    updateHistory(history3, randomNumber, 'historyContainer3');
  };
  const generateNumber4 = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    outputContainer4.textContent = `Number rolled (1-10): ${randomNumber}`;
    outputContainer4.style.fontFamily = 'Arial, sans-serif';
    outputContainer4.style.fontSize = '24px';
    historyContainer4.style.display = 'flex';
    historyContainer4.style.flexDirection = 'row';
    updateHistory(history4, randomNumber, 'historyContainer4');
  };
  const generateNumber5 = () => {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    outputContainer5.textContent = `Number rolled (1-8): ${randomNumber}`;
    outputContainer5.style.fontFamily = 'Arial, sans-serif';
    outputContainer5.style.fontSize = '24px';
    historyContainer5.style.display = 'flex';
    historyContainer5.style.flexDirection = 'row';
    updateHistory(history5, randomNumber, 'historyContainer5');
  };
  const generateNumber6 = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    outputContainer6.textContent = `Number rolled (1-6): ${randomNumber}`;
    outputContainer6.style.fontFamily = 'Arial, sans-serif';
    outputContainer6.style.fontSize = '24px';
    historyContainer6.style.display = 'flex';
    historyContainer6.style.flexDirection = 'row';
    updateHistory(history6, randomNumber, 'historyContainer6');
  };
  const generateNumber7 = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    outputContainer7.textContent = `Number rolled (1-4): ${randomNumber}`;
    outputContainer7.style.fontFamily = 'Arial, sans-serif';
    outputContainer7.style.fontSize = '24px';
    historyContainer7.style.display = 'flex';
    historyContainer7.style.flexDirection = 'row';
    updateHistory(history7, randomNumber, 'historyContainer7');
  };


  const updateHistory = (history, number, containerId) => {
    history.push(number);
    if (history.length > 6 ) {
      history.shift();
    }
    const historyContainer = document.getElementById(containerId);
    historyContainer.innerHTML = '<h3>History:</h3>' + history.map(num => `<p class="history-number">${num}</p>`).join('');
  }

  document.getElementById('numberButton1').addEventListener('click', generateNumber1);
  document.getElementById('numberButton2').addEventListener('click', generateNumber2);
  document.getElementById('numberButton3').addEventListener('click', generateNumber3);
  document.getElementById('numberButton4').addEventListener('click', generateNumber4);
  document.getElementById('numberButton5').addEventListener('click', generateNumber5);
  document.getElementById('numberButton6').addEventListener('click', generateNumber6);
  document.getElementById('numberButton7').addEventListener('click', generateNumber7);
