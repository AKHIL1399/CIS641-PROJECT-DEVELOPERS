import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { IndexComponent } from './index/index.component';
import { PrecheckComponent } from './precheck/precheck.component';
import { InstallationComponent } from './installation/installation.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatIconModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatPaginatorModule, MatFormFieldModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [IndexComponent, PrecheckComponent, InstallationComponent, ComplaintsComponent, NavbarComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatDialogModule,
    MatTableModule, MatIconModule, MatButtonModule,MatSelectModule,
    MatSnackBarModule,ToastrModule,
    ReactiveFormsModule ,MatPaginatorModule,MatFormFieldModule
  ]                                        
})
export class TeamModule { }
