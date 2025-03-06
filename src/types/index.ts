
export interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    basketStatus: boolean;
    price: number | null; 
}

export interface IOrderInfo {
    items: IProduct[];
    totalNumber: number | null;
    email: string;
    phone: string;
    payment: TPaymentProcess;
    adress: string;
    formError: Partial<Record<keyof IOrderInfo, string>>;
    isValid: boolean;
}

export type TPaymentProcess = 'онлайн' | 'при получении';

export type TPersonalInfo = Pick<IOrderInfo, 'email' | 'phone'>;

export type TDeliveryInfo = Pick<IOrderInfo, 'payment' | 'adress'>;

export type TOrderList = Pick<IOrderInfo, 'totalNumber' | 'items'>

export enum CategoryList {
    SOFT = 'софт-скил',
    OTHER = 'другое',
    EXTRA = 'дополнительное',
    BUTTON = 'кнопка',
    HARD = 'хфрд-скил',
}

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

export interface IMouseEvent {
    onClick: (event: MouseEvent) => void;
}
