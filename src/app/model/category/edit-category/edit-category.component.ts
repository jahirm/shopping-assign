import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/service/data.service';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
    categoryList: any = [];
    categoryDetails: any = {
        name: "",
        id: -1
    };
    prevCategoryDetails: any = {}
    id: number = -1;
    routeParams: any;
    visible: boolean = false;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { 
        this.categoryList = this.dataService.getCategoryList();           

        this.routeParams = this.route.params.subscribe(params => {
            this.id =  parseInt(params["id"]);        
          });        

        if(this.id > 0){
            this.categoryDetails = (this.categoryList.filter((item) => item.id === this.id))[0];
            this.prevCategoryDetails = JSON.parse(JSON.stringify(this.categoryDetails));
        }      
    }

    submitForm(){
        if(this.categoryDetails.name == ""){
            this.visible = true;
            return;
        }
        if(this.id < 0){
            this.categoryList.unshift({               
                name: this.categoryDetails.name,
                id: this.categoryList[this.categoryList.length - 1].id + 1
            });
        }
        this.router.navigate(["category"]);
    }

    cancel(){
        if(this.id > 0){
            const index = this.categoryList.findIndex((item) => item.id === this.id);
            this.categoryList[index] = this.prevCategoryDetails;
        }
        this.router.navigate(["category"]);
    }

}
