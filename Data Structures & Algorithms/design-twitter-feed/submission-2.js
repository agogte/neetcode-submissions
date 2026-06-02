class Twitter {
    constructor() {
        this.postMap = new Map(); //{key: userId, val: Set(tweetIds)}
        this.followMap = new Map(); //{key: userId, val: Set(followings' userid)};
        this.timeStamp = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        let newTweet = { id: tweetId, time: this.timeStamp++ };
        this.postMap.set(userId, (this.postMap.get(userId) ?? []).concat(newTweet));
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        //assume tweetId is primary key, auto increment in DB, so it higher Id is latest tweet.
        let posts = [];
        let followees = this.followMap.get(userId) ?? new Set([userId]);

        for(let followee of [...followees]){
            let followeeTweets = this.postMap.get(followee);
            if (followeeTweets)
                posts.push(...followeeTweets);
        }
        return posts.sort((a, b) => b.time - a.time)
                    .slice(0,10)
                    .map(a => a.id);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this.followMap.set(followerId, (this.followMap.get(followerId) ?? new Set([followerId])).add(followeeId));
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(followerId !== followeeId)
            this.followMap.get(followerId).delete(followeeId);
    }
}
