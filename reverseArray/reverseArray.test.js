const reverseArray = require("./reverseArray");

test("adds 1 + 2 to equal 3", () => {
	expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});
