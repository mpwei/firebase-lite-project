# 輕量化專案
```
基於Vue.js + Firestore建構而成的輕量化專案，不須額外建置資料庫與後端，完全由前端執行CURD操作。
```

### 安裝依賴套件
```
npm install
```

### 設定Firebase

於frontend/src/firebase新增檔案config.js

```
export default {
	apiKey: YOUR-VALUE,
	authDomain: YOUR-VALUE,
	databaseURL: YOUR-VALUE,
	projectId: YOUR-VALUE,
	storageBucket: YOUR-VALUE,
	messagingSenderId: YOUR-VALUE,
	appID: YOUR-VALUE,
}
```

### 執行開發環境
```
npm run serve
```

### 建構正式環境
```
npm run build
```
