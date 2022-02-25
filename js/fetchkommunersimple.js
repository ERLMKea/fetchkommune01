const out = function (str) {
  console.log(str);
}

out('vi er igang med fetch kommuner');

const kommuneUrl = 'https://api.dataforsyningen.dk/kommuner';

function getAllKommuner() {
  out("get all kommuner kaldt");
  //call fetch, when fetch returns, call then()
  return fetch(kommuneUrl).then(response => response.json());
}

function callGetAllKommuner() {
  const promise = getAllKommuner();
  out(promise);
}

async function showAllKommuner() {
  out("show allkommuner");
  const kommuneList = await getAllKommuner();
  kommuneList.forEach((kommune, index) => {
    out(kommune.navn + "ix=" + index);
  })
}

//callGetAllKommuner();
showAllKommuner();


out("vi er færdige her");


