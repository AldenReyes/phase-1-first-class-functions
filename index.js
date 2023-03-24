receivesAFunction = (genericCallback) => {
  genericCallback();
  return "genericCallback has been called!"
}

returnsANamedFunction = () => {
  return returnsANamedFunction;
}

returnsAnAnonymousFunction = () => {
  return function(){
    return "Hello, World"
  }
}
