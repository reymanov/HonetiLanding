function ShowLoginForm() {
  let loginPopup = document.querySelector("#loginPopup");
  let registerPopup = document.querySelector("#registerPopup");

  loginPopup.style.display = "block";
  registerPopup.style.display = "none";
}

function ShowRegisterForm() {
  let loginPopup = document.querySelector("#loginPopup");
  let registerPopup = document.querySelector("#registerPopup");

  loginPopup.style.display = "none";
  registerPopup.style.display = "block";
}

function HideAllForms() {
  let loginPopup = document.querySelector("#loginPopup");
  let registerPopup = document.querySelector("#registerPopup");

  loginPopup.style.display = "none";
  registerPopup.style.display = "none";
}

function setLog() {
  let url = window.location.href;

  if (url.includes("#login")) {
    return null;
  } else if (url.includes("#register")) {
    let newUrl = url.slice(0, -9) + "#login";
    window.location.href = newUrl;
    ShowLoginForm();
  } else {
    let newUrl = url + "#login";
    window.location.href = newUrl;
    ShowLoginForm();
  }
}

function setReg() {
  let url = window.location.href;

  if (url.includes("#register")) {
    return null;
  } else if (url.includes("#login")) {
    let newUrl = url.slice(0, -6) + "#register";
    window.location.href = newUrl;
    ShowRegisterForm();
  } else {
    let newUrl = url + "#register";
    window.location.href = newUrl;
    ShowRegisterForm();
  }
}

window.onhashchange = function () {
  let url = window.location.href;

  if (url.includes("#login")) {
    ShowLoginForm();
  } else if (url.includes("register")) {
    ShowRegisterForm();
  } else {
    HideAllForms();
  }
};
