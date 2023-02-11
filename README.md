## Hypothesis

Reading about the Shades of Morton Mini game [here](<https://oldschool.runescape.wiki/w/Shades_of_Mort%27ton_(minigame)>) got me to thinking about Random Number Generation and how its used to 'roll' rewards for players, then it occured to me that the amount of RNG in the game means they must compute a whole lot of dice rolls. This React app is built to explore the RNG built in to TS/JS while also getting the chance to explore [Recharts](https://recharts.org/en-US) and ways to visualise data.

## Goals

- [x] Generates random number within a min/max range
- [x] Iterates Dice Rolls _i_ times and stores the results info
- [x] Sorts, stores and analyzes occurences of each result
- [x] Displays results of dice roll batch using Recharts and their bargraph API [re](https://recharts.org/en-US/api/BarChart)
