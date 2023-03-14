const typingText = document.getElementById('typing-text');
const text = typingText.innerHTML;
typingText.innerHTML = '';

let i = 0;
const typingInterval = setInterval(() => {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
  } else {
    clearInterval(typingInterval);
  }
}, 150);
