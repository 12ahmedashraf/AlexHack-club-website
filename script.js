let x=document.getElementsByClassName("hero-div")[0];
const bgs=[
    'url("https://i.postimg.cc/yN0pBtzr/bg3.png")', 
    'url("https://i.postimg.cc/BQ16qBX1/bg1.png")',
    'url("https://i.postimg.cc/nrFP3kgS/bg4.png")'
];
let y=0;
        document.getElementsByClassName("circle")[0].style.backgroundColor="white";
   x.style.backgroundImage = bgs[0];
function change_back(z)
{
    y=y+z;
    let u=(y%bgs.length+bgs.length)%bgs.length;
    let i=(y%3+3)%3;
    x.style.backgroundImage = bgs[u];
    if(i==2)
    {
            document.getElementsByClassName("circle")[2].style.backgroundColor="white";
    document.getElementsByClassName("circle")[0].style.backgroundColor="rgba(255,255,255,0)";
        document.getElementsByClassName("circle")[1].style.backgroundColor="rgba(255,255,255,0)";

    }
     if(i==1)
    {
            document.getElementsByClassName("circle")[1].style.backgroundColor="white";
    document.getElementsByClassName("circle")[0].style.backgroundColor="rgba(255,255,255,0)";
        document.getElementsByClassName("circle")[2].style.backgroundColor="rgba(255,255,255,0)";

    }
    if(i==0)
    {
        document.getElementsByClassName("circle")[0].style.backgroundColor="white";
    document.getElementsByClassName("circle")[1].style.backgroundColor="rgba(255,255,255,0)";
        document.getElementsByClassName("circle")[2].style.backgroundColor="rgba(255,255,255,0)";
    }
}
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY === 0) {
        navbar.style.backgroundColor = "rgba(255,255,255,0)"; 
  } else {
        navbar.style.backgroundColor = "#08283B";
  }
});
let toggle=0;
function toggleMenu() {
    toggle++;
    const nav = document.querySelector(".links");
        nav.classList.toggle("show");

  }
    const menu = document.getElementById("links");

   document.querySelectorAll("#links a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
