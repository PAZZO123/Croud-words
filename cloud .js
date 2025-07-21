const paragraph = document.getElementById('myParagraph');
const text = paragraph.innerText;
//console.log(text);
let textArr = text.replaceAll(',', '').replaceAll('.', '').replaceAll(':', '').replaceAll(';', '').replaceAll('\n',' ').split(' ')
//console.log(textArr);
let cloud = {};

for(let word of textArr){
    cloud[word] = (cloud[word] || 0) + 1;
}


//console.log(cloud);

let sortedArr = Object.entries(cloud).sort((a,b) => b[1] - a[1]).slice(0, 12);
let target = [...sortedArr.map(a => a[0])]

console.log(target)
const container = document.getElementById('myWordCloud')
let i = 1;
for(let word of target){
    let spans = document.createElement('span')
    spans.innerText = word;
    spans.setAttribute('id', `id${i++}`); 
    container.appendChild(spans);
}


console.log("Exercise 1 - Word Cloud");
