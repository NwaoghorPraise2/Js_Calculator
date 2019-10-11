document.getElementById("result").value = "0"; 

document.getElementById("clear").addEventListener("click", clear);


 function clear () {
  document.getElementById("result").value = "0";
}

 getDigit = (value) => {
  if (document.getElementById("result").value == "0") {
    document.getElementById("result").value = "";
  }
  document.getElementById("result").value += value;
};


 function calculate() {
  try {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (e) {
    document.getElementById("result").value= "Error";
  }
}


//work on function for the c button....