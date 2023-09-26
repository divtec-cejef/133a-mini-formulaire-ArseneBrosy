/**
 * @author Arsène Brosy
 * @since 2023.09.26
 */

'use strict';

const body = document.querySelector("body");
const listeBg = body.querySelector("#bg")

// Change l'arrière-plan
body.style.backgroundImage = `url(./img/backgounds/${listeBg.value})`;
listeBg.addEventListener("change", () => {
  body.style.backgroundImage = `url(./img/backgounds/${listeBg.value})`;
});


const formulaire = document.querySelector("form");
const txtPassword = formulaire.querySelector("#password")
const txtPasswordConfirm = formulaire.querySelector("#confirm-password")

formulaire.addEventListener("submit", (e) => {
  // Stopper l'envoi ou annuler événement
  e.preventDefault();

  // Si le mot de passe est plus petit que 3 caractères
  if (txtPassword.value.length < 3) {
    alert("Le mot de passe doit contenir au moins 3 caractères");
    return;
  }

  // Si les mots de passe ne sont pas identiques
  if (txtPassword.value !== txtPasswordConfirm.value) {
    alert("les mots de passe ne correspondent pas");
    return;
  }

  alert("Compte crée avec succès");
  formulaire.submit();
});