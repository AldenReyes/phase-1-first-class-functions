receivesAFunction = (genericCallback) => {
  genericCallback();
  return "genericCallback has been called!"
}
returnsANamedFunction = () => {
  return receivesAFunction;
}
returnsAnAnonymousFunction = () => {
  return function(){
  console.log("Hello, World")
  }
}
