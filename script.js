url = document.getElementById("url");
img_div = document.getElementById("img");
slider = document.getElementById("qual");
form = document.getElementById("frm");
capture_btn = document.getElementById("capture");
slider.defaultValue = 60;



options = {
    type: "format=" + document.querySelector('input[name="type"]:checked').value + "&",
    isfullpage: "full_page=" + document.getElementById("fullp").checked.toString() + "&",
    slidervalue: "quality=" + slider.value + "&",
    hideads: "no_ads=" + document.getElementById("hide").checked.toString(),
};


$("#url").keypress(function(event) {
    if (event.keyCode === 13) {
        $("#capture").click();
    }
});

$("#GFG_Button").click(function() {
    alert("Button clicked");
});


function createimg() {
    img = document.createElement("img");
    img.setAttribute("src",
        "https://api.apiflash.com/v1/urltoimage?access_key=16820f74755a4cbda4db3a7cc3d43f04&url=" +
        url
            .value);
    img.setAttribute("onload", "f()");
    img.id="myImg";
    img_div.classList.add("container");
    img_div.prepend(img);
    img.className = "img-fluid";
    img.classList.add("capture");


}


function capture() {
    options = {
        type: "format=" + document.querySelector('input[name="type"]:checked').value + "&",
        isfullpage: "full_page=" + document.getElementById("fullp").checked.toString() + "&",
        slidervalue: "quality=" + slider.value + "&",
        hideads: "no_ads=" + document.getElementById("hide").checked.toString(),
    };


    if (isValidURL(url.value) == true) {
        if (url.value.slice(0, 4) == "http") {
            createimg();
            search = "https://api.apiflash.com/v1/urltoimage?access_key=16820f74755a4cbda4db3a7cc3d43f04&url=" +
                url.value + "?&" + options.type + options.isfullpage + options.slidervalue + options.hideads;
            console.log(search);
            img.setAttribute("src", search
            );
        } else {
            new_url = "http://" + url.value;
            createimg();
            img.setAttribute("src",
                "https://api.apiflash.com/v1/urltoimage?access_key=16820f74755a4cbda4db3a7cc3d43f04&url=" +
                new_url + "?&" + options.type + options.isfullpage + options.slidervalue + options.hideads);
        }

        // window.open("https://api.apiflash.com/v1/urltoimage?access_key=ca5577026a5b4665b5d7d1d256461cea&url="+url.value, "_blank");
    } else {
        alert("Enter a valid URL");
        console.log("invaild url");
    }
    mod();
}

function isValidURL(string) {
    var res = string.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return (res !== null)
};

function download_img(){
    options = {
        type: "format=" + document.querySelector('input[name="type"]:checked').value + "&",
        isfullpage: "full_page=" + document.getElementById("fullp").checked.toString() + "&",
        slidervalue: "quality=" + slider.value + "&",
        hideads: "no_ads=" + document.getElementById("hide").checked.toString(),
    };

    console.log(url.value);
    if (isValidURL(url.value) == true) {
        if (url.value.slice(0, 4) == "http") {
            
            search = "https://api.apiflash.com/v1/urltoimage?access_key=16820f74755a4cbda4db3a7cc3d43f04&url=" +
                url.value + "?&" + options.type + options.isfullpage + options.slidervalue + options.hideads;
            saveAs(search,"capture.jpeg");
        } else {
            new_url = "http://" + url.value;
            search2 = "https://api.apiflash.com/v1/urltoimage?access_key=16820f74755a4cbda4db3a7cc3d43f04&url=" +
            new_url + "?&" + options.type + options.isfullpage + options.slidervalue + options.hideads
            saveAs(search2, "capture.jpeg")
        }

        // window.open("https://api.apiflash.com/v1/urltoimage?access_key=ca5577026a5b4665b5d7d1d256461cea&url="+url.value, "_blank");
    } else {
        alert("Enter a valid URL");
        console.log("invaild url");
    }

}

function f() {
    console.log("Loaded img");
}



var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function mod(){
    
        var img_m = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img_m.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = "Download";
    
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
    }
    
}
