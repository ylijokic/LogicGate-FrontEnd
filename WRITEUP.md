[LINK TO ZIP](https://drive.google.com/file/d/1DSeaAYHa1KBMraZTwWMDSmNFnzixN_Vr/view?usp=share_link)

**Thought Process:**

My thought process generally followed this approach: 

- Understand what the question is asking:

  - Transform Animal data grouped by Continents into Animal data grouped by Classes.
  - ex.) ` {Asia: [Animal1(Bird), Animal2(Mammal)],Europe: [Animal3(Reptile)]} `
  - Becomes `{Bird: [Animal1], Mammal: [Animal2], Reptile: [Animal3]}`

- Plan my solution before jumping into code:
  1. Create a flattened array of Animals based on the values from the input parameter.
  2. Initialize a Set data structure to keep track of unique Animal Ids to avoid storing duplicate Animals.
  3. Utilize the reduce Array method to build our output map as we iterate through the flattened array of Animals from step 1.
  4. Make sure we have not seen the current Animal Id in our Set
  5. Check if current Animal class exists in our output Map
      - If not, initialize an empty array
  6. Push Animal object into array for the class key.
  7. Add current Animal to Set of unique Animal Ids to avoid storing duplicate Animals.
  8. Sort Animals by name for various Animal class types

- Implement the solution in code:
  - Utilize outline from my planning step to code initial working solution.

- Review/Refactor the solution:
  - Refactor initial solution to utilize es2015 syntax and patterns. Also, ensure that all variables and data structures are using the correct typescript types.

- Evaluate the solution with a test case:
  - Manually go through an example and run the included tests to make sure the solution is working as expected.

**Potential Trade-offs:**

There were a few tradeoffs that came up:
- Since the target TypeScript compiler was es2015, I was not able to utilize the Array.flat() method to create a flattened array of Animals from the input Map values. Instead of changing the target TypeScript compiler I opted to utilize the Array.concat() method to created a flattened array of Animals.
- Another tradeoff was to utilize the Array.sort() method to sort the Animals alphabetically instead of a more robust comparison such as the [Intl.Collator string comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator). This would allow for language-sensative comparisons, and is something that could be added with additional time.


**What I would do differently if I had more time:**

There are a few things I would consider doing with more time:
- I would add additional Unit Tests for the `getAnimalsByClass` method. I think there are some possible edge cases that would be worth writing tests for. For instance, testing Animal names that are very similar to ensure alphabetizing is still working as expected and testing a variety of Animal Class types could be worthwhile.

- As mentioned in the Trade-offs section, it would be worthwhile to look into the `Intl.Collator` object to sort the Animals by name alphabetically.


- I also think it would be interesting to refactor the `getAnimalsByClass` method to accept a second parameter that would make sorting more dynamic. Letting the user select how the Animals are sorted could be a worthwhile feature, and it is at least something I would explore. 

- Lastly, I would look more into time complexity performance against a larger dataset. This is related to the last question and is discussed in further detail below, but I think it is worth a deeper dive. At minimum a next step could be to use console.time() to get a general idea of the performance tradeoffs of my solution.

**How would this solution perform against a larger dataset:**

- One possible performance bottleneck in the algorithm I have coded is choosing where to sort the Animals alphabetically. Currently, the sorting is taking place after the reduce method iteration. This means that there are multiple iterations over the output Map (one iteration to create the object, and a second to sort the Animals by name). 
- This implementation was chosen over sorting every time a unique Animal is added to an array for Animal Class type. Based off of [this](https://stackoverflow.com/questions/168891/is-it-faster-to-sort-a-list-after-inserting-items-or-adding-them-to-a-sorted-lis) StackOverflow discussion it seems that it could be more performant to finish the reduce method iteration, and then have a followup iteration where we loop through and sort the entries of the output Map.
- Overall, I think that this implementation's performance is dependent on two factors:
  1.  The number of total animals in our input Map
  2.  The number of unique Animal Class Types.
