import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/service/data.service';

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
    productList: any = [];
    productDetails: any = {
        name: "",
        category: "",
        price: "",
        id: -1
    };
    prevProductDetails: any = {};
    id: number = -1;
    routeParams: any;
    visible: boolean = false;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.productList = this.dataService.getProductList();

        this.routeParams = this.route.params.subscribe(params => {
            this.id = parseInt(params["id"]);
        });

        if (this.id > 0) {
            this.productDetails = (this.productList.filter((item) => item.id === this.id))[0];
            this.prevProductDetails = JSON.parse(JSON.stringify(this.productDetails));
        }
    }

    submitForm() {
        if (this.productDetails.name == "" || this.productDetails.category == "" || this.productDetails.price == "") {
            this.visible = true;
            return;
        }
        if (this.id < 0) {
            this.productList.unshift({
                category: this.productDetails.category,
                name: this.productDetails.name,
                price: this.productDetails.name,                
                id: this.productList[this.productList.length - 1].id + 1
            });
        }
        this.router.navigate(["product"]);
    }

    cancel() {
        if(this.id > 0){
            const index = this.productList.findIndex((item) => item.id === this.id);
            this.productList[index] = this.prevProductDetails;
        }
        this.router.navigate(["product"]);
    }

}
