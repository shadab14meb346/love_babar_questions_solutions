const reverseArray = require("./reverseArray");

test("reverse of the input array", () => {
	expect(reverseArray([1, 2, 3])).toEqual([1, 2, 3].reverse());
	expect(reverseArray([1, 2, 3, 6, 1, 9, 4])).toEqual(
		[1, 2, 3, 6, 1, 9, 4].reverse()
	);
});
