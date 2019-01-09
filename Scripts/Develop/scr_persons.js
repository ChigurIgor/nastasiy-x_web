function createPersons() {

    dir="";
    filesInside=4;
    dir="Icons";







    countImg=(filesInside/2)-1;
    i=0;
    for(i=0; i<filesInside;i += 2) {
        var div = document.createElement('div');
        // div.className = "alert alert-success";
        // xx=((2*i)+1);
        xx=i+1;
        yy=xx+1;
        // if( navigator.userAgent.match(/Android/i)
        //     || navigator.userAgent.match(/webOS/i)
        //     || navigator.userAgent.match(/iPhone/i)
        //     || navigator.userAgent.match(/iPad/i)
        //     || navigator.userAgent.match(/iPod/i)
        //     || navigator.userAgent.match(/BlackBerry/i)
        //     || navigator.userAgent.match(/Windows Phone/i))
        //     alert("You're using Mobile Device!!");
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)){
            div.innerHTML = "<div class=\"row\">\n" +
                "                <div id=\"table_item-"+xx+"\" class=\"col-12\" onclick=\"fillContent(id)\" onmouseover=\"myHover(id)\"  onmouseout=\"myUnHover(id)\">\n" +
                "    <img src=\"../Images/Icons/"+ xx + ".jpg\" alt=\"table_item-" + xx + "\" >\n" +
                "\n" +
                "                </div>\n" +
                "</div>\n" +
                "<div class=\"row\">\n" +
                "                <div id=\"table_item-"+yy+"\" class=\"col-12\" onclick=\"fillContent(id)\" onmouseover=\"myHover(id)\"  onmouseout=\"myUnHover(id)\">\n" +
                "    <img src=\"../Images/Icons/"+ yy + ".jpg\" alt=\"table_item-" + yy + "\" >\n" +
                "\n" +
                "                </div>\n" +
                "            </div>";


            if(yy>filesInside) {
                div.innerHTML = "<div class=\"row\">\n" +
                    "                <div id=\"table_item-"+xx+"\" class=\"col-12\" onclick=\"fillContent(id)\" onmouseover=\"myHover(id)\"  onmouseout=\"myUnHover(id)\">\n" +
                    "    <img src=\"../Images/Icons/"+ xx + ".jpg\" alt=\"table_item-" + xx + "\" >\n" +
                    "\n" +
                    "                </div>\n" +
                    "            </div>";
            }        }

        else {
            div.innerHTML = "<div class=\"row\">\n" +
                "                <div id=\"table_item-"+xx+"\" class=\"col-6\" onclick=\"fillContent(id)\" onmouseover=\"myHover(id)\"  onmouseout=\"myUnHover(id)\">\n" +
                "    <img src=\"../Images/Icons/"+ xx + ".jpg\" alt=\"table_item-" + xx + "\" >\n" +
                "\n" +
                "                </div>\n" +
                "                <div id=\"table_item-"+yy+"\" class=\"col-6\" onclick=\"fillContent(id)\" onmouseover=\"myHover(id)\"  onmouseout=\"myUnHover(id)\">\n" +
                "    <img src=\"../Images/Icons/"+ yy + ".jpg\" alt=\"table_item-" + yy + "\" >\n" +
                "\n" +
                "                </div>\n" +
                "            </div>";


            if(yy>filesInside) {
                div.innerHTML = "<div class=\"row\">\n" +
                    "                <div id=\"table_item-"+xx+"\" class=\"col-6\" onclick=\"fillContent(id)\" onmouseover=\"myHover(id)\"  onmouseout=\"myUnHover(id)\">\n" +
                    "    <img src=\"../Images/Icons/"+ xx + ".jpg\" alt=\"table_item-" + xx + "\" >\n" +
                    "\n" +
                    "                </div>\n" +
                    "            </div>";
            }
        }


        // document.body.appendChild(div)
        grid.appendChild(div);



    }




}



function fillContent(id) {
    var end = parseInt(id.split("-")[1],10);
    var desTitle="";
    var desCont="";
    if(end=="1"){
        desTitle="Nastya";
        desCont="Main painter";
    }
    if(end=="2"){
        desTitle="Igor";
        desCont="I went to warm up and stayed.";
    }
    if(end=="3"){
        desTitle="Anna";
        desCont="Painter";
    }
    if(end=="4"){
        desTitle="Liza";
        desCont="Painter";
    }




    description.innerHTML = " <div id=\"descr_title\" class=\"row\">\n" +
    "                <p>"+desTitle+"</p>\n" +
    "            </div>\n" +
    "            <div id=\"descr_img\" class=\"row\">\n" +
    "    <img src=\"../Images/Icons/"+ end + ".jpg\" alt=\"" + id + "\" >\n" +
    "\n" +
    "            </div>\n" +
    "            <div id=\"descr\" class=\"row\">\n" +
    "                <p>"+desCont+"</p>\n" +
    "            </div>";

    description.style.backgroundImage="linear-gradient(to bottom right, transparent, rgb(114,42,190))";
        // description.style.backgroundColor="gray";


}

function myHover(id) {
    // if (document.getElementById(id).style.zIndex != 1) {

        document.getElementById(id).style.backgroundColor = "rgba(0,0,0,0.2)";
        document.getElementById(id).style.color = "white";
        document.getElementById(id).style.fontWeight6 = 600;
        document.getElementById(id).style.transform = "scale(1.1)";
    // }
}
function myUnHover(id) {
    // if (document.getElementById(id).style.zIndex != 1) {
        document.getElementById(id).style.backgroundColor = "transparent";
        document.getElementById(id).style.color = "black";
        document.getElementById(id).style.fontWeight6 = 300;
        document.getElementById(id).style.transform = "scale(1)";
    // }
}
function fillContentGr() {







        var desTitle = "";
        var desCont = "";
        desTitle = "Our team";
        desCont = "We are artists, and we know that the city is people, not walls. But in the walls you can breathe life and give them individuality. We leave a piece of our soul in the painting. The decoration of the walls is, above all, the creation of a unique space, which is sometimes so lacking.";


        description.innerHTML = " <div id=\"descr_title\" class=\"row\">\n" +
            "                <p>" + desTitle + "</p>\n" +
            "            </div>\n" +
            "            <div id=\"descr_img\" class=\"row\">\n" +
            "    <img src=\"../Images/Icons/" + 0 + ".jpg\" alt=\"" + 0 + "\" >\n" +
            "\n" +
            "            </div>\n" +
            "            <div id=\"descr\" class=\"row\">\n" +
            "                <p>" + desCont + "</p>\n" +
            "            </div>";

        description.style.backgroundImage = "linear-gradient(to bottom right, transparent, rgb(114,42,190))";


}

