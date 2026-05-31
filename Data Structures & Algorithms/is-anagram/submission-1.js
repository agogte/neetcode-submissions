class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = {};

        for (const el of s) {
            count[el] = (count[el] || 0) + 1;
        }

        for (const el of t) {
            if (!count[el]) return false;
            count[el]--;
        }

        return true;
    }
}
