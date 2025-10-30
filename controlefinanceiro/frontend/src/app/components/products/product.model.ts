export interface Product  {
    id?: number;
    name: string;
    price: number | null;
    category: string;
}

//export type CreateProductDto = Omit<Product, 'id'>;