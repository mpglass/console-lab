const name = 'Michelle Glass';
const field = 'Bootcamp Student';
const dscrp = 'An artistc, excitable Disney princess in disguise; trying to learn to code, with the help of her compaion, the coding corgi.';
let interests = ['Painting', 'Sewing -mostly quilting', 'Crafts', 'Disney', 'Corgis', 'Cats', 'Animals in general', 'Coding', 'Cooking' ];
let jobs = ['Finder of "a book" at the place of a million books', 'Pricer of DvDs and CDs at the place with the buys are best', 'Wrangler of MTG and YGO! players and seller of comics at the place where the crisis started', 'Parts messenger at the luckyest auto parts store', 'Teacher of crafts and maker of messes at the only dedicated leasure services center in the state, with a singular populace'];
let skills = ['Teaching', 'Quilting', 'Shen Lung Kung Fu', 'High Animal Kin','Ran over 200,000 console logs in less than an hour', 'Painting','Pinterest', 'Creativity','Kitty wrangling', 'Walt level Disney Fan', 'Maker of rainbows-in my hair', 'Leads a Pop army'];

const up = name.toUpperCase()

console.log ('Name: ' + (up));
console.log ('Career: ' + (field));
console.log ('Description: ' + (dscrp));
console.log ('');
console.log ('Interests:'); 

for (let i=0; i< interests.length; i++) {
    console.log ('*' + interests[i])
}
console.log ('');


function displayPosition () {

} 