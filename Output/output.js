function downloadPDF() {
    var pdf = new jsPDF('p', 'pt', 'a4');
    $("#cmd").attr('hidden', 'true')
    pdf.addHTML($("#content"), 0, -20, { allowTaint: true, useCORS: true, pagesplit: false }, function () {
    pdf.save('report.pdf');
    $("#cmd").removeAttr('hidden', 'true')
  });
}

const details = fetch("http://localhost:3000/users", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    const user = data.find((el) => el.id == localStorage.getItem("id"));
    console.log(user);
    const name=user.name;
    const phn=user.mob;
    const details = JSON.parse(localStorage.getItem("details"));
    const gender = details.gender;
    const age = details.age[0];
    const age_f = details.age[1];
    const totch = details.totch[0];
    const totch_f = details.totch[1];
    const smk = details.smoker[0];
    const smk_f = details.smoker[1];
    const hdlch = details.hdlch[0];
    const hdlch_f = details.hdlch[1];
    const bpt = details.bp_type;
    const bpv = details.bp_value[0];
    const bpv_f = details.bp_value[1];
    const points = details.point;
    var percentage;

    function getColor(value) {
      //value from 0 to 1
      var hue = ((1 - value) * 120).toString(10);
      return ["hsl(", hue, ",100%,50%)"].join("");
    }

    let bp = "";
    let smoke = "";
    if (bpt == "ubp") {
      bp = "Untreated";
    } else {
      bp = "Treated";
    }
    if (smk == "smk_yes") {
      smoke = "Yes";
    } else {
      smoke = "No";
    }

    document.getElementById("name").innerText = name;
    document.getElementById("mob").innerText=phn;
    document.getElementById("gender").innerText = gender;
    document.getElementById("age").innerText = age;

    document.getElementById("totch").innerText = totch;
    document.getElementById("hdlch").innerText = hdlch;
    document.getElementById("bpt").innerText = bp;
    document.getElementById("bpv").innerText = bpv;
    document.getElementById("smk").innerText = smoke;

    let smk_m;
    let hdlch_m;
    let bp_m;
    let totch_m;
    let age_totch = Math.floor(age / 10);
    let age_m;
    let points_m;
    if (gender == "female") {
      if (smk == "smk_yes") {
        smk_m = smk_f / 9.0;
      } else {
        smk_m = 0;
      }
      age_m = (age_f + 8) / 24.0;
      hdlch_m = (hdlch_f + 2) / 4.0;
      if (bpt == "ubp") {
        bp_m = (bpv_f + 1) / 5.0;
      } else {
        bp_m = (bpv_f + 1) / 7.0;
      }
      if (age_totch == 2 || age_totch == 3) {
        totch_m = (totch_f + 1) / 14.0;
      } else if (age_totch == 4) {
        totch_m = (totch_f + 1) / 11.0;
      } else if (age_totch == 5) {
        totch_m = (totch_f + 1) / 8.0;
      } else if (age_totch == 6) {
        totch_m = (totch_f + 1) / 5.0;
      } else if (age_totch == 7) {
        totch_m = (totch_f + 1) / 3.0;
      }

      ratef(points);
      function ratef(points) {
        if (points < 9) {
          percentage = "<1%";
          points_m = 0.02;
        } else if (points <= 12) {
          percentage = "1%";
          points_m = 0.03;
        } else if (points <= 14) {
          percentage = "2%";
          points_m = 0.06;
        } else if (points === 15) {
          percentage = "3%";
          points_m = 0.1;
        } else if (points === 16) {
          percentage = "4%";
          points_m = 0.15;
        } else if (points === 17) {
          percentage = "5%";
          points_m = 0.17;
        } else if (points === 18) {
          percentage = "6%";
          points_m = 0.2;
        } else if (points === 19) {
          percentage = "8%";
          points_m = 0.27;
        } else if (points === 20) {
          percentage = "11%";
          points_m = 0.37;
        } else if (points === 21) {
          percentage = "14%";
          points_m = 0.47;
        } else if (points === 22) {
          percentage = "17%";
          points_m = 0.57;
        } else if (points === 23) {
          percentage = "22%";
          points_m = 0.73;
        } else if (points === 24) {
          percentage = "27%";
          points_m = 0.9;
        } else {
          percentage = "Over 30%";
          points_m = 0.95;
        }
      }
      console.log(percentage, points_m);
    } else {
      if (smk == "smk_yes") {
        smk_m = smk_f / 8.0;
      } else {
        smk_m = 0;
      }
      age_m = (age_f + 10) / 23.0;
      hdlch_m = (hdlch_f + 2) / 4.0;
      if (bpt == "ubp") {
        bp_m = (bpv_f + 1) / 3.0;
      } else {
        bp_m = (bpv_f + 1) / 4.0;
      }
      if (age_totch == 2 || age_totch == 3) {
        totch_m = (totch_f + 1) / 12.0;
      } else if (age_totch == 4) {
        totch_m = (totch_f + 1) / 9.0;
      } else if (age_totch == 5) {
        totch_m = (totch_f + 1) / 6.0;
      } else if (age_totch == 6) {
        totch_m = (totch_f + 1) / 4.0;
      } else if (age_totch == 7) {
        totch_m = (totch_f + 1) / 2.0;
      }

      ratem(points);
      function ratem(points) {
        if (points === 0) {
          percentage = "<1%";
          points_m = 0.02;
        } else if (points >= 1 && points <= 4) {
          percentage = "1%";
          points_m = 0.03;
        } else if (points >= 5 && points <= 6) {
          percentage = "2%";
          points_m = 0.06;
        } else if (points === 7) {
          percentage = "3%";
          points_m = 0.1;
        } else if (points === 8) {
          percentage = "4%";
          points_m = 0.13;
        } else if (points === 9) {
          percentage = "5%";
          points_m = 0.17;
        } else if (points === 10) {
          percentage = "6%";
          points_m = 0.2;
        } else if (points === 11) {
          percentage = "8%";
          points_m = 0.27;
        } else if (points === 12) {
          percentage = "10%";
          points_m = 0.33;
        } else if (points === 13) {
          percentage = "12%";
          points_m = 0.4;
        } else if (points === 14) {
          percentage = "16%";
          points_m = 0.53;
        } else if (points === 15) {
          percentage = "20%";
          points_m = 0.67;
        } else if (points === 16) {
          percentage = "25%";
          points_m = 0.83;
        } else {
          percentage = "Over 30%";
          points_m = 0.95;
        }
      }
      console.log(percentage, points_m);
    }

    const smk_c = document.getElementById("smk_f");
    const hdlch_c = document.getElementById("hdlch_f");
    const bp_c = document.getElementById("bpv_f");
    const totch_c = document.getElementById("totch_f");
    const age_c = document.getElementById("age");

    smk_c.addEventListener("mouseover", () => {
      smk_c.style.color = getColor(smk_m);
    });
    hdlch_c.addEventListener("mouseover", () => {
      hdlch_c.style.color = getColor(hdlch_m);
    });
    bp_c.addEventListener("mouseover", () => {
      bp_c.style.color = getColor(bp_m);
    });
    totch_c.addEventListener("mouseover", () => {
      totch_c.style.color = getColor(totch_m);
    });
    age_c.addEventListener("mouseover", () => {
      age_c.style.color = getColor(age_m);
    });
    // document.getElementById("result").innerHTML = percentage;
    // const cir=document.getElementById("meter-1");
    // console.log(points_m*360);
    // cir.setAttribute("stroke-dashoffset",points_m*360)
    // if ((1 - points_m) * 100 < 10) {
    //   cir.setAttribute("stroke-dashoffset","10")
    // } else {
    //   result_c.style.width = (1 - points_m) * 100 + "%";
    // }

    const circularProgress = document.querySelectorAll(".circular-progress");

    Array.from(circularProgress).forEach((progressBar) => {
      const progressValue = progressBar.querySelector(".percentage");
      const innerCircle = progressBar.querySelector(".inner-circle");
      let startValue = 0,
        p = 0,
        // endValue = Number(progressBar.getAttribute("data-percentage")),
        endValue = Number(points_m * 100),
        speed = 100;

      const progress = setInterval(() => {
        p++;
        if (gender == "female") {
          ratef(p);
        } else {
          ratem(p);
        }
        startValue = points_m * 100;
        progressValue.textContent = `${percentage}`;
        progressValue.style.color = `${getColor(points_m)}`;

        innerCircle.style.backgroundColor = `${progressBar.getAttribute(
          "data-inner-circle-color"
        )}`;

        progressBar.style.background = `conic-gradient(${getColor(points_m)} ${
          startValue * 3.6
        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
        console.log(progressBar.style.background);
        if (startValue === endValue) {
          clearInterval(progress);
        }
      }, speed);
    });
  });
