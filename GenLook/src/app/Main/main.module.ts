import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from '../Main/carousel/carousel.component';
import { LocationComponent } from '../Main/location/location.component';
import { ListLocationComponent } from '../Main/list-location/list-location.component';
import { MainService } from './services/main.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        ToolBarComponent,
        MainComponent,
        CarouselComponent,
        LocationComponent,
        ListLocationComponent],
    imports: [
        CommonModule,
        HttpClientModule],
    exports: [MainComponent],
    providers: [MainService],
})
export class MainModule {}
