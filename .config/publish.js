const execSync = require('child_process').execSync,
  packages = [
    'core'
  ];

packages.map(package => {
  const packagePath = `${__dirname}/../dist/@ngx-formly/${package}`;

  execSync(`cd ${packagePath} && npm publish --access public`);
});
