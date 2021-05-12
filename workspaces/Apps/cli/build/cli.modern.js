#!/usr/bin/env node
module.exports = (async (args = process) => {
  const CONSTANTS = require('@n-node/constants');

  let _args;

  try {
    await console.log(` `);
    await console.log(`N-Node (n-node/nn)- CLI`);
    await console.log(` `);
    await console.log(CONSTANTS);
    _args = await args; // await console.log(_args)

    await process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
//# sourceMappingURL=cli.modern.js.map
