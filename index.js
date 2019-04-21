const fs = require('fs')

const promisify = require('util').promisify

const read = promisify(fs.readFile)

async function test () {
  const content = await read('./1.txt')
  console.log(content.toString());
}

test()