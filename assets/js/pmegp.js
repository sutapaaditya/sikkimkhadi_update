let pics = [
  {
    "pic":"../../pmegp/images/pmegp.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp2.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp3.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp1.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp4.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp6.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp5.jpg",
  },
  {
    "pic":"../../pmegp/images/pic6.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp7.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp8.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp9.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp10.jpg",
  },
  {
    "pic":"../../pmegp/images/pmegp11.jpg",
  },
  ]

let gc = document.getElementById("gc")
let idx = 0;
gc.src = pics[idx]["pic"];

function main () {
  idx = idx+1;
  
  if(idx==pics.length){
    idx = 0;
  }
  
  gc.style.opacity = '0';
  
  setTimeout(() =>{
    gc.src =pics[idx]["pic"];
    gc.style.opacity = '1';
  },1000)
}
setInterval(main, 9000)
