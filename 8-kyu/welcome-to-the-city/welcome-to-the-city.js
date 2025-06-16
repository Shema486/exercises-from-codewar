function sayHello(name, city, state) {
  const welcome = {
    name: name,
    city: city,
    state: state,
  };
  return `Hello, ${welcome.name.join(' ')}! Welcome to ${welcome.city}, ${welcome.state}!`;
}
​
// Example usage:
console.log(sayHello(["Shema", "Alphonse"], "USA", "Rwanda"));
// Output: Hello, Shema Alphonse! Welcome to USA, Rwanda!
​
​
// function welcomeMessage(name, city, state) {
//   const fullName = name.join(' ');
//   return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
// }
​