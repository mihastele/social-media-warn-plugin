/* global $ */
// alert("Warning: You are visiting a social media site!");



let modal = document.createElement("div");
modal.id = "modal";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.5)";
modal.style.zIndex = "1000";
modal.style.display = "flex";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";


let modalContent = document.createElement("div");
modalContent.style.backgroundColor = "#fff";
modalContent.style.padding = "20px";
modalContent.style.borderRadius = "5px";
modalContent.style.width = "500px";
modalContent.style.height = "300px";
modalContent.style.display = "flex";
modalContent.style.flexDirection = "column";
modalContent.style.justifyContent = "center";
modalContent.style.alignItems = "center";

let modalHeader = document.createElement("h1");
modalHeader.innerText = "Warning: You are visiting a social media site!";
modalHeader.style.margin = "0";
modalHeader.style.padding = "0";
modalHeader.style.color = "#000";

let modalBody = document.createElement("p");
modalBody.innerText = "You are about to visit a social media site. Are you sure you want to continue?";
modalBody.style.margin = "0";
modalBody.style.padding = "0";
modalBody.style.color = "#000";

let modalFooter = document.createElement("div");
modalFooter.style.display = "flex";
modalFooter.style.justifyContent = "space-around";
modalFooter.style.width = "100%";
modalFooter.style.marginTop = "20px";

let yesButton = document.createElement("button");
yesButton.innerText = "Destroy";
yesButton.style.padding = "10px 20px";
yesButton.style.borderRadius = "5px";
yesButton.style.border = "none";
yesButton.style.backgroundColor = "#4CAF50";
yesButton.style.color = "#fff";
yesButton.style.cursor = "pointer";

let noButton = document.createElement("button");
noButton.innerText = "Continue";
noButton.style.padding = "10px 20px";
noButton.style.borderRadius = "5px";
noButton.style.border = "none";
noButton.style.backgroundColor = "#f44336";
noButton.style.color = "#fff";
noButton.style.cursor = "pointer";

// add image DOM element
let image = document.createElement("img");

// let userAgentString = navigator.userAgent;
// // Detect Chrome
// let chromeAgent = userAgentString.indexOf("Chrome") > -1;
//
// // Detect Firefox
// let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
//
// // Load the appropriate image
// if (chromeAgent) {
//     // Load the Chrome image
//     image.src = chrome.extension.getURL("images/chrome.png");
// } else if (firefoxAgent) {
//     // Load the Firefox image
//     image.src = chrome.extension.getURL("images/firefox.png");
// } else {
//     // Load the default image
// }
image.src = chrome.extension.getURL("doge.jpg");
image.style.width = "300px";
image.style.height = "300px";
image.style.marginBottom = "20px";



// modalFooter.appendChild(yesButton);
// modalFooter.appendChild(noButton);
modalBody.appendChild(image);
modalContent.appendChild(modalHeader);
modalContent.appendChild(modalBody);
modalContent.appendChild(modalFooter);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// noButton.onclick = function() {
//    $("#modal").hide();
// }

// unfortunately content block policy blocks running scripts, so we cannot make fancy buttone :P

$("#modal").show();