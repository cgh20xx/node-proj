# node-proj

## Path 小抄

當你載入 var path = require('path'); ，便可用下述語法取得檔案與目錄路徑，詳細也可瀏覽 Node.js PATH API文件

抓目錄路徑： path.dirname('/xx/yy/zz.js') 回傳 /xx/yy

路徑合併：path.join(__dirname,'/xx') 回傳 前後路徑合併

抓檔名： path.basename('/xx/yy/zz.js') 回傳 zz.js

抓副檔名： path.extname('/xx/yy/zz.js') 回傳 js

分析路徑： path.parse('/xx/yy/zz.js') 回傳 上述綜合物件

## package.json 版本號說明
大版本.次版本.bug修正
latest 表示安裝指定最新版 1.1.1
^ 表示安裝次版本，安裝 1.x.x
~ 表示安裝bug修正版本，安裝 1.1.x
ex: "express": "^4.17.3" 表示更新到 4.x.x

# NPM 常用指令小抄

npm -v ：觀看 NPM 版本

npm init ：新增 package.json

npm install [模組名稱][安裝位置] ：安裝 NPM 模組，安裝位置常用屬性如下：

    -g 全域安裝
    --save 安裝模組並寫入 package.json 的 "dependencies"
    --save-dev 安裝模組並寫入 package.json 的 "devDependencies"

npm list ：顯示安裝的 NPM 列表

npm uninstall [模組名稱] ：刪除專案裡的 NPM