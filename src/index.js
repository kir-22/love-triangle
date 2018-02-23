/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var count = 0;
    for (let i = 0; i < preferences.length; i++) {
        let spok=i+1;
        let a=preferences[i]-1;
        let b=preferences[a]-1;
        if (spok == preferences[b] && preferences[i] != preferences[a] ) {
            count++;
            delete preferences[i];
            delete preferences[a];
            delete preferences[b];
        }
    }
    return count;
};

