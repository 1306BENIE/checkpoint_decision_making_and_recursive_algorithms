

function isOld(old) {
    old = prompt("Entrer votre age ")
    if (isNaN(old)) {
        return 'Veuillez entrer votre age'
    } else if(old <= 12){
        return 'Le prix de votre billet de cinemat est 10$'
    }else if (old >= 13 && old <= 17){
        return 'Le prix de votre billet de cinemat est 15$'
    }
    else if(old >= 18){
        return 'Le prix de votre billet de cinemat est 20$'
    }
    else{
        return 'Veuillez entrer un age valide'
    }

}

console.log(isOld())