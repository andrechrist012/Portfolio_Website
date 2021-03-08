window.onscroll = function(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("nav").className = "navBackground"
        document.getElementById("p").classList.add("navActive")
        document.getElementById("e").classList.remove("navActive")
        document.getElementById("s").classList.remove("navActive")
        document.getElementById("c").classList.remove("navActive")
    }else{
        document.getElementById("nav").className = ""
    }
    if(document.body.scrollTop > 450 || document.documentElement.scrollTop > 450){
        document.getElementById("p").classList.remove("navActive")
        document.getElementById("e").classList.add("navActive")
        document.getElementById("s").classList.remove("navActive")
        document.getElementById("c").classList.remove("navActive")
    }
    if(document.body.scrollTop > 1040 || document.documentElement.scrollTop > 1040){
        document.getElementById("p").classList.remove("navActive")
        document.getElementById("e").classList.remove("navActive")
        document.getElementById("s").classList.add("navActive")
        document.getElementById("c").classList.remove("navActive")
    }
    if(document.body.scrollTop > 1480 || document.documentElement.scrollTop > 1480){
        document.getElementById("p").classList.remove("navActive")
        document.getElementById("e").classList.remove("navActive")
        document.getElementById("s").classList.remove("navActive")
        document.getElementById("c").classList.add("navActive")
    }
}

function realTime(){
    let time = setTimeout(realTime, 500)
    let today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    minute = checkTime(minute)
    second = checkTime(second)
    document.getElementById('time').innerHTML = 
    hour + ":" + minute + ":" + second
}

function checkTime(i){
    if(i < 10) i = '0' + i
    return i
}

function openSideBar() {
    document.getElementById("sideNavBar").style.width = "100%";
}
  
function closeSideBar() {
    document.getElementById("sideNavBar").style.width = "0";
}

let exp = document.getElementsByClassName("collaps")
for(let i=0; i<exp.length; i++){
    exp[i].onclick = function(){
        this.classList.toggle("active")
        let content = this.nextElementSibling
        if(content.style.maxHeight){
            content.style.maxHeight = null
        }else{
            content.style.maxHeight = content.scrollHeight + "px"
        }
    }
}


let img = "light"
function changeTheme(){
    let theme = document.body
    theme.classList.toggle("darkMode")
    let a = document.getElementById("image")
    let l_P = document.getElementById("lk_P")
    let f_P = document.getElementById("fb_P")
    let ig_P = document.getElementById("ig_P")
    let l = document.getElementById("lk")
    let f = document.getElementById("fb")
    let ig = document.getElementById("ig")
    if(img == "light"){
        a.src = "image/Group 1_dm.png"
        l_P.src = "image/linkedin_dt.png"
        f_P.src = "image/facebook_dt.png"
        ig_P.src = "image/instagram_dt.png"
        l.src = "image/linkedin_dt.png"
        f.src = "image/facebook_dt.png"
        ig.src = "image/instagram_dt.png"
        img = "dark"
    }else{
        a.src = "image/Group 1.png"
        l_P.src = "image/linkedin.png"
        f_P.src = "image/facebook.png"
        ig_P.src = "image/instagram.png"
        l.src = "image/linkedin.png"
        f.src = "image/facebook.png"
        ig.src = "image/instagram.png"
        img = "light"
    }
}
