function imageToBase(b) {
    var file = b.files[0];
    var reader = new FileReader();
    reader.onload = function () { localStorage.setItem('img', reader.result) }
    reader.readAsDataURL(file);
}

$(document).ready(function () {

    $(".newkomp").click(function () {
        $("#save-computer-modal").removeClass("d-none");
    });

    $("#close-button").click(function () {
        $("#save-computer-modal").addClass("d-none");
    });

    var kompArr;
    var yoxla = false;
    if (localStorage.getItem(`komp`)) {
        kompArr = JSON.parse(localStorage.getItem(`komp`))
    } else
        kompArr = [];

    $("#saveBtn").click(function () {
            let img = localStorage.getItem('img');
            var obj = {
                category: $("#category").val(),
                name: $("#name").val(),
                price: $("#price").val(),
                telefon: $("#phone").val(),
                tesvir: $("#tesvir").val(),
                yoxla: $("#yoxla").val(),
                img: img,
                ram: $("#ram").val(),
                cpu: $("#cpu").val(),
                DaimiYaddas: $("#gb").val(),
                yaddasTipi: $("#yaddas").val(),
                os: $("#os").val(),
                videoCard: $("#video-card").val(),
            }
            kompArr.push(obj);
            let json = JSON.stringify(kompArr);
            localStorage.setItem(`komp`, json);
    

    });


if(localStorage.getItem(`komp`)){
    var js = JSON.parse(localStorage.getItem(`komp`));
    for (var i = 0; i < js.length; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = i + 1;
        var td2 = document.createElement("td");
        td2.innerText = js[i].category;
        var td3 = document.createElement("td");
        var image = document.createElement("img");
        image.setAttribute("src", localStorage.getItem(`img`));
        var td4 = document.createElement("td");
        td4.innerText = js[i].price;
        var td5 = document.createElement("td");
        var button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-warning");
        button.classList.add("sil");
        button.innerText = "Sil";
        button.setAttribute('sil_id', i);
        var button2 = document.createElement("button");
        button2.innerText = "Redakte Et";
        button2.classList.add("btn");
        button2.classList.add("btn-primary");
       button2.setAttribute('id',i);
       button2.classList.add("redakte");
        td5.appendChild(button);
        td5.appendChild(button2);
        td3.appendChild(image);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        $('#table').append(tr);
    }
}

    $(".redakte").click(function () {
        var attr=$(this).attr('id');
        var js = JSON.parse(localStorage.getItem(`komp`));
        $("#save-computer-modal").removeClass("d-none");
            $("#name").val( js[attr].name);
            $("#price").val( js[attr].price);
            $("#phone").val(js[attr].telefon);
            $("#tesvir").val(js[attr].tesvir);
            $("#yoxla").val(js[attr].yoxla);
            $("#ram").val(js[attr].ram);
            $("#cpu").val(js[attr].cpu);
            $("#gb").val(js[attr].DaimiYaddas);
            $("#yaddas").val(js[attr].yaddasTipi);
            $("#os").val(js[attr].os); 
            $("#video-card").val( js[attr].videoCard);
    });

    $(".sil").click(function(){

        if (confirm("Eminsen?")) {
           var js=JSON.parse(localStorage.getItem('komp'));
           var attr=$(this).attr('sil_id');
           const arr= js.splice(attr,1);
           localStorage.setItem('komp',JSON.stringify(js))

        };
        window.location.reload();
 

    })
});