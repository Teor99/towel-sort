// You should implement your task here.

module.exports = function towelSort(matrix) {
    const resultArr = [];
    if (matrix === undefined) return resultArr;
    let isRightDirection = true;

    for (let i = 0; i < matrix.length; i++) {
        const curArr = matrix[i];
        if (isRightDirection) {
            for (let j = 0; j < curArr.length; j++) {
                resultArr.push(curArr[j]);
            }
        } else {
            for (let j = curArr.length - 1; j >= 0; j--) {
                resultArr.push(curArr[j]);
            }
        }

        isRightDirection = !isRightDirection;
    }

    return resultArr;
}
