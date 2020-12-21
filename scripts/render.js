let loginPopup = document.querySelector("#loginPopup");
let registerPopup = document.querySelector("#registerPopup");

function ShowLoginForm() {
  loginPopup.style.display = "block";
  registerPopup.style.display = "none";
}

function ShowRegisterForm() {
  loginPopup.style.display = "none";
  registerPopup.style.display = "block";
}

function HideAllForms() {
  loginPopup.style.display = "none";
  registerPopup.style.display = "none";
}

function closePopup() {
  let url = window.location.href;

  if (url.includes("#login")) {
    let newUrl = url.slice(0, -6);
    window.location.href = newUrl;
  } else if (url.includes("#register")) {
    let newUrl = url.slice(0, -9);
    window.location.href = newUrl;
  }

  HideAllForms();
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

window.onhashchange = CheckCurrentUrl;

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  CheckCurrentUrl();
}

function CheckCurrentUrl() {
  let url = window.location.href;

  if (url.includes("#login")) {
    ShowLoginForm();
  } else if (url.includes("register")) {
    ShowRegisterForm();
  } else {
    HideAllForms();
  }
}
