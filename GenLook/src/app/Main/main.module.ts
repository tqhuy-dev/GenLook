import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from '../Main/component/tool-bar/tool-bar.component';
import { MainComponent } from '../Main/component/main/main.component';
import { CarouselComponent } from '../Main/component/carousel/carousel.component';
import { LocationComponent } from '../Main/component/location/location.component';
import { ListLocationComponent } from '../Main/component/list-location/list-location.component';
import { MainService } from './services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicesItemComponent } from '../Main/component/services-item/services-item.component';
import { ServicesListComponent } from '../Main/component/services-list/services-list.component';
import { YearEventItemComponent } from '../Main/component/year-event-item/year-event-item.component';
@NgModule({
    declarations: [
        ToolBarComponent,
        MainComponent,
        CarouselComponent,
        LocationComponent,
        ListLocationComponent,
        ServicesItemComponent,
        ServicesListComponent,
        YearEventItemComponent],
    imports: [
        CommonModule,
        HttpClientModule],
    exports: [MainComponent],
    providers: [MainService],
})
export class MainModule {}
