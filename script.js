document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('output');
  
    const generateNumber1 = () => {
      const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
      output.textContent = `Random Number (1-100): ${randomNumber}`;
    };
  
    const generateNumber2 = () => {
      const randomNumber = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
      output.textContent = `Random Number (1-20): ${randomNumber}`;
    };

    const generateNumber3 = () => {
        const randomNumber = Math.floor(Math.random() * 12) + 1;
        output.textContent = `Random Number (1-12): ${randomNumber}`;
    }; 
  
    document.getElementById('numberButton1').addEventListener('click', generateNumber1);
    document.getElementById('numberButton2').addEventListener('click', generateNumber2);
    document.getElementById('numberButton3').addEventListener('click', generateNumber3)
  });