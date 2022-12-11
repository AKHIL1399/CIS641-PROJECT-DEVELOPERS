import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecheckComponent } from './precheck/precheck.component';
import { InstallationComponent } from './installation/installation.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { IndexComponent } from './index/index.component';



const routes: Routes = [
  {path:'',  redirectTo: "Index",
  },
  { path: 'Index', component: IndexComponent ,
  children: [
    {
      path: 'manage-precheck',
      component: PrecheckComponent,
     
    },
    {
      path: 'manage-installation',
      component: InstallationComponent,
     
    },
    {
      path: 'manage-complaints',
      component: ComplaintsComponent,
     
    },
  ]
},
  // { path: 'manage-user', component: ManageUserComponent, outlet: "outlet1" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
