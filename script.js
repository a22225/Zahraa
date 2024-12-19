window.onload=function(){
    const mybtn = document.querySelector("#mybtn");
    mybtn.addEventListener("click",color);
    function color(){
        alert("Hello Doctor")
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}