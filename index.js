function receivesAFunction(callback) {
  callback();
  return "receivesAFunction has been called!"
}

function returnsANamedFunction() {
  return returnsANamedFunction;
}

function returnsAnAnonymousFunction(){
  return function(){
    return "Hello, World";
  }
}
