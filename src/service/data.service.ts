import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public categoryList: any = [{
        name: 'Jacket',
        id: 1
    },
    {
        name: 'Suit',
        id: 2
    },
    {
        name: 'Jeans',
        id: 3
    },
    {
        name: 'Coat',
        id: 4
    },
    {
        name: 'Sweater',
        id: 5
    },
    {
        name: 'Sportswear',
        id: 6
    }
    ];

    public productList: any = [{
        id: 1001,
        category: 'Jacket',
        name: 'Leather Jacket',
        price: 5000
    },
    {
        id: 1002,
        category: 'Jacket',
        name: 'Jean Jacket',
        price: 1500
    },
    {
        id: 1003,
        category: 'Suit',
        name: 'Blazer',
        price: 7000
    },
    {
        id: 1004,
        category: 'Suit',
        name: 'Tuxedo',
        price: 2500
    },
    {
        id: 1005,
        category: 'Jeans',
        name: 'Bootcut',
        price: 2000
    },
    {
        id: 1006,
        category: 'Jeans',
        name: 'Flare Jeans',
        price: 3000
    },
    {
        id: 1007,
        category: 'Coat',
        name: 'Trench Coat',
        price: 6500
    },
    {
        id: 1008,
        category: 'Coat',
        name: 'Duffle Coat',
        price: 5500
    },
    {
        id: 1009,
        category: 'Sweater',
        name: 'Cardigan',
        price: 1000
    },
    {
        id: 1010,
        category: 'Sweater',
        name: 'Turtleneck',
        price: 800
    },
    {
        id: 1011,
        category: 'Sportswear',
        name: 'Shorts',
        price: 500
    },
    {
        id: 1012,
        category: 'Sportswear',
        name: 'Sneakers',
        price: 1200
    }
    ];

    getCategoryList() {
        return this.categoryList;
    }

    getProductList() {
        return this.productList;
    }
}
