// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dynamic Year in Footer
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = `&copy; ${year} Pranav Patel. All rights reserved.`;

// Optional: Dark Mode Toggle (if you want to add a switch)
// const modeBtn = document.createElement("button");
// modeBtn.textContent = "🌓 Toggle Theme";
// modeBtn.style.marginTop = "10px";
// document.querySelector("header .container").appendChild(modeBtn);

// let dark = false;
// modeBtn.onclick = () => {
//   document.body.style.background = dark ? "#f4f4f4" : "#1e1e2f";
//   document.body.style.color = dark ? "#333" : "#f1f1f1";
//   dark = !dark;
// };
