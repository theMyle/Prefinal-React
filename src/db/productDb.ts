export interface IProduct {
    image: string;
    name: string;
    category: string;
    stock: number;
    price: number;
    quantitySelected: number;
}

export const productDb: IProduct[] = [

    // {
    //     image: "none",
    //     name: "Wireless Earbuds",
    //     category: "electronics",
    //     stock: 0,
    //     price: 60.50,
    //     quantitySelected: 0
    // },

    {
        image: "none",
        name: "Wireless Earbuds",
        category: "electronics",
        stock: 9,
        price: 60.50,
        quantitySelected: 0
    },
    {
        image: "none",
        name: "Smart Watch",
        category: "wearables",
        stock: 90,
        price: 120.78,
        quantitySelected: 0
    },
    {
        image: "none",
        name: "Smart Phone",
        category: "phones",
        stock: 20,
        price: 200.78,
        quantitySelected: 0
    },

];