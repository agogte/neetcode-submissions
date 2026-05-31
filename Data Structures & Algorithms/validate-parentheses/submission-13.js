class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0)
            return false;
        let opening = ["(", "[", "{"];
        let isValid = false;
        if (!opening.includes(s[0])){
            return false;
        }
        s = s.split("");
        console.log(s)
        let stack = [];
        for (let x of s){
            
            if (opening.includes(x)){
                stack.push(x);
                console.log("stack = ", stack);
                continue;
            }
            if(!opening.includes(x) && stack.length === 0){
                isValid = false;
                break;
            }
            if(stack.length === 0){
                break;
            }
            let top = stack.pop();
            console.log("top = ", top, "x = ", x)
            if((top === "(" && x === ")") || (top === "[" && x === "]") ||(top === "{" && x === "}")){
                isValid = true;
                continue;
            }
            else{
                isValid = false;
                break;
            }
        }
        return isValid && stack.length === 0;
    }
}
