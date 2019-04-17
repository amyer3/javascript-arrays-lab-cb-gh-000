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
  var array = kittens
  array.push(name)
  console.log(array)
  return array
}

function prependKitten(name){
  var array = kittens
  return array.unshift(name)
}

function removeLastKitten(){
  var array = kittens
  array.pop()
  return array
}

function removeFirstKitten(){
  var array = kittens
  kittens.shift()
  return array
}
