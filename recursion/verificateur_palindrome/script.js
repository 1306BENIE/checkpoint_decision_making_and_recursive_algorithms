function estPalindrome(chaine) {
    // Normaliser la chaîne
    const normalisee = chaine.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Fonction récursive
    if (normalisee.length <= 1){
        return ` Est un palindrome`
    }
    if (normalisee[0] !== normalisee[normalisee.length - 1]){
        return `N'est pas un palindrome`
    }
    return estPalindrome(normalisee.slice(1, -1));
}

// Exemples d'utilisation
console.log(estPalindrome("A man, a plan, a canal, Panama")); // true
console.log(estPalindrome("nous somme"));