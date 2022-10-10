var uns = [];
var myApps = [];
var Announces = localStorage.getItem("ANNO");
var latestAnn = "8/17/2022";
if (Announces !== latestAnn) {
  alert("new announcement click the icon at the top right for more info");
  localStorage.setItem("ANNO", latestAnn);
}

if (localStorage.getItem("MYAPPS") !== null) {
  myApps = JSON.parse(localStorage.getItem("MYAPPS"));
  var g = document.getElementById("games");
  for (let i = 0; i < myApps.length; i++) {
    if (myApps[i] !== "") {
      g.innerHTML +=
        `<button class="app" onclick='window.open(unPref+VER+unAf + "` +
        myApps[i][0] +
        `","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1000,height=500");'>` +
        myApps[i][1] +
        `</button>`;
    }
  }
}

function AddApp() {
  var n = prompt("app name");
  var u = prompt("unblocker string ex: /web/_aHR0cDovL3NsaXRoZXIuaW8=_/");
  myApps.push([u, n]);
  localStorage.setItem("MYAPPS", JSON.stringify(myApps));
}

if (localStorage.getItem("UNBLOCKERS") !== null) {
  uns = JSON.parse(localStorage.getItem("UNBLOCKERS"));
  for (let i = 0; i < uns.length; i++) {
    uns[i].push("");
    document.getElementById("Ver").innerHTML +=
      `
    <option value='["` +
      uns[i][0] +
      `","` +
      uns[i][1] +
      `","` +
      uns[i][2] +
      `"]'>` +
      uns[i][0] +
      uns[i][1] +
      uns[i][2] +
      `</option>
    `;
    console.log(i);
  }
}

function AddUn() {
  var a = prompt("url to unblocker (only works with alloy proxy)");
  var data = a.split(".");
  for (let i = 1; i < data.length; i++) {
    data[i] = "." + data[i];
  }
  uns.push(data);

  localStorage.setItem("UNBLOCKERS", JSON.stringify(uns));
}
function openANN() {
  document.getElementById("ANN").style.height = "100%";
}
function closeANN() {
  document.getElementById("ANN").style.height = "0%";
}

var aCode = localStorage.getItem("ACODE");
