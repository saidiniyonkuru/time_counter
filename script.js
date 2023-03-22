const set = setInterval(function(){
    const time = new Date();
    
    const hours= time.getHours();
    const min= time.getMinutes();
    const sec= time.getSeconds();
    const h = document.querySelector('.h');
    const m = document.querySelector('.m');
    const s = document.querySelector('.s');
    //console.log(hours+':'+min+':'+sec );
    const mer = document.querySelector('.merid');
    hours < 10 ? h.textContent ='0'+hours+':' : h.textContent=hours+':';
    min < 10 ? m.textContent='0'+min+':' : m.textContent=min+':';
    sec < 10 ? s.textContent='0'+sec : s.textContent=sec;
    hours < 12 ? mer.textContent='AM' : mer.textContent='PM';
    },1000)