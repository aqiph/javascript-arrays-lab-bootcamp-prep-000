var kittens = ["Milo", "Otis", "Garfield"] //define your array here

//destructivelyAppendKitten(name)
function destructivelyAppendKitten(name){
  kittens.push(name)
}

//destructivelyPrependKitten(name)
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

//destructivelyRemoveLastKitten()
function destructivelyRemoveLastKitten(){
  kittens.pop()
}

//destructivelyRemoveFirstKitten()
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

//appendKitten(name)
function appendKitten(name){
  return [...kittens, name]
}

//prependKitten(name)
function prependKitten(name){
  return [name, ...kittens]
}

//





