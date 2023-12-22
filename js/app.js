import dictionary from "./data.js";
let translatedPlace = document.getElementById("translatePlace");
// we got input's value where in HTML in txt-field

function gettingValue(isChangeable = false, setterValue = "") {
  let inputValue = document.getElementById("title");
  if (isChangeable) {
    document.getElementsByTagName("input")[0].value = setterValue;
    return inputValue.value;
  }
  return inputValue.value;
}
document.getElementById("submit").onclick = () => {
  if (validation(gettingValue())) {
    proccesingUI();
    gettingValue(true, "");
  } else {
    alert("write a text please");
    gettingValue(true, "");
  }
};

document.getElementsByTagName("input")[0].onkeydown = (e) => {
  if (e.key.toLowerCase() === "enter") {
    if (validation(gettingValue())) {
      proccesingUI();
      gettingValue(true, "");
    } else {
      alert("write a text please");
      gettingValue(true, "");
    }
  }
};

function validation(value) {
  console.log(value);
  return (
    value &&
    typeof value === "string" &&
    value.length > 0 &&
    isNaN(Number(value))
  );
}

function searchElement(array, searchItem) {
  let res = [];

  array.forEach((item) => {
    if (item.includes(searchItem)) {
      res.push({
        tm: item.split(" - ")[0],
        ru: item.split(" - ")[1].split(";"),
      });
    }
  });
  return res;
}

function proccesingUI() {
  let grandParent = document.getElementById("translatePlace");
  let container = document.getElementById("sozluk");
  grandParent.remove();
  grandParent = document.createElement("div");
  grandParent.className = "translatePlace";
  grandParent.id = "translatePlace";

  container.append(grandParent);
  let preparedWords = dictionary.split("\n");

  let filtered = searchElement(preparedWords, gettingValue());

  console.log(filtered);
  filtered.forEach((item) => {
    let parent = document.createElement("div");
    let h3 = document.createElement("h3");
    let list = document.createElement("ul");
    h3.innerText = item.tm;
    parent.append(h3);

    item.ru.forEach((item1) => {
      let li = document.createElement("li");
      li.innerText = item1;
      list.append(li);
    });

    parent.append(list);
    grandParent.append(parent);
  });
}
