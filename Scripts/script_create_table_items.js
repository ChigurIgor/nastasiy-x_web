function createTableElements(selection) {
    dir="";
    // var textInside = document.getElementById("title_2").getElementsByTagName('p')[0].innerHTML;
    if(selection=="sm_item-1"){ filesInside=35;dir="Interior";}
    if(selection=="sm_item-2"){ filesInside=5;dir="Facade";}
    if(selection=="sm_item-3"){ filesInside=9;dir="Portraits";}
    if(selection=="sm_item-4"){ filesInside=6;dir="Items";}
    if(selection=="sm_item-5"){ filesInside=4;dir="Clothes";}
    document.getElementById("sm_item-1").getElementsByTagName('p')[0].style.color="white";
    document.getElementById("sm_item-2").getElementsByTagName('p')[0].style.color="white";
    document.getElementById("sm_item-3").getElementsByTagName('p')[0].style.color="white";
    document.getElementById("sm_item-4").getElementsByTagName('p')[0].style.color="white";
    document.getElementById("sm_item-5").getElementsByTagName('p')[0].style.color="white";

    document.getElementById(selection).getElementsByTagName('p')[0].style.color="rgb(18,41,148)";
    // filesInside=4;dir="Clothes";
    table.innerHTML="";


    countImg=(filesInside/2)-1;
    i=0;
    for(i=0; i<filesInside;i += 2) {
        var div = document.createElement('div');
        // div.className = "alert alert-success";
        // xx=((2*i)+1);
        xx=i+1;
        yy=xx+1;

            div.innerHTML = "<div class=\"row\">\n" +
                "    <div  class=\"col-md-6\" align=\"center\">\n" +
                "    <div id=\"item-" + xx + "\" onclick=\"myItemClick(id)\" onmouseover=\"myHover(id)\"  onmouseout=\"myUnHover(id)\" class=\"col-md-12 \" align=\"center\" >\n" +
                "    <img src=\"../Images/Painters_work/" + dir + "/" + xx + ".jpg\" alt=\"item_" + xx + "\" >\n" +
                // "    <p>" + xx + "</p>\n" +
                "    </div>\n" +
                "\n" +
                "    </div>\n" +
                "    <div  class=\"col-md-6\" align=\"center\">\n" +
                "    <div id=\"item-" + yy + "\" onclick=\"myItemClick(id)\"  onmouseover=\"myHover(id)\"  onmouseout=\"myUnHover(id)\" class=\"col-md-12 \" align=\"center\" >\n" +
                "    <img src=\"../Images/Painters_work/" + dir + "/" + yy + ".jpg\" alt=\"item_" + yy + "\"  >\n" +
                // "    <p>" + yy + "</p>\n" +
                "    </div>\n" +
                "    </div>\n" +
                "    </div>";


        if(yy>filesInside) {
            div.innerHTML = "<div class=\"row\">\n" +
                "    <div  class=\"col-md-6\" align=\"center\">\n" +
                "    <div id=\"item-" + xx + "\" onclick=\"myItemClick(id)\" onmouseover=\"myHover(id)\"  onmouseout=\"myUnHover(id)\" class=\"col-md-12 \" align=\"center\" >\n" +
                "    <img src=\"../Images/Painters_work/" + dir + "/" + xx + ".jpg\" alt=\"item_" + xx + "\" >\n" +
                // "    <p>" + xx + "</p>\n" +
                "    </div>\n" +
                "\n" +
                "    </div>";
        }
        // document.body.appendChild(div)
        table.appendChild(div);
    }





}

