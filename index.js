

const path =require("path")

// console.log(path.sep); // \(window) (mac ,linux)/ yeh sign yeh sign dekhte hai

// console.log(process.env.path);

// console.log(path.delimiter);

const filePath1 ='\public_html\home\index.html'

const currentFilePath = __filename;
// console.log(currentFilePath);
const dirname = __dirname;
// console.log(dirname);

let reult = path.basename(currentFilePath)
// console.log('basename',reult);//basename
let basenameWithoutExt = path.basename(currentFilePath,'.js')
// console.log('basenameWithoutExt', basenameWithoutExt);
let dirname1 = path.dirname(currentFilePath)
// console.log("dirname",dirname1);

// console.log('ext',path.extname(currentFilePath));

let filePath2 = path.format({
    dir:'\public_html\home',
    base:'index.js'
})
// console.log('filePath2 =>',filePath2);

// console.log('isAbsolute',path.isAbsolute(currentFilePath));
// console.log('isAbsolute',path.isAbsolute('/index.js'));
// console.log('isAbsolute',path.isAbsolute('./index.js'));
// console.log('isAbsolute',path.isAbsolute('../index.js'));

let placedir = path.join('\home','js','dir','index.bs')
// console.log('pathTodir =>',placedir);

// console.log('pars =>',path.parse(currentFilePath));

// console.log('relative path =>',path.relative('/home/user/js','/home/cartoo/js'));

console.log('reolve',path.resolve());

console.log('normalization',path.normalize('/home//user//js'));


