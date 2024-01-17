const tokken = localStorage.getItem("token");
if(tokken==null){
  window.location.href='../SignIn/signin.html';
}

let extractedWord = [];
$.each($(".radio-btn"), function (key, value) {
  $(this).click(function (e) {
    $(".radio-btn-selected")
      .removeClass("radio-btn-selected")
      .addClass("radio-btn");

    $(this).removeClass("radio-btn").addClass("radio-btn-selected");
    var labelElement = document.querySelector("label.radio-btn-selected");
    var ele = labelElement.textContent;
    console.log(ele);
    if (ele == "Female") {
      extractedWord[0] = "female";
    } else if (ele == "Male") {
      extractedWord[0] = "male";
    } else if (ele == "Untreated") {
      extractedWord[1] = "ubp";
    } else if (ele == "Treated") {
      extractedWord[1] = "tbp";
    } else if (ele == "Yes") {
      extractedWord[2] = "smk_yes";
    } else if (ele == "No") {
      extractedWord[2] = "smk_no";
    }
  });
});

const sbutton = document.getElementById("submit");
const age = document.getElementById("age");
const totch = document.getElementById("tot_ch");
const hdlch = document.getElementById("hdl_ch");
const bpv = document.getElementById("sbp");
const dform = document.getElementById("dform");
let points = 0;

const age_f = {
  4: -7,
  5: -7,
  6: -7,
  7: -3,
  8: 0,
  9: 3,
  10: 6,
  11: 8,
  12: 10,
  13: 12,
  14: 14,
  15: 16,
};
const totch_f2 = {
  3: 0,
  4: 4,
  5: 8,
  6: 11,
  7: 13,
  8: 13,
};
const totch_f3 = {
  3: 0,
  4: 4,
  5: 8,
  6: 11,
  7: 13,
  8: 13,
};
const totch_f4 = {
  3: 0,
  4: 3,
  5: 6,
  6: 8,
  7: 10,
  8: 10,
};
const totch_f5 = {
  3: 0,
  4: 2,
  5: 4,
  6: 5,
  7: 7,
  8: 7,
};
const totch_f6 = {
  3: 0,
  4: 1,
  5: 2,
  6: 3,
  7: 4,
  8: 4,
};
const totch_f7 = {
  3: 0,
  4: 1,
  5: 1,
  6: 2,
  7: 2,
  8: 2,
};
const smk_yes_f = {
  2: 9,
  3: 9,
  4: 7,
  5: 4,
  6: 2,
  7: 1,
};
const hdlch_f = {
  10: -1,
  9: -1,
  8: -1,
  7: -1,
  6: -1,
  5: 0,
  4: 1,
  3: 2,
  2: 2,
};
const ubp_f = {
  9: 0,
  10: 0,
  11: 0,
  12: 1,
  13: 2,
  14: 3,
  15: 3,
  16: 4,
  17: 4,
  18: 4,
  19: 4,
  20: 4,
};
const tbp_f = {
  9: 0,
  10: 0,
  11: 0,
  12: 3,
  13: 4,
  14: 5,
  15: 5,
  16: 6,
  17: 6,
  18: 6,
  19: 6,
  20: 6,
};
const age_m = {
  4: -9,
  5: -9,
  6: -9,
  7: -4,
  8: 0,
  9: 3,
  10: 6,
  11: 8,
  12: 10,
  13: 11,
  14: 12,
  15: 13,
};
const totch_m2 = {
  3: 0,
  4: 4,
  5: 7,
  6: 9,
  7: 11,
  8: 11,
};
const totch_m3 = {
  3: 0,
  4: 4,
  5: 7,
  6: 9,
  7: 11,
  8: 11,
};
const totch_m4 = {
  3: 0,
  4: 3,
  5: 5,
  6: 6,
  7: 8,
  8: 8,
};
const totch_m5 = {
  3: 0,
  4: 2,
  5: 3,
  6: 4,
  7: 5,
  8: 5,
};
const totch_m6 = {
  3: 0,
  4: 1,
  5: 1,
  6: 2,
  7: 3,
  8: 3,
};
const totch_m7 = {
  3: 0,
  4: 0,
  5: 0,
  6: 1,
  7: 1,
  8: 1,
};
const smk_yes_m = {
  2: 8,
  3: 8,
  4: 5,
  5: 3,
  6: 1,
  7: 1,
};
const hdlch_m = {
  10: -1,
  9: -1,
  8: -1,
  7: -1,
  6: -1,
  5: 0,
  4: 1,
  3: 2,
  2: 2,
};
const ubp_m = {
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 1,
  14: 1,
  15: 1,
  16: 2,
  17: 2,
  18: 2,
  19: 2,
  20: 2,
};
const tbp_m = {
  9: 0,
  10: 0,
  11: 0,
  12: 1,
  13: 2,
  14: 2,
  15: 2,
  16: 3,
  17: 3,
  18: 3,
  19: 3,
  20: 3,
};

bpv.onchange = () => {
  console.log(bpv.value < 90 || bpv.value > 200);
  if (bpv.value < 90 || bpv.value > 200) {
    document.getElementById("bp_msg").style.color = "red";
  } else {
    document.getElementById("bp_msg").style.color = "green";
  }
};

age.onchange = () => {
  console.log(age.value < 20 || age.value > 79);
  if (age.value < 20 || age.value > 79) {
    document.getElementById("age_msg").style.color = "red";
  } else {
    document.getElementById("age_msg").style.color = "green";
  }
};

totch.onchange = () => {
  console.log(totch.value < 90 || totch.value > 300);
  if (totch.value < 90 || totch.value > 300) {
    document.getElementById("totch_msg").style.color = "red";
  } else {
    document.getElementById("totch_msg").style.color = "green";
  }
};


hdlch.onchange = () => {
  console.log(hdlch.value < 20 || hdlch.value > 100);
  if (hdlch.value < 20 || hdlch.value > 100) {
    document.getElementById("hdlch_msg").style.color = "red";
  } else {
    document.getElementById("hdlch_msg").style.color = "green";
  }
};

dform.addEventListener("submit", () => {
  console.log(age.value);
  var gender = extractedWord[0];
  var smoker = extractedWord[2];
  var bp = extractedWord[1];
  console.log(
    gender,
    age.value,
    totch.value,
    smoker,
    hdlch.value,
    bpv.value,
    bp
  );

  let g = "";
  let t = "";
  if (gender == "female") {
    g = "f";
  } else {
    g = "m";
  }
  if (bp == "ubp") {
    t = "u";
  } else {
    t = "t";
  }

  var age_fact = Math.floor(age.value / 5);

  var totage_fact = Math.floor(age.value / 10);
  var totch_fact = Math.floor(totch.value / 40);

  var smk_yes_fact = Math.floor(age.value / 10);

  var hdlch_fact = Math.floor(hdlch.value / 10);

  var bp_fact = Math.floor(bpv.value / 10);

  var age_ = eval("age_" + g);
  var totch_ = eval("totch_" + g + totage_fact);
  var smk_yes_ = eval("smk_yes_" + g);
  var hdlch_ = eval("hdlch_" + g);
  var hdlch_ = eval("hdlch_" + g);
  var bp_ = eval(t + "bp_" + g);

  points += age_[age_fact];
  points += totch_[totch_fact];
  if (smoker == "smk_yes") {
    points += smk_yes_[smk_yes_fact];
  }
  points += hdlch_[hdlch_fact];
  points += bp_[bp_fact];

  console.log(points);

  const details = {
    gender: gender,
    age: [age.value, age_[age_fact]],
    totch: [totch.value, totch_[totch_fact]],
    smoker: [smoker, smk_yes_[smk_yes_fact]],
    hdlch: [hdlch.value, hdlch_[hdlch_fact]],
    bp_type: bp,
    bp_value: [bpv.value, bp_[bp_fact]],
    point: points,
    user_id: localStorage.getItem("id"),
  };
  console.log(JSON.stringify(details));
  localStorage.setItem("details", JSON.stringify(details));

  fetch("http://localhost:3000/details", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    // // .then((res) => {
    //   alert("done with posting")
    //   window.location.href="../Output/output.html";
    // // })
    window.open("../Output/output.html");
  points = 0;
});
