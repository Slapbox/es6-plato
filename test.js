var escomplex = require('typhonjs-escomplex');
 
var source = 'console.log(\'test\');';
 
var report = escomplex.analyzeModule(source);

console.log(JSON.stringify(report));