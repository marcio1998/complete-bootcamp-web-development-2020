function fibonacciGenerator(n){
    var i = 0;
    var sequence = [];
    for(i;i<=n;i++){
        if(i===0){
            sequence.push(i);
        }else if(i===1){
            sequence.push(i);
        }else{
            sequence.push(sequence[i-1] + sequence[i-2]);
        }
    }
    return sequence;
}

console.log(fibonacciGenerator(50));