class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1;
        let value  = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key))
            this.cache.delete(key)
        else if(this.capacity === this.cache.size){
            let expiredCacheKey = [...this.cache.keys()][0];
            this.cache.delete(expiredCacheKey)
        }
        this.cache.set(key, value);
    }
}
