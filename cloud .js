const paragraph = document.getElementById('myParagraph');
const text = paragraph.innerText;
let textArr = text.replaceAll(',', '').replaceAll('.', '').replaceAll(':', '').replaceAll(';', '').replaceAll('\n',' ').split(' ')
let cloud = {};

for(let word of textArr){
    cloud[word] = (cloud[word] || 0) + 1;
}


let sortedArr= Object.entries(cloud).sort((a,b) => b[1] - a[1]).slice(0, 5);
let target = sortedArr.map(a => a[0])

console.log(target)
const container = document.getElementById('myWordCloud')
let i = 1;
for(let word of target){
    let spans = document.createElement('span')
    if(word.charAt(0)===word.charAt(0).toLocaleUpperCase()){
    spans.innerText = word;
    console.log(spans.innerText)
    spans.style.textDecoration='underline'
    }
    spans.innerText = word;
    spans.setAttribute('id', `id${i++}`); 
    container.appendChild(spans);
}


//console.log("Exercise 1 - Word Cloud");
