


let btn = document.getElementById("btn");
let inputfelid1 = document.getElementById("password1");
let inputfelid2 = document.getElementById("password2");


btn.addEventListener("click", function () {
  let passwordLength = 10;
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|;:,.<>?";

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  inputfelid1.value = password;
});
btn.addEventListener("click", function () {
  let passwordLength = 10; 
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|;:,.<>?";

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  inputfelid2.value = password;
});



document.addEventListener('DOMContentLoaded', function() {
  const copyButton1 = document.getElementById('copyButton1');
  const textToCopy = document.getElementById('textToCopy').innerText;

  copyButton1.addEventListener('click', function() {
      copyToClipboard(textToCopy);
      alert('Text copied to clipboard!');
  });
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);

  textarea.select();

  try {
      document.execCommand('copy');
  } catch (err) {
      console.error('Unable to copy to clipboard:', err);
  }

  document.body.removeChild(textarea);
}



document.addEventListener('DOMContentLoaded', function() {
  const copyButton2 = document.getElementById('copyButton2');
  const textToCopy = document.getElementById('textToCopy').innerText;

  copyButton2.addEventListener('click', function() {
      copyToClipboard(textToCopy);
      alert('Text copied to clipboard!');
  });
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);

  textarea.select();

  try {
      document.execCommand('copy');
  } catch (err) {
      console.error('Unable to copy to clipboard:', err);
  }

  document.body.removeChild(textarea);
}
