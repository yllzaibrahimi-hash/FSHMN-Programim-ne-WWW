import { llogarit } from "./logjika.js";

const form = document.querySelector("#budget-form");
const message = document.querySelector("#message");
const results = document.querySelector("#results");
const totalOutput = document.querySelector("#total");
const remainingOutput = document.querySelector("#remaining");
const statusOutput = document.querySelector("#status");

const euro = new Intl.NumberFormat("sq-XK", {
  style: "currency",
  currency: "EUR"
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cmimi = Number(form.elements.price.value);
  const persona = Number(form.elements.people.value);
  const buxheti = Number(form.elements.budget.value);
  const rezultat = llogarit(cmimi, persona, buxheti);

  if (!rezultat.ok) {
    results.hidden = true;
    message.textContent = rezultat.error;
    message.className = "message error";
    return;
  }

  totalOutput.textContent = euro.format(rezultat.total);
  remainingOutput.textContent = euro.format(rezultat.mbetja);
  statusOutput.textContent = rezultat.brenda ? "Brenda buxhetit" : "Mbi buxhet";
  results.hidden = false;
  message.textContent = rezultat.brenda
    ? "Plani përshtatet me buxhetin."
    : "Kostoja e planit e tejkalon buxhetin.";
  message.className = rezultat.brenda ? "message success" : "message warning";
});
