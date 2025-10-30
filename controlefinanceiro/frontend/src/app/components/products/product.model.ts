export interface Product  {
    id: string;
    name: string;
    price: number | null;
    category: string;
}

export interface NewProduct  {
    name: string;
    price: number | null;
    category: string;
}

//export type CreateProductDto = Omit<Product, 'id'>;