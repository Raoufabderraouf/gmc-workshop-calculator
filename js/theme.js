let buttons = document.querySelectorAll(".toggle");
let lastActive = 0;

/*for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener('clik', function() {
    buttons[lastActive].classlist.remove("active");
    button.classlist.add("active");
    lastActive = i;
  });
}
*/

const theme1 = {
  "--main-bg": "hsl(222, 26%, 31%)",
  "--keypad-bg": "hsl(223, 31%, 20%)",
  "--screnn-bg": "hsl(224, 36%, 15%)",

  /*text*/
  "--text-blue": "hsl(221, 14%, 31%)",
  "--text-white": "hsl(0, 0%, 100%)",
  "--screnn-text": "hsl(0, 0%, 100%)",

  /*keys*/
  "--keys-func-bg": "hsl(225, 21%, 49%)",
  "--keys-func-hover": "hsl(225, 51%, 76%)",
  "--keys-func-shadow": "hsl(224, 28%, 35%)",

  "--keys-equal-bg": "hsl(6, 63%, 50%)",
  "--keys-equal-hover": "hsl(6, 93%, 67%)",
  "--keys-equal-shadow": "hsl(6, 70%, 34%)",

  "--keys-bg": "hsl(30, 25%, 89%)",
  "--keys-shadow": "hsl(28, 16%, 65%)",
  "--keys-hover": "white"
};

const theme2 = {
  "--main-bg": "hsl(0, 0%, 90%)",
  "--keypad-bg": "hsl(0, 5%, 81%)",
  "--screnn-bg": "hsl(0, 0%, 93%)",

  /*text*/
  "--text-blue": "hsl(60, 10%, 19%)",
  // "--text-white": "hsl(0, 0%, 100%)",
  "--screnn-text": "black",

  /*keys*/
  "--keys-func-bg": "hsl(185, 42%, 37%))",
  "--keys-func-hover": "hsl(225, 51%, 76%)",
  "--keys-func-shadow": "hsl(185, 58%, 25%)",

  "--keys-equal-bg": "hsl(25, 98%, 40%)",
  "--keys-equal-hover": "hsl(6, 93%, 67%)",
  "--keys-equal-shadow": "hsl(25, 99%, 27%)",

  "--keys-bg": "hsl(45, 7%, 89%)",
  "--keys-shadow": "hsl(35, 11%, 61%)",
  "--keys-hover": "white"
};

const theme3 = {
  "--main-bg": "hsl(268, 75%, 9%)",
  "--keypad-bg": "hsl(268, 71%, 12%)",
  "--screnn-bg": "hsl(268, 71%, 12%)",

  /*text*/
  "--text-blue": "hsl(52, 100%, 62%)",
  "--text-white": "hsl(0, 0%, 100%)",
  // "--text-blue": "hsl(198, 20%, 13%)",
  "--screnn-text": "hsl(52, 100%, 62%)",

  /*keys*/
  "--keys-func-bg": "hsl(281, 89%, 26%)",
  "--keys-func-hover": "hsl(285, 91%, 52%)",
  "--keys-func-shadow": "hsl(285, 91%, 52%)",

  "--keys-equal-bg": "hsl(176, 100%, 44%)",
  "--keys-equal-hover": "hsl(177, 92%, 70%)",
  "--keys-equal-shadow": "hsl(177, 92%, 70%)",

  "--keys-bg": "hsl(268, 47%, 21%)",
  "--keys-shadow": "hsl(290, 70%, 36%)",
  "--keys-hover": "hsl(290, 70%, 36%)"
};

//const themes = [theme1, theme2, theme3];

buttons.forEach(function(button, i, array) {
  button.addEventListener("click", function() {
    buttons[lastActive].classList.remove("active");
    button.classList.add("active");
    lastActive = i;
    // TODO : Change theme
    applyTheme(i);
  });
});

const themes = [theme1, theme2, theme3];

function applyTheme(index) {
  const rootEl = document.querySelector(`:root`);
  const selectedTheme = themes[index];
  for (let key in selectedTheme) {
    rootEl.style.setProperty(key, selectedTheme[key]);
  }
}
