function Count(text, char){
    let count=0;
    for(let i=0;i<text.length;i++){
        if(text[i]==char){
            count++;
        }
    }
    return count;
}
console.log(Count("abc",'d'));
console.log(Count("hello world",'o'));
console.log(Count("aaa bbb a",'a'));