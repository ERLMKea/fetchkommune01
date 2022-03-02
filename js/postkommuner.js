out("vi er i post kommuner");

let body = {};

let region = {
  "countyCode": "0265",
  "name": "Roskilde yyy",
  "href": "http://localhost:8080/county/0265"
}

const postKommuneRequest = {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: body
}

const pbPostKommuner = document.getElementById("pbPostKommuner");
const postKommuneUrl = "http://localhost:8080/county";

function postAllKommuner(bth) {
  out("post alle kommuner");
  region = JSON.stringify(region);
  out(region);
  postKommuneRequest.body = region;
  fetch(postKommuneUrl, postKommuneRequest).catch((error) => out(error));

}

pbPostKommuner.addEventListener('click',postAllKommuner);




