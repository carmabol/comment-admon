import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../components/main/pages/main.component';


import { CommentComponent } from './comment/comment.component';
import { PointerComponent } from './pointer/pointer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        CommentComponent,
        PointerComponent
    ],
    declarations: [
        CommentComponent,
        MainComponent,
        PointerComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
