function createCatalogElements() {

    var hor=[2,5,8,13,20,34];
    var cube=[14,15,16,17,33,26];
    var vert=[4,21,18];
    var hor1=0;
    var hor2=0;
    var cube1=0;
    var cube2=0;
    var vert1=0;

    dir="";
    // var textInside = document.getElementById("title_2").getElementsByTagName('p')[0].innerHTML;
    // if(selection=="sm_item-1"){ filesInside=35;dir="Interior";}
    // if(selection=="sm_item-2"){ filesInside=5;dir="Facade";}
    // if(selection=="sm_item-3"){ filesInside=4;dir="Clothes";}
    // if(selection=="sm_item-4"){ filesInside=9;dir="Portraits";}
    // if(selection=="sm_item-5"){ filesInside=9;dir="Portraits";}
    // document.getElementById("sm_item-1").getElementsByTagName('p')[0].style.color="white";
    // document.getElementById("sm_item-2").getElementsByTagName('p')[0].style.color="white";
    // document.getElementById("sm_item-3").getElementsByTagName('p')[0].style.color="white";
    // document.getElementById("sm_item-4").getElementsByTagName('p')[0].style.color="white";
    // document.getElementById("sm_item-5").getElementsByTagName('p')[0].style.color="white";
    //
    // document.getElementById(selection).getElementsByTagName('p')[0].style.color="rgb(18,41,148)";
    // filesInside=4;dir="Clothes";
    // table.innerHTML="";


    countImg=vert.length;

    i=0;
    hor1=0;
    hor2=1;
    cube1=0;
    cube2=1;

    for(i=0; i<countImg;i++) {
        vert1=i;
        var div = document.createElement('div');



            div.innerHTML = " <div class=\"row\">\n" +
                "                <div class=\"col-9\">\n" +
                "                    <div class=\"row\">\n" +
                "                        <div id=\"item8-1\" class=\"col-8 p-0 \">\n" +
                "                            <img src=\"../Images/Painters_work/Interior/"+hor[hor1]+".jpg\" alt="+hor1+">\n" +
                "                        </div>\n" +
                "                        <div id=\"item4-1\" class=\"col-4 p-0 \">\n" +
                "                            <img src=\"../Images/Painters_work/Interior/"+cube[cube1]+".jpg\"alt="+cube1+">\n" +
                "    \n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"row\">\n" +
                "                        <div id=\"item4-2\" class=\"col-4 p-0 \">\n" +
                "                            <img src=\"../Images/Painters_work/Interior/"+cube[cube2]+".jpg\" alt="+cube2+">\n" +
                "                        </div>\n" +
                "                        <div id=\"item8-2\" class=\"col-8 p-0 \">\n" +
                "                            <img src=\"../Images/Painters_work/Interior/"+hor[hor2]+".jpg\" alt="+hor2+">\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div id=\"item3-1\" class=\"col-3 p-0\">\n" +
                "                    <div class=\"row\">\n" +
                "                        <img src=\"../Images/Painters_work/Interior/"+vert[vert1]+".jpg\" alt="+vert1+">\n" +
                "    \n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>    ";



        table.appendChild(div);
        hor1=hor1+2;
        hor2=hor2+2;
        cube1=cube1+2;
        cube2=cube2+2;
    }




}

