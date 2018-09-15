/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let count = 0;
    
    preferences.forEach(function (item, i, array){
        let spok=i+1, 
            a=preferences[i]-1, 
            b=preferences[a]-1;
        if (spok === preferences[b] && preferences[i] != preferences[a]) {
             count++;
             preferences[i] = null;
             preferences[a] = null;
             preferences[b] = null;
        }
    });
    return count;
};

