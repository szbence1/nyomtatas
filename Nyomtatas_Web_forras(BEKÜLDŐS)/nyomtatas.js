let magassaga = document.querySelector("#magassag");
//Űrlapadatok
let szelessege = document.querySelector("#szelesseg");

function kalkulal() {
  let magassag = Number(magassaga.value);
  let szelesseg = Number(szelessege.value);
  console.log(magassag);
  console.log(szelesseg);

  const papir = document.getElementById("papirtipus").value;
  //Számítások
  let terulet = Math.round((szelesseg * magassag) / 10000);
  let koltseg = document.querySelector("#koltseg");
  koltseg.innerText = terulet * papir;
  //Megjelenítés

  document.getElementById("valasz").style.visibility = "visible";
}
