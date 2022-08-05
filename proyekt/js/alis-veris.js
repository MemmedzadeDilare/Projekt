$(document).ready(function () {
    var marka = ["asus", "dell", "hp", "lenovo", "acer"];
    var lu = document.querySelector(".row1 .category");
    var input = document.querySelector("#s");
    var stock = document.querySelector(".stock");
    var stock_div = document.querySelectorAll(".stock .col-3");
    let mehsul;
    var acer = [{
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "4414 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "2331 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "432 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "42421 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "4123421 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "4343 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "6566 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "6565 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "432 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    }, {
        ad: "acer",
        tesvir: "tesvir",
        qiymet: "2780 AZN",
        telefon: "055-867-3567",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "Intel Iris Xe Graphics"
    },
    ];
    var asus = [{
        ad: "asus",
        tesvir: "Asus1",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus2",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus3",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus4",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus5",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus6",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus7",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus8",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus9",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus10",
        qiymet: "76757 AZN",
        telefon: "055-867-74576",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    }

    ];
    var dell = [
        {
            ad: "dell",
            tesvir: "Dell 1 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "dell",
            tesvir: "Dell2 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "dell",
            tesvir: "Dell3 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "dell",
            tesvir: "Dell3 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "dell",
            tesvir: "Dell4 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "dell",
            tesvir: "Dell5 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "dell",
            tesvir: "Dell6 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "dell",
            tesvir: "Dell7 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "dell",
            tesvir: "Dell8 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "dell",
            tesvir: "Dell9 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "dell",
            tesvir: "Dell10 decs",
            qiymet: "75722 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }
    ];
    var lenovo = [
        {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2785 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 11",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2785 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 11",
            GPU: "Intel Iris Xe Graphics"
        },
        {
            ad: "lenovo",
            tesvir: "tesvir",
            qiymet: "2785 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 11",
            GPU: "Intel Iris Xe Graphics"
        }
    ];
    var hp = [
        {
            ad: "hp",
            tesvir: "tesvir1",
            qiymet: "2000AZN",
            telefon: "055-860-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "hp",
            tesvir: "tesvir2",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "hp",
            tesvir: "tesvir3",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "hp",
            tesvir: "tesvir4",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "hp",
            tesvir: "tesvir5",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "hp",
            tesvir: "tesvir6",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "hp",
            tesvir: "tesvir7",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "hp",
            tesvir: "tesvir8",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "hp",
            tesvir: "tesvir9",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }, {
            ad: "hp",
            tesvir: "tesvir10",
            qiymet: "2780 AZN",
            telefon: "055-867-3567",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "Intel Iris Xe Graphics"
        }
    ];
    let content;
    function kompadd(cat) {
        var js = JSON.parse(localStorage.getItem(`komp`));
        for (var i = 0; i < js.length; i++) {
            if (cat.toLowerCase() == js[i].category.toLowerCase()) {
                // content = this.innerText;
                if (content == "acer") {
                    mehsul = acer;
                } else if (content == "asus") {
                    mehsul = asus;
                } else if (content == "dell") {
                    mehsul = dell;
                } else if (content == "hp") {
                    mehsul = hp;
                } else if (content == "lenovo") {
                    mehsul = lenovo;
                }
                var col3 = document.createElement("div");
                col3.classList.add("col-3");
                var button = document.createElement("button")
                button.innerHTML = "etrafli";
                button.setAttribute('id', i);
                button.classList.add("etrafli");
                var stockItems = document.createElement("div");
                stockItems.classList.add("stock-items");
                var img = document.createElement("img");
                img.src = `img/${content}.jpg`;
                var p = document.createElement("p");
                var p2 = document.createElement("p");
                var p3 = document.createElement("p");
                var p4 = document.createElement("p");
                var p5 = document.createElement("p");
                p.innerHTML = `Adi:${js[i].category}`;
                p2.innerHTML = `Tesviri:${js[i].tesvir}`;
                p3.innerHTML = `Qiymet::${js[i].price}`;
                p4.innerHTML = `Yeni::${js[i].yoxla}`;
                p5.innerHTML = `Telefon::${js[i].telefon}`;
                stockItems.appendChild(img);
                stockItems.appendChild(p);
                stockItems.appendChild(p2);
                stockItems.appendChild(p3);
                stockItems.appendChild(p4);
                stockItems.appendChild(p5);
                stockItems.appendChild(button)
                col3.appendChild(stockItems);
                stock.appendChild(col3);

            }
        }
    }
    for (var i = 0; i < marka.length; i++) {
        var li = document.createElement("li");
        li.classList.add("item");
        li.innerText = marka[i];
        lu.appendChild(li);
        var item = document.querySelectorAll(".category .item");
        item[i].addEventListener("click", function () {
            $(".stock").empty();

            content = String(this.innerText);
            content = content.toLowerCase();
            if (content == "acer") {
                mehsul = acer;
            } else if (content == "asus") {
                mehsul = asus;
            } else if (content == "dell") {
                mehsul = dell;
            } else if (content == "hp") {
                mehsul = hp;
            } else if (content == "lenovo") {
                mehsul = lenovo;
            }
            $(".sp").removeClass("d-none")
            kompadd(this.innerHTML);
            setTimeout(() => {
                $(".sp").addClass("d-none");

                for (var i = 0; i < 9; i++) {
                    var col3 = document.createElement("div");
                    col3.classList.add("col-3");
                    var button = document.createElement("button")
                    button.innerHTML = "etrafli";
                    button.setAttribute('id', i);
                    button.classList.add("etrafli");
                    var stockItems = document.createElement("div");
                    stockItems.classList.add("stock-items");
                    var img = document.createElement("img");
                    img.src = `img/${content}.jpg`;
                    var p = document.createElement("p");
                    var p2 = document.createElement("p");
                    var p3 = document.createElement("p");
                    var p4 = document.createElement("p");
                    var p5 = document.createElement("p");
                    p.innerHTML = `Adi:${mehsul[i].ad}`;
                    p2.innerHTML = `Tesviri:${mehsul[i].tesvir}`;
                    p3.innerHTML = `Qiymet:${mehsul[i].qiymet}`;
                    p4.innerHTML = `Yeni:${mehsul[i].yeni}`;
                    p5.innerHTML = `Telefon:${mehsul[i].telefon}`;
                    stockItems.appendChild(img);
                    stockItems.appendChild(p);
                    stockItems.appendChild(p2);
                    stockItems.appendChild(p3);
                    stockItems.appendChild(p4);
                    stockItems.appendChild(p5);
                    stockItems.appendChild(button)
                    col3.appendChild(stockItems);
                    stock.appendChild(col3);

                }

                $(".etrafli").click(function () {
                    var attr = $(this).attr('id');
                    $(".popup").removeClass("d-none");
                    $("#img").attr('src', `img/${content}.jpg`);
                    $("#ad").text(mehsul[attr].ad);
                    $("#tesvir").text(mehsul[attr].tesvir);
                    $("#qiymet").text(mehsul[attr].qiymet);
                    $("#telfon").text(mehsul[attr].telefon);
                    $("#yeni").text(mehsul[attr].yeni);
                    $("#eyaddas").text(mehsul[attr].emeliyaddas);
                    $("#cpu").text(mehsul[attr].CPU);
                    $("#dyaddas").text(mehsul[attr].daimiyaddas);
                    $("#dtip").text(mehsul[attr].daimitipi);
                    $("#emeliyyat").text(mehsul[attr].emeliyyat);
                    $("#gpu").text(mehsul[attr].GPU);

                })

            }, 500);


        })


    }
    for (var i = 0; i < 9; i++) {
        var col3 = document.createElement("div");
        col3.classList.add("col-3");
        var button = document.createElement("button")
        button.innerHTML = "etrafli";
        button.setAttribute('id', i);
        // button.classList.add(`id${i}`);
        button.classList.add("etrafli");
        var stockItems = document.createElement("div");
        stockItems.classList.add("stock-items");
        var img = document.createElement("img");
        img.src = `img/acer.jpg`;
        var p = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        p.innerHTML = `Adi:${acer[i].ad}`;
        p2.innerHTML = `Tesviri:${acer[i].tesvir}`;
        p3.innerHTML = `Qiymet::${acer[i].qiymet}`;
        p4.innerHTML = `Yeni::${acer[i].yeni}`;
        p5.innerHTML = `Telefon::${acer[i].telefon}`;
        stockItems.appendChild(img);
        stockItems.appendChild(p);
        stockItems.appendChild(p2);
        stockItems.appendChild(p3);
        stockItems.appendChild(p4);
        stockItems.appendChild(p5);
        stockItems.appendChild(button)
        col3.appendChild(stockItems);
        stock.appendChild(col3);

    }
    //redakte

    $(".etrafli").click(function () {
        var attr = $(this).attr('id');
        $("#img").attr('src', "img/acer.jpg");
        $(".popup").removeClass("d-none");
        $("#ad").text(acer[attr].ad);
        $("#tesvir").text(acer[attr].tesvir);
        $("#qiymet").text(acer[attr].qiymet);
        $("#telfon").text(acer[attr].telefon);
        $("#yeni").text(acer[attr].yeni);
        $("#eyaddas").text(acer[attr].emeliyaddas);
        $("#cpu").text(acer[attr].CPU);
        $("#dyaddas").text(acer[attr].daimiyaddas);
        $("#dtip").text(acer[attr].daimitipi);
        $("#emeliyyat").text(acer[attr].emeliyyat);
        $("#gpu").text(acer[attr].GPU);

    });

    $("#exit").click(function () {
        $(".popup").addClass("d-none");
    })

    input.addEventListener("keyup", function (e) {
        if (e.keyCode > 64 && e.keyCode < 91) {

            var item = document.querySelectorAll(".category .item");
            for (var i = 0; i < item.length; i++) {
                item[i].remove();
            }
            for (var i = 0; i < marka.length; i++) {
                var value = input.value;
                if (marka[i].toLowerCase().includes(value.toLowerCase())) {
                    var li = document.createElement("li");
                    li.classList.add("item");
                    li.innerText = marka[i];
                    li.addEventListener("click", function () {
                        for (var i = 0; i < stock_div.length; i++) {
                            stock.children[0].remove();
                        }
                        var content = String(this.innerText);
                        content = content.toLowerCase();
                        for (var i = 0; i < 9; i++) {
                            var col3 = document.createElement("div");
                            col3.classList.add("col-3");
                            var button = document.createElement("button")
                            button.innerHTML = "etrafli"
                            button.classList.add(`id${i}`);
                            var stockItems = document.createElement("div");
                            stockItems.classList.add("stock-items");
                            var img = document.createElement("img");
                            img.src = `img/${content}.jpg`;
                            var p = document.createElement("p");
                            var p2 = document.createElement("p");
                            var p3 = document.createElement("p");
                            var p4 = document.createElement("p");
                            var p5 = document.createElement("p");
                            p.innerHTML = `Adi:`;
                            p2.innerHTML = `Tesviri:`;
                            p3.innerHTML = `Qiymet:`;
                            p4.innerHTML = `Yeni:`;
                            p5.innerHTML = `Telefon:`;
                            stockItems.appendChild(img);
                            stockItems.appendChild(p);
                            stockItems.appendChild(p2);
                            stockItems.appendChild(p3);
                            stockItems.appendChild(p4);
                            stockItems.appendChild(p5);
                            stockItems.appendChild(button);
                            col3.appendChild(stockItems);
                            stock.appendChild(col3);
                        }
                    })
                    lu.appendChild(li);

                }
            }


            if (lu.children.length == 0) {
                var li = document.createElement("li");
                li.classList.add("item");
                li.innerText = "Netice tapilmadi";
                lu.appendChild(li);
                var item = document.querySelectorAll(".category .item");
                item[i].addEventListener("click", function () {
                    for (var i = 0; i < stock_div.length; i++) {
                        stock.children[0].remove();
                    }
                    var content = String(this.innerText);
                    content = content.toLowerCase();
                    for (var i = 0; i < 9; i++) {
                        var col3 = document.createElement("div");
                        col3.classList.add("col-3");
                        var button = document.createElement("button")
                        button.innerHTML = "etrafli"
                        var stockItems = document.createElement("div");
                        stockItems.classList.add("stock-items");
                        var img = document.createElement("img");
                        img.src = `${content}.jpg`;
                        var p = document.createElement("p");
                        var p2 = document.createElement("p");
                        var p3 = document.createElement("p");
                        var p4 = document.createElement("p");
                        var p5 = document.createElement("p");
                        p.innerHTML = `Adi:`;
                        p2.innerHTML = `Tesviri:`;
                        p3.innerHTML = `Qiymet:`;
                        p4.innerHTML = `Yeni:`;
                        p5.innerHTML = `Telefon:`;
                        stockItems.appendChild(img);
                        stockItems.appendChild(p);
                        stockItems.appendChild(p2);
                        stockItems.appendChild(p3);
                        stockItems.appendChild(p4);
                        stockItems.appendChild(p5);
                        stockItems.appendChild(button)
                        col3.appendChild(stockItems);
                        stock.appendChild(col3);


                    }
                })
            }
        } else if (input.value == "") {
            var item = document.querySelectorAll(".category .item");
            for (var i = 0; i < item.length; i++) {
                item[i].remove();
            }
            for (var i = 0; i < marka.length; i++) {
                var li = document.createElement("li");
                li.classList.add("item");
                li.innerText = marka[i];
                lu.appendChild(li);
                var item = document.querySelectorAll(".category .item");
                item[i].addEventListener("click", function () {
                    for (var i = 0; i < stock_div.length; i++) {
                        stock.children[0].remove();
                    }
                    var content = String(this.innerText);
                    content = content.toLowerCase();
                    for (var i = 0; i < 4; i++) {
                        var col3 = document.createElement("div");
                        col3.classList.add("col-3");
                        var button = document.createElement("button")
                        button.innerHTML = "etrafli"
                        var stockItems = document.createElement("div");
                        stockItems.classList.add("stock-items");
                        var img = document.createElement("img");
                        img.src = `${content}.jpg`;
                        var p = document.createElement("p");
                        var p2 = document.createElement("p");
                        var p3 = document.createElement("p");
                        var p4 = document.createElement("p");
                        var p5 = document.createElement("p");
                        p.innerHTML = `Adi:`;
                        p2.innerHTML = `Tesviri:`;
                        p3.innerHTML = `Qiymet:`;
                        p4.innerHTML = `Yeni:`;
                        p5.innerHTML = `Telefon:`;
                        stockItems.appendChild(img);
                        stockItems.appendChild(p);
                        stockItems.appendChild(p2);
                        stockItems.appendChild(p3);

                        stockItems.appendChild(p4);
                        stockItems.appendChild(p5);
                        stockItems.appendChild(button)
                        col3.appendChild(stockItems);
                        stock.appendChild(col3);


                    }
                    $(".button").click(function () {
                        $(".popup").removeClass("d-none");

                    })
                    $("#exit").click(function () {
                        $(".popup").addClass("d-none");
                    })
                })
            }

        }


    });


    window.addEventListener('scroll',function(){

        var sumOfHeight=Math.ceil(window.scrollY+window.innerHeight);
        var boduHeight=(this.document.querySelector("body").scrollHeight);  
        if(boduHeight<=sumOfHeight){
            var content = String(this.innerText);
            content = content.toLowerCase();
            if (content == "acer") {
                mehsul = acer;
            } else if (content == "asus") {
                mehsul = asus;
            } else if (content == "dell") {
                mehsul = dell;
            } else if (content == "hp") {
                mehsul = hp;
            } else if (content == "lenovo") {
                mehsul = lenovo;
            }
            for (var i = 0; i < marka.length; i++) {
            var col3 = document.createElement("div");
            col3.classList.add("col-3");
            var button = document.createElement("button")
            button.innerHTML = "etrafli"
            var stockItems = document.createElement("div");
            stockItems.classList.add("stock-items");
            var img = document.createElement("img");
            img.src = `img/${content}.jpg`;
            var p = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            var p4 = document.createElement("p");
            var p5 = document.createElement("p");
            p.innerHTML = `Adi:${mehsul[i].ad}`;
            p2.innerHTML = `Tesviri:${marka[i].tesvir}`;
            p3.innerHTML = `Qiymet:${acer[i].qiymet}`;
            p4.innerHTML = `Yeni:${acer[i].yeni}`;
            p5.innerHTML = `Telefon:${acer[i].telefon}`;
            stockItems.appendChild(img);
            stockItems.appendChild(p);
            stockItems.appendChild(p2);
            stockItems.appendChild(p3);
            stockItems.appendChild(p4);
            stockItems.appendChild(p5);
            stockItems.appendChild(button)
            col3.appendChild(stockItems);
            stock.appendChild(col3);
            }
        }

    });

});