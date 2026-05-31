class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //create a map with {key: <sorted word>, value: [list, of, words]}
        let hashmap = new Map();
        strs.forEach(el => {
            let key = el.split('').sort().join('');
            if(hashmap.has(key)){
                hashmap.get(key).push(el)
            }
            else
                hashmap.set(key, [el])
        })
        return [...hashmap.values()]
    }
}
