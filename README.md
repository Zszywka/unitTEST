You should:
1. install package.json:
-> npm init -y
2. install framework Mocha:
-> npm install --save-dev mocha
3. describe test file:
index.test.js (for test file index.js)
--------------------------------------------------------------------------------
4. run tests:
4a. write "test": "mocha index.test.js" in scripts: package.json
(or "mocha ./src/**/*.test.js" if you have more test in scr catalog)
4b. write in the console: npm run test (or use shortcut: npm t)
--------------------------------------------------------------------------------
5. mode --watch: (tests work all the time)
write in package.json: "test:watch": "mocha -w index.test.js",
--------------------------------------------------------------------------------
6. if you want do steep by steep, you use flag -b:
write in package.json: "test": "mocha -b index.test.js",
7. if we want to focus on a specific test or test suite:
we write in file test: describe.only('minutes', () => {...}
8. if we want to disable the test or test suit:
we write in file test: it.skip('should work for one digit minutes and seconds', () => {...}
(we use point 8 only we work for that test,there is no point in holding tests
that are never run )
