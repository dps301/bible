import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider';
import { SquareModule } from '../square/sqare.module';

@NgModule({
    declarations: [ SliderComponent ],
    imports: [ CommonModule, SquareModule ],
    exports: [ SliderComponent ],
    providers: [],
})
export class SliderModule {}