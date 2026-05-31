class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map();
        for (let s of strs){
            let key = s.split("").sort().join('');
            if(res.has(key))
                res.get(key).push(s);
            else 
                res.set(key, [s])
            // console.log("pass :",s, res)
        }
        return [...res.values()]
    }
}
