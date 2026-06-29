class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let result = [];
        // iterate over operations and keep appending to result
        for(let op of operations){
            if (!isNaN(op)) {
                result.push(Number(op));
            }
            else if(op === "C")
                result.pop();
            else if(op === "+"){
                let a = result[result.length - 1] + result[result.length - 2]
                result.push(Number(a))
            }
            else if(op === "D")
                result.push(result[result.length - 1] * 2);
            
        }
        console.log(result)
        return result.reduce((acc, curr) => acc + curr, 0)
    }
}
