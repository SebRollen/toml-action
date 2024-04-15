const core = require('@actions/core');
const github = require('@actions/github');
const toml = require('@iarna/toml');
const fs = require('fs');

try {
  const file = core.getInput('file');
  const field = core.getInput('field');
  var fields = field.split('.');
  var str = fs.readFileSync(file);
  var parsed = toml.parse(str);
  var value = parsed;
  fields.forEach(function (f) {
    value = value?.[f];
  });
  core.setOutput("value", value);
} catch (error) {
  core.setFailed(error.message);
}
