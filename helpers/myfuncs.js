// Sünnikuupäeva format dd.mm.yyyy
function convertDate(strDate) {
  let dateParts = strDate.split("/"); // tükeldatakse kriipsu kohalt
  let day = dateParts[1] <= 9 ? "0" + dateParts[1] : dateParts[1];
  let month = dateParts[0] <= 9 ? "0" + dateParts[0] : dateParts[0];
  let year = dateParts[2];
    return day + "." + month + "." + year;
}

// Eposti aadressi loomine
function emailCreation(fname, lname, company) {
  let firstN = fname.toLowerCase();
  let lastN = lname.toLowerCase();
  if (company.length > 0) {
    let cmpny = company.split(" ");
    return firstN + "." + lastN + "@" + cmpny[0].toLowerCase() + ".com";
  } else {
    return
  }
}

// Kontroll, kas konkreetsel isikul on kõik esialgsed andmed väljadel olemas
function allData(jsondata, i) {
  this.jsondata = jsondata;
  if (jsondata.objects[i].ID != "" &&
    jsondata.objects[i].Firstname != "" &&
    jsondata.objects[i].Lastname != "" &&
    jsondata.objects[i].Gender != "" &&
    jsondata.objects[i].Birthdate != "" &&
    jsondata.objects[i].Country != "" &&
    jsondata.objects[i].Company != "" &&
    jsondata.objects[i].Color != "") {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  convertDate: convertDate,
  emailCreation: emailCreation,
  allData: allData
}
