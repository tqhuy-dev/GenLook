import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from '../Main/carousel/carousel.component';
@NgModule({
    declarations: [ToolBarComponent, MainComponent, CarouselComponent],
    imports: [ CommonModule  ],
    exports: [MainComponent],
    providers: [],
})
export class MainModule {}
