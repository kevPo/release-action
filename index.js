const core = require('@actions/core');
const github = require('@actions/github');

try {
  const releaseNumber = core.getInput('release-number');
  console.log(`Release Number: ${releaseNumber}!`);
  const time = (new Date()).toTimeString();
  const message = `Successfully persisted ${releaseNumber} and stuff at ${time} (not really but you know 😎)`;
  core.setOutput("message", message);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}