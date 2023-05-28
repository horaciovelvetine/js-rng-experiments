let exampleDataSet= [
	{
		integer: 1,
		occurs: 91,
	},
	{
		integer: 2,
		occurs: 93,
	},
	{
		integer: 3,
		occurs: 96,
	},
	{
		integer: 4,
		occurs: 103,
	},
	{
		integer: 5,
		occurs: 100,
	},
	{
		integer: 6,
		occurs: 95,
	},
	{
		integer: 7,
		occurs: 82,
	},
	{
		integer: 8,
		occurs: 72,
	},
	{
		integer: 9,
		occurs: 112,
	},
	{
		integer: 10,
		occurs: 100,
	},
	{
		integer: 11,
		occurs: 112,
	},
	{
		integer: 12,
		occurs: 122,
	},
	{
		integer: 13,
		occurs: 107,
	},
	{
		integer: 14,
		occurs: 107,
	},
	{
		integer: 15,
		occurs: 102,
	},
	{
		integer: 16,
		occurs: 101,
	},
	{
		integer: 17,
		occurs: 104,
	},
	{
		integer: 18,
		occurs: 88,
	},
	{
		integer: 19,
		occurs: 105,
	},
	{
		integer: 20,
		occurs: 93,
	},
	{
		integer: 21,
		occurs: 88,
	},
	{
		integer: 22,
		occurs: 103,
	},
	{
		integer: 23,
		occurs: 93,
	},
	{
		integer: 24,
		occurs: 90,
	},
	{
		integer: 25,
		occurs: 115,
	},
	{
		integer: 26,
		occurs: 78,
	},
	{
		integer: 27,
		occurs: 98,
	},
	{
		integer: 28,
		occurs: 89,
	},
	{
		integer: 29,
		occurs: 101,
	},
	{
		integer: 30,
		occurs: 97,
	},
	{
		integer: 31,
		occurs: 118,
	},
	{
		integer: 32,
		occurs: 106,
	},
	{
		integer: 33,
		occurs: 116,
	},
	{
		integer: 34,
		occurs: 97,
	},
	{
		integer: 35,
		occurs: 107,
	},
	{
		integer: 36,
		occurs: 109,
	},
	{
		integer: 37,
		occurs: 96,
	},
	{
		integer: 38,
		occurs: 97,
	},
	{
		integer: 39,
		occurs: 97,
	},
	{
		integer: 40,
		occurs: 87,
	},
	{
		integer: 41,
		occurs: 106,
	},
	{
		integer: 42,
		occurs: 103,
	},
	{
		integer: 43,
		occurs: 91,
	},
	{
		integer: 44,
		occurs: 86,
	},
	{
		integer: 45,
		occurs: 103,
	},
	{
		integer: 46,
		occurs: 87,
	},
	{
		integer: 47,
		occurs: 110,
	},
	{
		integer: 48,
		occurs: 102,
	},
	{
		integer: 49,
		occurs: 93,
	},
	{
		integer: 50,
		occurs: 98,
	},
	{
		integer: 51,
		occurs: 121,
	},
	{
		integer: 52,
		occurs: 115,
	},
	{
		integer: 53,
		occurs: 88,
	},
	{
		integer: 54,
		occurs: 95,
	},
	{
		integer: 55,
		occurs: 109,
	},
	{
		integer: 56,
		occurs: 111,
	},
	{
		integer: 57,
		occurs: 123,
	},
	{
		integer: 58,
		occurs: 99,
	},
	{
		integer: 59,
		occurs: 99,
	},
	{
		integer: 60,
		occurs: 84,
	},
	{
		integer: 61,
		occurs: 87,
	},
	{
		integer: 62,
		occurs: 106,
	},
	{
		integer: 63,
		occurs: 97,
	},
	{
		integer: 64,
		occurs: 104,
	},
	{
		integer: 65,
		occurs: 104,
	},
	{
		integer: 66,
		occurs: 101,
	},
	{
		integer: 67,
		occurs: 113,
	},
	{
		integer: 68,
		occurs: 99,
	},
	{
		integer: 69,
		occurs: 112,
	},
	{
		integer: 70,
		occurs: 102,
	},
	{
		integer: 71,
		occurs: 121,
	},
	{
		integer: 72,
		occurs: 103,
	},
	{
		integer: 73,
		occurs: 101,
	},
	{
		integer: 74,
		occurs: 88,
	},
	{
		integer: 75,
		occurs: 91,
	},
	{
		integer: 76,
		occurs: 89,
	},
	{
		integer: 77,
		occurs: 106,
	},
	{
		integer: 78,
		occurs: 101,
	},
	{
		integer: 79,
		occurs: 84,
	},
	{
		integer: 80,
		occurs: 90,
	},
	{
		integer: 81,
		occurs: 107,
	},
	{
		integer: 82,
		occurs: 90,
	},
	{
		integer: 83,
		occurs: 91,
	},
	{
		integer: 84,
		occurs: 87,
	},
	{
		integer: 85,
		occurs: 119,
	},
	{
		integer: 86,
		occurs: 111,
	},
	{
		integer: 87,
		occurs: 105,
	},
	{
		integer: 88,
		occurs: 104,
	},
	{
		integer: 89,
		occurs: 105,
	},
	{
		integer: 90,
		occurs: 87,
	},
	{
		integer: 91,
		occurs: 83,
	},
	{
		integer: 92,
		occurs: 98,
	},
	{
		integer: 93,
		occurs: 102,
	},
	{
		integer: 94,
		occurs: 114,
	},
	{
		integer: 95,
		occurs: 102,
	},
	{
		integer: 96,
		occurs: 109,
	},
	{
		integer: 97,
		occurs: 94,
	},
	{
		integer: 98,
		occurs: 105,
	},
	{
		integer: 99,
		occurs: 97,
	},
	{
		integer: 100,
		occurs: 101,
	},
];

const exampleDataSetBreakdown = {
	type: 'Dice Rolls',
	inputs: {
		min: '1',
		max: '100',
		rolls: '10000',
	},
	minimum: { integer: 8, occurs: 72 },
	lowerQuartile: { integer: 2, occurs: 93 },
	meanNearest: [
		{ integer: 5, occurs: 100 },
		{ integer: 10, occurs: 100 },
	],
	upperQuartile: { integer: 77, occurs: 106 },
	maximum: { integer: 57, occurs: 123 },
};

export function MeanChart() {}
