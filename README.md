# Модуль конкурса рисунков

## Getting started
Первоначальная настройка
```
git clone https://gitlab.com/slonum/slonum-fraction-calculator-frontend.git
cd slonum-fraction-calculator-frontend
npm ci
```
## ENV переменные
- NEXT_PUBLIC_NODE
- NEXT_PUBLIC_FRONT 
- NEXT_PUBLIC_URL 

NEXT_PUBLIC_URL для локальной сборки не добавляется!

Пример в .example.env

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
