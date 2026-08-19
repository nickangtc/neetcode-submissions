// 10 mins - attempt 1, incomplete
// 10 mins - attemp 2, 3/49 test cases passed, incomplete
// 5 mins - attempt 3
// 10 mins - understand and work solution on paper
// 10 mins - attempt 4, incomplete
// 10 mins - attempt 5, solved
class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = new Array(temperatures.length).fill(0);
        const stack: number[] = []; // indices of unresolved days

        temperatures.forEach((newTemp, newInd) => {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] < newTemp) {
                const oldInd = stack.pop();
                res[oldInd] = newInd - oldInd;
            }
            stack.push(newInd);
        });

        return res;
    }
}
