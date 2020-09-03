import { NgModule } from '@angular/core';
import { RouterModule,  Router } from '@angular/router';

import { CardDetailComponent} from './card-detail/card-detail.component';
import { CardComponent } from './card.component';

const cardRoutes: Router = [
    {
        path:'',
        component:CardComponent,
        childeren:[
            {
                path:'caphe',
                component:CardDetailComponent
            },
            {
                path:'tra',
                component:CardDetailComponent
            }      
        ]
    }
];
@NgModule({
    imports:[
        RouterModule.forChild(cardRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class CardRoutingModule{ }