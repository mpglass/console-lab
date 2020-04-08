const name = 'Michelle Glass';
const field = 'Bootcamp Student';
const dscrp = 'An artistc, excitable Disney princess in disguise; trying to learn to code, with the help of her compaion, the coding corgi.';
let interests = ['Painting', 'Sewing -mostly quilting', 'Crafts', 'Disney', 'Corgis', 'Cats', 'Animals in general', 'Coding', 'Cooking' ];

let jobBook = {
    title: 'Tracker' ,  
    where: 'The place of a million books', 
    whatDo: 'Finder of "a book" '
};
let jobMedia = {
    title: 'Shopkeeper',
    where: 'The place where the buys are best', 
    whatDo: 'Pricer of DvDs and CDs'
}; 
let jobComic = {
    title: 'Archon',
    where: 'the place where the destrucion started',
    whatDo: 'Wrangler of the MTG and YGO! players, seller of comics, and reciever of all items'
}  
let jobAuto = {
    title: 'Parts Courier',
    where: 'The luckyest auto parts store',
    whatDo: 'Conveyer of parts to the ones who fix' 
};
let jobTRC = {
    title: 'Manager of Messes', 
    where: 'The center of recreation',
    whatDo: 'Teacher of crafts and maker of messes' 
};

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