const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

//check if a message is considered spam or not
const helpRegex = /please help|assist me/i;
//1. 
// const dollarRegex = /[0-9]+ (hundred|thousand|million|billion)? dollars/i; //While this expression does match 1 hundred dollars, it will not match 1  hundred  dollars, or 10 dollars.
//2. 
//const dollarRegex = /[0-9]+\s*(hundred|thousand|million|billion)?\s+dollars/i; //You don't actually need the match value from your capture group, so you can turn it into a non-capturing group. This will allow you to group the characters together without preserving the result.

//3. 
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
// console.log(dollarRegex.test('a 99 dollars'));

// const freeRegex = /fr[e3][e3] m[o0]n[e3]y/i;
// const freeRegex = /\sfr[e3][e3] m[o0]n[e3]y\s/i;
// const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y\s/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

// const stockRegex = /[s5][t7][o0]ck al[e3]r[t7]/i;
// const stockRegex = /[s5][t7][o0]ck [a@4]l[e3]r[t7]/i;
// const stockRegex = /[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7]/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i|1][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex]; //store the collection of spam msg

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
// console.log('please help'.match(helpRegex));

checkMessageButton.addEventListener("click", () => {
  if(messageInput.value == '') {
    alert('Please enter a message.');
    return;
  }
  result.textContent = isSpam(messageInput.value) ?  'Oh no! This looks like a spam message.' : 
  'This message does not seem to contain any spam.'
  messageInput.value = '';
});


//difference between capturing & non-capturing group 
//uncomment below codes:
// const str = "I have a red ball and a blue car";
// const regex = /(?:red|blue) \w+/g;
// const match = str.match(regex);

// console.log(match);  // Output: ['red ball', 'blue car']

// const str2 = "I have a red ball and a blue car";
// const regex2 = /(red|blue) \w+/g;
// let match2;
// while ((match2 = regex2.exec(str2)) !== null) {
//   console.log(match2[1]);  // Output: 'red' and then 'blue'
// }