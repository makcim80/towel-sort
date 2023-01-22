
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {return []}
    return matrix.reduce((arr, cur, ind) => {
        if (ind % 2 != 0) {
            cur.reverse()
        }
        return [...arr, ...cur]
    },[]);
}
