# 63yuod8wn6pr7t9h

私人靜態連結整理頁。

## 檔案
- `index.html`：主頁
- `d4.js`：門市與抽選資料
- `robots.txt`：要求搜尋引擎不要抓取
- `_headers`：Cloudflare Pages 可用的 noindex / security headers

## 部署
建議把整個資料夾上傳到 Cloudflare Pages，專案名稱就使用：
`63yuod8wn6pr7t9h`

預期網址會類似：
`https://63yuod8wn6pr7t9h.pages.dev`

## 隱私說明
此版本是「低曝光」而非登入保護：
- 網址使用無意義亂數
- noindex / nofollow / noarchive
- robots.txt 全站禁止索引
- 不建立 sitemap
- 不主動提交搜尋引擎
但只要知道網址，仍然可以直接瀏覽。

## 更新抽選資料
在 `d4.js` 內的 `DRAWS` 陣列加入資料，例如：
```js
const DRAWS = [
  {
    date: "2026/08/28",
    store: "Funbox 天母SOGO",
    item: "BX-10 極限衝擊戰鬥盤",
    url: "https://lin.ee/xxxxxx"
  }
];
```
