let count = 0;
function add(target){
    const find = target.parentElement.parentElement.children[1];
    find.innerText = count+=1;
}
function sub(target){
    const find = target.parentElement.parentElement.children[1];
    find.innerText = count-=1;
}