$(document).ready(function () {
  $("#ad").keyup(function () {
    if ($("#ad").val() != "") {
      $("#ad").removeClass("is-invalid")
      $("#ad").addClass("is-valid")
      $("#pad").text("Düzgündür");
      $("#pad").removeClass("text-danger");
      $("#pad").addClass("text-success");
    }
  })
  $("#phone").keyup(function () {
    if ($("#phone").val() != "") {
      $("#phone").removeClass("is-invalid")
      $("#phone").addClass("is-valid")
      $("#ptelefon").text("Düzgündür")
      $("#ptelefon").removeClass("text-danger");
      $("#ptelefon").addClass("text-success");
    }
  })
  $("#istifadeciAdi").keyup(function () {
    var nameval = $("#istifadeciAdi").val();
    if (nameval != "") {
      $("#istifadeciAdi").removeClass("is-invalid")
      $("#istifadeciAdi").addClass("is-valid")
      $("#pistifadeciadi").text("Düzgündür")
      $("#pistifadeciadi").removeClass("text-danger");
      $("#pistifadeciadi").addClass("text-success");
    }
    if (nameval.length < 2 || 30 < nameval.length) {
      $("#istifadeciAdi").removeClass("is-valid");
      $("#istifadeciAdi").addClass("is-invalid");
      $("#pistifadeciadi").text("Minimum 2,Maksimum 30 simvol ola biler")
      $("#pistifadeciadi").addClass("text-danger");

    } else if (nameval.length >= 2 && 30 >= nameval.length) {
      $("#istifadeciAdi").removeClass("is-invalid");
      $("#istifadeciAdi").addClass("is-valid");
      $("pistifadeciadi").text("Düzgündür")
      $("#pistifadeciadi").removeClass("text-danger");
      $("#pistifadeciadi").addClass("text-success");
    }
  })
  $("#sifre").keyup(function () {
    var g = $("#sifre").val();
    if (g != "") {
      $("#sifre").removeClass("is-invalid")
      $("#sifre").addClass("is-valid")
      $("#psifre").text("Düzgündür")
      $("#psifre").removeClass("text-danger");
      $("#psifre").addClass("text-success");
    }
    if (g.length < 2 || 30 < g.length) {
      $("#sifre").removeClass("is-valid");
      $("#sifre").addClass("is-invalid");
      $("#psifre").text("Minimum 2,Maksimum 30 simvol ola biler")
      $("#psifre").addClass("text-danger");

    } else if (g.length >= 2 && 30 >= g.length) {
      $(".signg").addClass("d-none");
      $("#sifre").removeClass("is-invalid");
      $("#sifre").addClass("is-valid");
      $("#psifre").text("Düzgündür")
      $("#psifre").removeClass("text-danger");
      $("#psifre").addClass("text-success");
    }
  })

  //localSrorege elave etmek 
  let usersArr;
  if (localStorage.getItem(`user`)) {
    usersArr = JSON.parse(localStorage.getItem(`user`))
  } else
    usersArr = [];

  var yoxla = false;

  $("#hesabyarat").submit(function (e) {
    e.preventDefault();

    if ($("#ad").val() == "") {
      $("#ad").addClass("is-invalid");
      $("#pad").addClass("text-danger");
      $("#pad").text("Boş qoymayin");
    }
    if ($("#phone").val() == "") {
      $("#phone").addClass("is-invalid");
      $("#ptelefon").addClass("text-danger");
      $("#ptelefon").text("Boş qoymayin");
    }
    if ($("#istifadeciAdi").val() == "") {
      $("#istifadeciAdi").addClass("is-invalid");
      $("#pistifadeciadi").addClass("text-danger");
      $("#pistifadeciadi").text("Boş qoymayın.Minimum 2,Maksimum 30 simvol ola biler")
    }
    if ($("#sifre").val() == "") {
      $("#sifre").addClass("is-invalid");
      $("#psifre").addClass("text-danger");
      $("#psifre").text("Boş qoymayın.Minimum 2,Maksimum 30 simvol ola biler")
    }

    if ($("#ad").val() == "" && $("#phone").val() == "" && $("#istifadeciAdi").val() == "" && $("#sifre").val() == "") {
      $("#ugursuzQeydiyat").removeClass("d-none")
      setTimeout(() => {
        $("#ugurluQeydiyat").addClass("d-none")
      }, 200);

    }
    else if ($("#ad").val() != "" && $("#phone").val() != "" && $("#istifadeciAdi").val() != "" && $("#sifre").val() != "") {
      $("#ugursuzQeydiyat").addClass("d-none")
      $("#ugurluQeydiyat").removeClass("d-none")
      let Obj = {
        ad: $("#ad").val(),
        telefon: $("#phone").val(),
        istifadeciAdi: $("#istifadeciAdi").val(),
        sifre: $("#sifre").val()
      };

      var js = JSON.parse(localStorage.getItem(`user`));
      if (!usersArr.length == 0) {
        for (var i = 0; i <= js.length; i++) {
          if ($("#istifadeciAdi").val() == js[i].istifadeciAdi) {
            alert("Bele istifadeci var");
            yoxla = true;
            break;
          } else {
            yoxla = false;
            break;
          }
        }
      }


      if (yoxla == false) {
        usersArr.push(Obj);
        let Jsontext = JSON.stringify(usersArr);
        localStorage.setItem('user', Jsontext);
        setTimeout(() => {
          window.location.assign("hesabGiris.html")
        }, 500);
      }

    }

  });

});