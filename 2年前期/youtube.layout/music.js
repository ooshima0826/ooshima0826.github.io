setTimeout(function(){
    window.location.href = 'http://ooshima0826.github.io/2年前期/youtube.layout/2023.html';
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

