const arg = process.argv[2]
function disco(word){
const suicide  = Math.ceil(word.length / 2)
const short = word.slice(0, suicide);
const long = word.slice(suicide)
const retake = long + short
return retake
}
function splt(arg){
const word = arg.split(" ")
const bhbp = word.map(disco)
const site = bhbp.join(' ')
return site
}
console.log(splt(arg))