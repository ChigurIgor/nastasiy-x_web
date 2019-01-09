function createFooter(page) {

    var div = document.createElement('div');

    if(page=="index") {

        div.innerHTML = "            <div class=\"row\" >\n" +
            "            <div id=\"link_group_1\" class=\"col-md-1 offset-md-3\">\n" +
            "                <a href=\"https://www.facebook.com/groups/nastasiy.x.art/\">\n" +
            "                    <img src=\"Images/Support/icon_facebook_48.png\" alt=\"Group in FaceBook\" style=\"width:5em;height:5em;\">\n" +
            "                    <p>Group in FaceBook</p>\n" +
            "                </a>\n" +
            "            </div>\n"
            // +
            // "                <div id=\"link_group_2\" class=\"col-md-1 offset-md-4\">\n" +
            // "                <a href=\"#\">\n" +
            // "                    <img src=\"Images/Support/icon_vk_48.png\" alt=\"Group in VK\" style=\"width:5em;height:5em;\">\n" +
            // "                <p>Group in VK</p>\n" +
            // "                </a>\n" +
            // "            </div>\n" +
            // "            </div>\n  "

    }
    else{
        div.innerHTML ="            <div class=\"row\" >\n" +
            "            <div id=\"link_group_1\" class=\"col-md-1 offset-md-3\">\n" +
            "                <a href=\"https://www.facebook.com/groups/nastasiy.x.art/\">\n" +
            "                    <img src=\"../Images/Support/icon_facebook_48.png\" alt=\"Group in FaceBook\" style=\"width:5em;height:5em;\">\n" +
            "                    <p>Group in FaceBook</p>\n" +
            "                </a>\n" +
            "            </div>\n"
            // +
            // "                <div id=\"link_group_2\" class=\"col-md-1 offset-md-4\">\n" +
            // "                <a href=\"https://vk.com/club_panoramic_museum\">\n" +
            // "                    <img src=\"../Images/Support/icon_vk_48.png\" alt=\"Group in VK\" style=\"width:5em;height:5em;\">\n" +
            // "                <p>Group in VK</p>\n" +
            // "                </a>\n" +
            // "            </div>\n" +
            // "            </div>\n  "
    }


    footer.appendChild(div);







}


