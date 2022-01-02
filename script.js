

const widthEl = document.getElementById("chatcontainerbox")



function blurEffect() {
    if (widthEl.offsetWidth < 382) {
        widthEl.style.filter = "blur(2px) brightness(70%)"
    }else {
        widthEl.style.filter = "none"
    }

    
}


function reportWindowSize () {
    
    window.addEventListener('resize' , reportWindowSize)
    if ( reportWindowSize < 382) {
        widthEl.style.filter = "blur(1px) brightness(70%)"
    }else {
        widthEl.style.filter = "none"
    }

    let sizeMath = widthEl.offsetWidth
    console.log(widthEl.offsetWidth)

    if (sizeMath < 382) {
        widthEl.style.filter = "blur(2px) brightness(70%)"
    }else {
        widthEl.style.filter = "none"
    }
    
}

reportWindowSize()
blurEffect()

function myFunction() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("hiddenbuttonheader")
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    };

    let chatBox = document.getElementById("chatcontainerbox");

    if (x.style.display === "none") {
        chatBox.style.width = "calc(100vw - 72px)";
    }else {
      chatBox.style.width = "calc(100vw - 72px - 240px)"
    }
  
    if (x.style.display === "none") {
y.style.transform = "rotate(180deg)";
y.style.display = "flex"
y.style.margin= "auto"
    }else{
        y.style.transform = "none";
        y.style.display = "none"
        
    }

    


    if (x.style.display === "none") {
        widthEl.style.filter = "none"
    }else {
        widthEl.style.filter = "none"
    }

    if (x.style.display === "block") {
        blurEffect()
    }else {
        widthEl.style.filter = "none"
    }



    

  }




