const psi = require("psi");
const process = require("process");
const urlInput = process.argv[2];
const strategyInput = process.argv[3];
const thresholdInput = process.argv[4];
const keyInput = process.argv[5];
const run = async () => {
  try {
    const url = urlInput;
    if (!url) {
      throw new error("Url is required to run Page Speed Insights.");
      return;
    }

    const key = keyInput;

    const threshold = thresholdInput;
    const strategy = strategyInput;
    // Output a formatted report to the terminal
    console.log(`Running Page Speed Insights for ${url}`);
    await psi.output(url, {
      ...(key ? { key } : undefined),
      ...(key ? undefined : { nokey: "true" }),
      strategy,
      format: "cli",
      threshold,
    });
  } catch (error) {
    throw error.message;
  }
};

run();
