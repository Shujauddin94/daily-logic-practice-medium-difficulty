// Given an array of non-negative integers representing the heights of bars in a histogram, find the largest rectangale that can be formed the histogram.
function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0); // Add a sentinel value to pop all remaining bars in the stack at the end

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}
console.log(largestRectangleArea([2,1,5,6,2,3])); // Output: 10

//  Another way to solve help of chat gpt
function largestRectangleArea(heights) {
    let maxArea = 0;
    const n = heights.length;
    for (let i = 0; i < n; i++) {
        let minHeight = heights[i];
        for (let j = i; j < n; j++) {
            minHeight = Math.min(minHeight, heights[j]);
            const area = minHeight * (j - i + 1);
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}

console.log(largestRectangleArea([2,1,5,6,2,3])); // Output: 10