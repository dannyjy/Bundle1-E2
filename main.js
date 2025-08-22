console.log("Hello, World")

const captilizeVowles = (str) => {
    const vowels = "aeiou";
    return str.split('').map((s,i) => vowels.includes(s) && i % 2 === 1 ? s.toUpperCase() : s).join("")
}

console.log(captilizeVowles("Captilize"));