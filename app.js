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
console.log ('My Previous Experience')

function displayPosition (title, where, whatDo) {
    console.log('*' + title + ' at ' + where + ' - ' + whatDo)
    };

displayPosition (jobBook['title'],jobBook['where'],jobBook['whatDo']);
displayPosition (jobMedia['title'],jobMedia['where'],jobMedia['whatDo']);
displayPosition (jobComic['title'], jobComic['where'], jobComic['whatDo']);
displayPosition (jobAuto['title'], jobAuto['where'], jobAuto['whatDo']);
displayPosition (jobTRC['title'], jobTRC['where'], jobTRC['whatDo']);

console.log ('');
console.log ('My Skills:');

let skills = [
{skill: 'Teaching', coolness: true}, 
{skill: 'Quilting'},
{skill: 'Shen Lung Kung Fu', coolness: true},
{skill: 'High Animal Kin'},
{skill: 'Ran over 200,000 console logs in less than an hour', coolness: true},
{skill: 'Painting'},
{skill: 'Pinterest'},
{skill: 'Creativity'},
{skill: 'Kitty wrangling', coolness: true},
{skill: 'Walt level Disney Fan'},
{skill: 'Maker of rainbows-in my hair', coolness: true},
{skill: 'Leads a funkoPop army'},
{skill: 'Finally beat this lab!', coolness: true}
];

function displaySkill (skills) {
    for (let i=0; i < skills.length; i++ ) {
        if (skills[i]['coolness'] === true) {
            console.log ('* BAM: ' + skills[i]['skill'])
        }
        else { console.log ('* ' + skills[i]['skill'])
        }
    }
}
displaySkill(skills);
