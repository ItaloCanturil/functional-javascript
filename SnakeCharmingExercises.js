import tail from "./utils/tail";
import length from "./utils/length";
import head from "./utils/head";

function pipeline(...functions) {
  if(length(functions) === 0) return input => input;
  if(length(functions) === 1) return input => head(functions)(input);
  return function(input) {
    return pipeline(...tail(functions))(head(functions)(input));
  };
}

function reducePipeline (...functions) {
  return input => reduce((acc, fn) => fn(acc), input, functions);
}

const pipeSnake = pipeline(desnake, camelize, toString);

function desnake(snake_case_string) {
  return snake_case_string.split('_');
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function camelize(stringArray) {
  const first = stringArray.shift();
  return [first, ...stringArray.map((item) => capitalizeFirstLetter(item))];
}

function toString(stringArray) {
  return stringArray.reduce((acc, curr) => acc + curr, []);
}

function snakeToCamel(snake_case_string) {
  return pipeSnake(snake_case_string);
}


console.log(snakeToCamel("super_cool_variable"))