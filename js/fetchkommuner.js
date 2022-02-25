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

function fillKommuner() {
  //kommuneMap.forEach()
  for (const komKey of kommuneMap.keys()) {
    const el = document.createElement("option");
    el.textContent = komKey;
    el.value = kommuneMap.get(komKey); //important value follows the key.
    ddKommune.appendChild(el);
  }
}


function inputChanged(key) {
  const komName = inp1.value;
  out(komName);
  if (komName) {
    const komObj = kommuneMap.get(komName);
    if (komObj) {
      let aTag = document.createElement("a");
      aTag.setAttribute('href', komObj.href);
      aTag.innerText = komName;
      divTag.appendChild(aTag);
      const brTag = document.createElement('br');
      divTag.appendChild(brTag);
    }
  }
}

//callGetAllKommuner();
showAllKommuner();
showKommuneMap();

const pbGetKommuner = document.getElementById('pbGetKommune');
const pbShowKommuneMap = document.getElementById('pbShowKommuneMap');
const pbFillDropDown = document.getElementById('pbFillDropDown');
const ddKommune = document.getElementById('ddKommuner');

//dette bruges til at danne a tags
const inp1 = document.getElementById('inp1');
const divTag = document.getElementById('divKom');

//add event listeners
pbGetKommuner.addEventListener('click', showAllKommuner);
pbShowKommuneMap.addEventListener('click', showKommuneMap);
pbFillDropDown.addEventListener('click', fillKommuner);
inp1.addEventListener('change', inputChanged);

out("vi er færdige her");

