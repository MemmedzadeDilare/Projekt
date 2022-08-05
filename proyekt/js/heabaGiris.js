$(document).ready(function () {
  var yoxla = false;

  $("#istifadeciadi").blur(function () {
    if ($("#istifadeciadi").val() != "") {
      $("#istifadeciadi").removeClass("is-invalid")
      $("#istifadeciadi").addClass("is-valid")
      $("#pname").text("Düzgündür");
    }

  })
  $("#pass").blur(function () {
    if ($("#pass").val() != "") {
      $("#pass").removeClass("is-invalid")
      $("#pass").addClass("is-valid")
      $("#ppass").text("Düzgündür");
    }
  });

  $("#hesabagiris").submit(function (e) {
    e.preventDefault();
    if ($("#istifadeciadi").val() == "") {
      $("#istifadeciadi").addClass("is-invalid")
      $("#pname").text("Boş qoymayin");
    }
    if ($("#pass").val() == "") {
      $("#pass").addClass("is-invalid")
      $("#ppass").text("Boş qoymayin");
    }

    //localSrorageden yoxlamaq
    var istifadeAdi = $("#istifadeciadi").val();
    var sifre = $("#pass").val();
    let arr = JSON.parse( localStorage.getItem("user"));
    for (var i = 0; i <= arr.length; i++) {
      if (istifadeAdi == arr[i].istifadeciAdi && sifre == arr[i].sifre) {
        localStorage.setItem("current", arr[i].istifadeciAdi);
        yoxla = true;
        window.location.assign("giris-index.html");
      }else{
        // alert("bele istifadeci yoxdur");
        // break;
      }
    }
  })


})