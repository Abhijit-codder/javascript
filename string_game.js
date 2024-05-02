function startGame() {
    const stringInput = document.getElementById('stringInput').value.trim();
    const outputDiv = document.getElementById('output');
    
    if (stringInput === '') {
      alert('Please enter a string.');
      return;
    }
    
    outputDiv.innerHTML = stringInput;
  }
  
  function checkPalindrome() {
    const stringInput = document.getElementById('stringInput').value.trim();
    const outputDiv = document.getElementById('output');
    const reversedString = stringInput.split('').reverse().join('');
    
    if (stringInput === '') {
      alert('Please enter a string.');
      return;
    }
    
    if (stringInput === reversedString) {
      outputDiv.innerText = 'Palindrome: Yes';
    } else {
      outputDiv.innerText = 'Palindrome: No';
    }
  }
  
  function reverseString() {
    const stringInput = document.getElementById('stringInput').value.trim();
    const outputDiv = document.getElementById('output');
    
    if (stringInput === '') {
      alert('Please enter a string.');
      return;
    }
    
    outputDiv.innerText = 'Reversed String: ' + stringInput.split('').reverse().join('');
  }
  
  function countVowels() {
    const stringInput = document.getElementById('stringInput').value.trim().toLowerCase();
    const outputDiv = document.getElementById('output');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    if (stringInput === '') {
      alert('Please enter a string.');
      return;
    }
    
    for (let char of stringInput) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    outputDiv.innerText = 'Number of Vowels: ' + count;
  }
  