const vowel=(str)=>{
    let count=0;
    for(let ch of str){
        if(ch=='a'||
            ch=='e'||
            ch=='i'||
            ch=='0'||
            ch=='u'
        )
        count++;

    }
    return count;
}
console.log(vowel("leena"));