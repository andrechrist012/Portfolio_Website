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
    let l = document.getElementsByClassName("lk")
    let f = document.getElementsByClassName("fb")
    let ig = document.getElementsByClassName("ig")
    if(img == "light"){
        a.src = "image/Group 1_dm.png"
        for(let i=0; i<l.length; i++){
            l[i].src = "image/linkedin_dt.png"
            f[i].src = "image/facebook_dt.png"
            ig[i].src = "image/instagram_dt.png"
        }
        img = "dark"
    }else{
        a.src = "image/Group 1.png"
        for(let i=0; i<l.length; i++){
            l[i].src = "image/linkedin.png"
            f[i].src = "image/facebook.png"
            ig[i].src = "image/instagram.png"
        }
        img = "light"
    }

}