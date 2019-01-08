import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from '../Main/carousel/carousel.component';
import { LocationComponent } from '../Main/location/location.component';
import { ListLocationComponent } from '../Main/list-location/list-location.component';
@NgModule({
    declarations: [
        ToolBarComponent,
        MainComponent,
        CarouselComponent,
        LocationComponent,
        ListLocationComponent],
    imports: [ CommonModule  ],
    exports: [MainComponent],
    providers: [],
})
export class MainModule {}
