var kittens = [] //define your array here

// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  var array = kittens
  return array.unshift(name)
}

function removeLastKitten(){
  return kittens.splice(0, kittens.length -1)
}

function removeFirstKitten(){
  return kittens.splice(0)
}
