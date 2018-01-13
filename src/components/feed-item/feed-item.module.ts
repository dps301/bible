import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedItemComponent } from './feed-item';
import { SquareModule } from '../../modules/square/sqare.module';

@NgModule({
    declarations: [ FeedItemComponent ],
    imports: [ CommonModule, SquareModule ],
    exports: [ FeedItemComponent ],
    providers: [],
})
export class FeedItemModule {}