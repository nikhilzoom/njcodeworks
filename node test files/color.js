var colors = require('colors');
 
console.log('hello'.green); // outputs green text 
console.log("First some yellow text".yellow);
console.log("Underline that text".underline);
console.log("Make it bold and red".red.bold);
console.log(("Double Raindows All Day Long").rainbow);
console.log("Drop the bass".trap);
console.log("DROP THE RAINBOW BASS".trap.rainbow);
console.log('Chains are also cool.'.bold.italic.underline.red); // styles not widely supported
console.log('So '.green + 'are'.underline + ' ' + 'inverse'.inverse + ' styles! '.yellow.bold); // styles not widely supported
console.log("Zebras are so fun!".zebra);
//
// Remark: .strikethrough may not work with Mac OS Terminal App
//
console.log("This is " + "not".strikethrough + " fun.");

console.log('Background color attack!'.black.bgRed);
console.log('Use random styles on everything!'.random);
console.log('America, Heck Yeah!'.america);
console.log('Setting themes is useful');