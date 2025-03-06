# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Типы данных

Товар

```
export intrface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
    isInBasket: boolean;
}
```
Ифнормация о заказу в корзине

```
export intrface IOrderInfo {
    items: IProduct[];
    totalNumber: number | null;
    email: string;
    phone: string;
    payment: TPaymentProcess;
    adress: string;
    formError: Partial<Record<keyof IOrderInfo, string>>;
    isValid: boolean;
}
```

Виды оплаты

```
export type TPaymentProcess = 'онлайн' | 'при получении';
```

Тип только с персональными даннымы

```
export type TPersonalInfo = Pick<IOrderInfo, 'email' | 'number'>;
```

Тип только с данными о доставке

```
export type TDeliveryInfo = Pick<IOrderInfo, 'payment' | 'adress'>;
```

Тип только с данными о наполнении корзины

```
export type TOrderList = Pick<IOrderInfo, 'totalNumber' | 'items'>
```

Список категорий

```
export enum CategoryList {
    SOFT = 'софт-скил',
    OTHER = 'другое',
    EXTRA = 'дополнительное',
    BUTTON = 'кнопка',
    HARD = 'хфрд-скил',
}
```

Наполнение карточки 

```
export interface ICardDetails {
    category: HTMLElement;
    image: HTMLImageElement;
    title: HTMLElement;
    description: HTMLElement;
    price: HTMLElement;
    button: HTMLButtonElement;
    closeButton: HTMLButtonElement;
    index: HTMLElement;
}
```

Обработка клика мыши

```
export interface IMouseEvent {
    onClick: (event: MouseEvent) => void;
}
```