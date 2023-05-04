var button = document.getElementById("button");
        var makepdf = document.getElementById("makepdf");
  
        button.addEventListener("click", function () {
            html2pdf().from(makepdf).save();
        });