import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        MenuRoutingModule
    ],
    providers: []
})

export class MenuModule {}