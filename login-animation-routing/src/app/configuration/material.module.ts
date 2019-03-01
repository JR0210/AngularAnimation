import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatListModule,
    MatChipsModule,
    MatSortModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatTooltipModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatMenuModule,
        MatListModule,
        MatIconModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatChipsModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatTooltipModule
    ],
    exports: [
        FlexLayoutModule,
        MatCardModule,
        MatMenuModule,
        MatListModule,
        MatIconModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatChipsModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatTooltipModule
    ],
})

export class MaterialModule { }
