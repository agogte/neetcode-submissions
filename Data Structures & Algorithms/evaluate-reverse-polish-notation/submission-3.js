class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operators = ["+", "-", "*", "/"]
        tokens.forEach(el => {
            let num1 = 0;
            let num2 = 0;
            let res = 0;
            if (operators.includes(el) && stack.length >= 2){
                num2 = stack.pop();
                num1 = stack.pop();
                res = this.eval(num1, num2, el)
                stack.push(res)
            }
            else{
                stack.push(parseInt(el));
            }
        })
        return stack.pop()
    }
    eval(num1, num2, op){
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        switch(op){
            case "+": return num1 + num2;
            case "-": return num1 - num2;
            case "*": return num1 * num2;
            case "/": return Math.trunc(num1 / num2);
            default: return 0;
        }
    }
}
