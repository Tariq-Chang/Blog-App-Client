function diagonalDifference(arr) {
    // Write your code here
    let index = arr.length-1;

    let ltrSum = 0;
    let rtlSum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            // sum of left to right diagonal
            if(i === j) ltrSum += arr[i][j];
            // sum of right to left diagonal
            if(j === index){
                rtlSum += arr[i][index];
            }
        }
        index--;
    }
    // absolute different of diagonal sums
    let difference = Math.abs(ltrSum - rtlSum);
    
    return difference
}