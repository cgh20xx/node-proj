var path = require('path');
// 抓這隻js的目錄路徑
console.log(__dirname);
// /Users/hank/my-proj/node-proj

// 抓這隻js的完整檔案路徑
console.log(__filename);
// /Users/hank/my-proj/node-proj/app-path.js

// 取得字串的目錄 (跟實際有無這個路徑無關)
console.log(path.dirname('/aa/bb/cc.js'));
// /aa/bb

// 路徑字串合併 (跟實際有無這個路徑無關)
console.log(path.join(__dirname, '/aa/bb/cc.js'));
// /Users/hank/my-proj/node-proj/aa.js

// 取得字串檔名 (跟實際有無這個路徑無關)
console.log(path.basename('/aa/bb/cc.js'));
// cc.js

// 取得字串副檔名 (跟實際有無這個路徑無關)
console.log(path.extname('/aa/bb/cc.js'));
// .js

// 分析字串路徑 (跟實際有無這個路徑無關)
console.log(path.parse('/aa/bb/cc.js'));
// {root: '/', dir: '/aa/bb', base: 'cc.js', ext: '.js', name: 'cc'}
