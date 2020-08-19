import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '@angular/compiler';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';


import { HttpClientModule } from '@angular/common/http';

/* import {MatInputModule} from '@angular/material/input';
/* import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule ,MatFormFieldModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select'; */
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {ProduitService } from './service.service';

// import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
// import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
// import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProduitComponent } from './produit/produit.component';



@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,


  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatAutocompleteModule,
MatBadgeModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatCheckboxModule,
MatChipsModule,
MatStepperModule,
MatDatepickerModule,
MatDialogModule,

MatExpansionModule,
MatGridListModule,
MatListModule,

MatMenuModule,
MatPaginatorModule ,
MatProgressBarModule,
MatProgressSpinnerModule,
MatSidenavModule,
MatRadioModule,
MatRippleModule,
MatSliderModule,
MatSlideToggleModule,
MatSortModule,
MatTableModule,
MatTabsModule,
MatToolbarModule,
MatTooltipModule,
MatTreeModule
  ],
  providers: [ProduitService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
