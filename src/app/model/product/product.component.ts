import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    productList: any = [];

    constructor(
        private dataService: DataService,
        private router: Router,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit(): void {
        this.productList = this.dataService.getProductList();
    }

    confirmDelete(id) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleteRecord(id);
            },
            reject: (type) => {

            }
        });
    }

    deleteRecord(id) {
        const index = this.productList.findIndex((item) => item.id === id);

        if (index > -1) {
            this.productList.splice(index, 1);

            // this.productList = this.productList.filter(function(item) {
            //     return item.id !== id;
            // })
        }
    }

    editProduct(id) {
        this.router.navigate(["edit-product/" + id]);
    }

    add() {
        this.router.navigate(["edit-product/-1"]);
    }

}
