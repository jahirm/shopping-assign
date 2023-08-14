import { Routes } from '@angular/router';
import { CategoryComponent } from './model/category/category.component';
import { ProductComponent } from './model/product/product.component';
import { EditCategoryComponent } from './model/category/edit-category/edit-category.component';
import { EditProductComponent } from './model/product/edit-product/edit-product.component';

const appRoutes: Routes = [
    { path: 'category', 
      component: CategoryComponent 
    },
    { path: 'edit-category/:id', 
      component: EditCategoryComponent 
    },
    {
      path: 'product',
      component: ProductComponent
    },
    { path: 'edit-product/:id', 
      component: EditProductComponent 
    },
  ];
  export default appRoutes;