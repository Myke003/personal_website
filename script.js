window.addEventListener("scroll", function () {
  const navBar = document.getElementById("nav-bar");
  if (window.scrollY > 200) {
    navBar.classList.add("down");
  } else {
    navBar.classList.remove("down");
  }
});

let typingText = document.querySelector(".typing-text");
let texto = "Bienvenido a mi página";

typingText.textContent = "";

function typingEffect() {
  for (let i = 0; i < texto.length; i++) {
    setTimeout(() => {
      typingText.textContent += texto[i];
    }, i * 120);
  }

  setTimeout(()=> {
    typingText.textContent = "";
    typingEffect();
  }, texto.length * 120 + 1000);
}

typingEffect();
