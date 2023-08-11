# Шаблон модуля

## Getting started
Инициализация
```
git init .
```
Установка 
```
npx create-next-app . -e https://github.com/slonum/create-slonum-app
```
## ENV переменные
- NEXT_PUBLIC_NODE
- NEXT_PUBLIC_FRONT 
- NEXT_PUBLIC_URL 

NEXT_PUBLIC_URL для локальной сборки не добавляется!

Пример в .example.env

## Необходимо настроить под проект
 - НАЗВАНИЕ_МОДУЛЯ
 - поле "name" в package.json
 - title в файле _app.tsx
 - счетчики метрики

## Запуск проекта
В режиме разработки: 
Чтение env переменных происходит из .env.development  файла
```
npm run dev
```
В production: 
Чтение env переменных происходит из .env.production файла
Чтение env переменных происходит из .env.production файла
```
npm run build
npm run start
```
 
## Запуск Storybook
```
npm run build-storybook
npm run storybook
```
