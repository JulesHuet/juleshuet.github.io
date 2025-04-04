function affiche(){
    const nom=document.getElementById("nom");
    let user=document.getElementById("user");
    user.innerHTML=nom.value;
}

function selection(){
    const selecteur = document.getElementById('choix');
    const monChoix = selecteur [selecteur.selectedIndex];
    document.getElementById("choix").style.color = monChoix.value;
}

function couleurcanardquack(){
    const selecteur = document.getElementById('choix');
    const monChoix = selecteur [selecteur.selectedIndex];

    if (monChoix.value=='green'){
        document.getElementById('quackquack').src="images/canard_green.png";
    }
    else if (monChoix.value=='gold'){
        document.getElementById('quackquack').src="images/canard_yellow.png";
    }
    else if (monChoix.value=='blue'){
        document.getElementById('quackquack').src="images/canard_blue.png";
    }
    else if (monChoix.value=='red'){
        document.getElementById('quackquack').src="images/canard_red.png";
    }
    else if (monChoix.value=='black'){
        document.getElementById('quackquack').src="images/canard_white.png";
    }
    else if (monChoix.value=='orange'){
        document.getElementById('quackquack').src="images/canard_orange.png";
    }
    else if (monChoix.value=='purple'){
        document.getElementById('quackquack').src="images/canard_purple.png";
    }
}

function start(){
    alert("Attention, il y a BEAUCOUP de canards sur cette page")
}

function flower(){
    document.getElementById('quaaaaaack').src="images/duck_open.png";
}
function removeflower(){
    document.getElementById('quaaaaaack').src="images/duck.png";
}