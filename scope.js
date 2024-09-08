const a = 1; const b = 8; const c = 6;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = -3;

    (function thirdFunction () {
      const a = 7; const c = +3;

      (function fourthFunction () {
        const a = -6; const c = -6;
      })()
    })()
  })()
})()

console.log(`a: ${a}, b: ${b}, c: ${c}`);