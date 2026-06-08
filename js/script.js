
openBook.onclick=()=>intro.style.display='none';

musicBtn.onclick=()=>bgm.play();

for(let i=1;i<=20;i++){
 const img=document.createElement('img');
 img.src='assets/img/img'+i+'.jpg';
 img.onclick=()=>{lightbox.style.display='flex';lightImg.src=img.src;}
 gallery.appendChild(img);
}
lightbox.onclick=()=>lightbox.style.display='none';

const target=new Date('2026-07-31T22:00:00').getTime();
setInterval(()=>{
 let d=target-Date.now();
 let days=Math.floor(d/86400000);
 let h=Math.floor((d%86400000)/3600000);
 let m=Math.floor((d%3600000)/60000);
 let s=Math.floor((d%60000)/1000);
 countdown.innerHTML=`${days} días ${h}h ${m}m ${s}s`;
},1000);

for(let i=0;i<60;i++){
 let e=document.createElement('div');
 e.className='lantern';
 e.innerHTML='🏮';
 e.style.left=Math.random()*100+'vw';
 e.style.bottom='-50px';
 e.style.animation='rise '+(8+Math.random()*12)+'s linear infinite';
 document.body.appendChild(e);
}

for(let i=0;i<120;i++){
 let s=document.createElement('div');
 s.className='star';
 s.innerHTML='✦';
 s.style.left=Math.random()*100+'vw';
 s.style.top=Math.random()*100+'vh';
 s.style.opacity=Math.random();
 document.body.appendChild(s);
}

function saveMsg(){
 let txt=document.getElementById('msg').value;
 if(!txt) return;
 let arr=JSON.parse(localStorage.getItem('msgs')||'[]');
 arr.push(txt);
 localStorage.setItem('msgs',JSON.stringify(arr));
 loadMsgs();
 msg.value='';
}

function loadMsgs(){
 msgs.innerHTML='';
 let arr=JSON.parse(localStorage.getItem('msgs')||'[]');
 arr.forEach(t=>{
  let p=document.createElement('p');
  p.textContent=t;
  msgs.appendChild(p);
 });
}
loadMsgs();
