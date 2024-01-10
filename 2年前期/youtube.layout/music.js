setTimeout(function(){
    window.location.href = 'http://localhost:63342/ooshima0826.github.io/2%E5%B9%B4%E5%89%8D%E6%9C%9F/youtube.layout/2023.html?_ijt=1n1k4r5c2fa07f95ac6a5pd116&_ij_reload=RELOAD_ON_SAVE';
}, 7.8*1000);

const container  = document.querySelector(".container-m")
for(var i=0; i<=50; i++){
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    container.appendChild(blocks);
}

function  animateBlocks(){
        anime({
            targets:".block",
            translateX:function (){
                return anime.random(-800,700);
            },
            translateY:function (){
                return anime.random(-500,500);
            },
            scale:function (){
                return anime.random(1,4);
            },
            duration: 2000,
            delay: anime.stagger(15),
            complete: animateBlocks,
        });
    }
animateBlocks();

