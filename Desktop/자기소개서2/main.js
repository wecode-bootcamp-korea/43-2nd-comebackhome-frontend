const options = document.querySelectorAll(".option p");
const opp = document.getElementById("계기");
const infor = document.getElementById("정보");
const resons = document.getElementById("이유");

let toggle = 0;

options.forEach((op) => {
  op.addEventListener("click", (e) => {
    const id = e.currentTarget.id;
    if (id == "opp" && toggle == 0) {
      opp.style.display = "block";
      infor.style.display = "none";
      resons.style.display = "none";
    } else if (id == "reson" && toggle == 0) {
      infor.style.display = "none";
      opp.style.display = "none";
      resons.style.display = "block";
    } else if (id == "information" && toggle == 0) {
      infor.style.display = "block";
      opp.style.display = "none";
      resons.style.display = "none";
    } else {
      infor.style.display = "none";
      opp.style.display = "none";
      resons.style.display = "none";
      toggle = 0;
    }
    console.log(toggle);
  });
});
console.log(toggle);
