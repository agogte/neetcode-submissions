class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = [];
        // for(let i = 0; i< temperatures.length; i++){
        //     let noOfDays = 0;
        //     temperatures.shift();
        //     console.log(temperatures)
        // }
        while (temperatures.length > 0) {
            let noOfDays = 0;
            let firstDay = temperatures[0];
            let resCount = res.length;
            temperatures.shift();
            for(let i = 0; i < temperatures.length; i ++){
                if (temperatures[i] > firstDay){
                    res.push(i+1);
                    break;
                }
                
            }
            if(res.length === resCount)
                res.push(0)
            console.log(temperatures);
        }
        return res
    }
}
