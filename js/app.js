import dictionary from "./data.js";
let translatedPlace = document.getElementById("translatePlace");
// we got input's value where in HTML in txt-field

document.getElementById("submit").onclick = () => {
  let inputValue = document.getElementById("title").value;

  if (validation(inputValue)) {
    let preparedWords = dictionary.split("\n");
    let res = [];

    preparedWords.forEach((item) => {
      if (item.includes(inputValue)) {
        res.push({
          tm: item.split(" - ")[0],
          ru: item.split(" - ")[1].split(";"),
        });
      }
      return res;
    });

    console.log(getFields(res, "tm"));
    console.log(getFields(res, "ru").flat(100));
    console.log(myCreateElement(getFields(res, "tm"), getFields(res, "ru")));
  } else {
    alert("write a TEXT PLEASE");
  }
};

function validation(value) {
  return (
    value &&
    typeof value === "string" &&
    value.length > 0 &&
    isNaN(Number(value))
  );
}

function myCreateElement(valueTM, valueRU) {
  let getplace = document.getElementById("translatePlace"),
    ul,
    h3,
    li;
  for (let c = 0; c < valueTM.length; c++) {
    ul = document.createElement("ul");
    getplace.appendChild(ul);

    for (let i = 0; i < valueTM.length; i++) {
      h3 = document.createElement("h3");
      h3.innerHTML = valueTM[i];
      ul.appendChild(h3);

      for (let j = 0; j < valueRU.length; j++) {
        li = document.createElement("li");
        li.innerHTML = valueRU[j];
        ul.appendChild(li);
      }
    }
  }
}
function getFields(input, field) {
  var output = [];
  for (var i = 0; i < input.length; ++i) output.push(input[i][field]);
  return output;
}

// console.log(searchElement(dictionary.split("\n"), "salam"));
