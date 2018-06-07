import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
