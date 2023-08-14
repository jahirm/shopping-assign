import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Router } from '@angular/router'; 
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    categoryList: any = [];

    constructor(
        private dataService: DataService, 
        private router: Router, 
        private confirmationService: ConfirmationService
        ) { }

    ngOnInit(): void {        
        this.categoryList = this.dataService.getCategoryList();        
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

    deleteRecord(id){ 
        const index = this.categoryList.findIndex((item) => item.id === id);

        if (index > -1) {
            this.categoryList.splice(index, 1);
        }      
    }

    editCategory(id){
        this.router.navigate(["edit-category/" + id]);
    }

    add(){
        this.router.navigate(["edit-category/-1"]);
    }

}
