You should:
1. install package.json:
-> npm init -y
2. install framework Mocha:
-> npm install --save-dev mocha
3. describe test file:
index.test.js (for test file index.js)
4. run tests:
4a. write "test": "mocha index.test.js" in scripts: package.json
(or "mocha ./src/**/*.test.js" if you have more test in scr catalog)
4b. write in the console: npm run test (or use shortcut: npm t)
