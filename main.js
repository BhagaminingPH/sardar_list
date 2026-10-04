
import { verifyPassword } from './comman.min.js';



document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const protectedCards = document.querySelectorAll(".protected-card");
  const modal = document.getElementById("passwordModal");
  const passInput = document.getElementById("cardPassword");
  const errorMsg = document.getElementById("errorMsg");
  const submitBtn = document.getElementById("submitPassBtn");
  const cancelBtn = document.getElementById("cancelPassBtn");

  let targetUrl = "";

  // Click animation feedback
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.95)";
      setTimeout(() => {
        card.style.transform = "none";
      }, 150);
    });
  });

  // Protected cards click handler
  protectedCards.forEach((pCard) => {
    pCard.addEventListener("click", (e) => {
      e.preventDefault();
      targetUrl = pCard.getAttribute("data-url");
      passInput.value = "";
      errorMsg.style.display = "none";
      modal.style.display = "flex";
      passInput.focus();
    });
  });

  // Helper function to handle verification
  const handleAuth = () => {
    verifyPassword(passInput.value, targetUrl, modal, errorMsg, passInput);
  };

  submitBtn.addEventListener("click", handleAuth);

  // Submit password on Pressing Enter
  passInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleAuth();
    }
  });

  // Close modal
  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
