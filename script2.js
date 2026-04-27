const roses = document.querySelectorAll(".rose");

// Random butterflies
roses.forEach(rose=>{
rose.dataset.butterfly = true;
});

roses.forEach(rose=>{

rose.addEventListener("click",()=>{

if(rose.classList.contains("bloom")) return;

rose.classList.add("bloom");

if(rose.dataset.butterfly==="true"){
releaseButterfly(rose);
}

});

});

function releaseButterfly(rose){

const b = document.createElement("div");
b.className="butterfly";
document.body.appendChild(b);

const r = rose.getBoundingClientRect();
b.style.left = r.left + "px";
b.style.top = r.top + "px";

setTimeout(()=>b.remove(),4000);
}
