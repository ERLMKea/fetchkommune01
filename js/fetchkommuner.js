const out = function (str) {
  console.log(str);
}

out('vi er igang med fetch kommuner');

const kommuneUrl = 'https://api.dataforsyningen.dk/kommuner';

function getAllKommuner() {
  out("get all kommuner kaldt");
  //call fetch, when fetch returns, call then()
  //response.json er også en async function
  //return fetch(kommuneUrl).then(response => {
  //  out("response obj");
  //  out(response);
  //  response.json();
  //}); //ovenstående returnere ikke noget brugbart
  return fetch(kommuneUrl).then(response => response.json());
}

function callGetAllKommuner() {
  const promise = getAllKommuner();
  out(promise);
}

const kommuneMap = new Map();
async function showAllKommuner() {
  out("show allkommuner");
  const kommuneList = await getAllKommuner();
  out(kommuneList);
  kommuneList.forEach((kommune, index) => {
    out(kommune.navn + "ix=" + index);
    kommuneMap.set(kommune.navn, kommune);
  })
}

function showKommuneMap() {
  for (const komKey of kommuneMap.keys()) {
    out(kommuneMap.get(komKey));
  }
}

//callGetAllKommuner();
showAllKommuner();
showKommuneMap();

const pbGetKommuner = document.getElementById('pbGetKommune');
const pbShowKommuneMap = document.getElementById('pbShowKommuneMap');

out("vi er færdige her");

pbGetKommuner.addEventListener('click', showAllKommuner);
pbShowKommuneMap.addEventListener('click', showKommuneMap);


