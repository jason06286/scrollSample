# Infinite Scroll

## 使用技術

這次使用 vite 做開發， UI 框架使用 Tailwind

使用 compensation api 做邏輯拆分

## 重點程式碼

```

const calcDisplay = () => {
  // 實際顯示的高度=可視視窗高度 + 滾動距離 - 上方 navbar 高度
  const height = window.innerHeight + window.scrollY - 152;

  // 252 為卡片的高度
  const num = Math.floor(height / 252);

  // 目前可實際顯示卡片的數量 = 一行容納數量 * 一列容納數量
  const total = size.value * num;

  if (displayData.value.length === data.value.length) return;

  for (let j = displayData.value.length; j < total; j += 1) {
    const item = data.value[j];
    displayData.value.push(item);
  }
};
```

## Coding Style

- Vue 3 Script Setup
- Vue SFC (由上而下排列)
  - script: `<script setup>`
  - template: `<template>`
  - style: `<style scoped>`

## Vite 插件功能

- src/components
  - 此資料夾下的 Component 可以在任何 .vue 檔案中直接使用不需用 import。
  - https://github.com/antfu/vite-plugin-components
- import 自動導入
  - 系統會自動偵測 `.vue.js.ts` 檔，並引入 `vue、vue router、Pinia`
  - https://github.com/antfu/unplugin-auto-import

## 開發

```
# install deps
npm install

# run dev server
npm run dev

# run build
npm run build

```
