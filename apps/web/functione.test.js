const functione = require("./functione");

it("function returns the correct result", async () => {
  const result = await functione();

  expect(result).toBe("This is the result");
});

// the code above doesnot use fake timer and will take time
// jest.useFakeTimers();
// test("function returns the correct result", async () => {
//   const promise = functione() ;

//   // jest.advanceTimersByTime(2000); // Fast-forward timers by 2000ms
//   jest.runAllTimers();

//   const result = await promise;
//   expect(result).toBe("This is the result");
// });

// const startTime = performance.now();
// const endTime = performance.now();
// const timeTaken = endTime - startTime;
