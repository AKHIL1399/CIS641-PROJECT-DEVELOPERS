import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { DailogService } from 'src/app/services/dailog.service';
import { ActivitiesService } from 'src/app/services/activities.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserActivity } from 'src/app/model/UserActivity';

@Component({
  selector: 'app-precheck',
  templateUrl: './precheck.component.html',
  styleUrls: ['./precheck.component.css']
})
export class PrecheckComponent implements OnInit {
  constructor(private dialog:MatDialog,private service:ActivitiesService,private nvarbar:NavbarService
    ,private toaster:ToastrService,private myDailog:DailogService) { }
  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'street','time','status','actions'];
  @ViewChild(MatPaginator,{static: false}) paginator:MatPaginator;
  dataSource : MatTableDataSource<UserActivity>;
  ngOnInit() {
    this.refreshList();
  }
  Create(){

    }
    refreshList(){
      this.service.getUserActivity().subscribe(x=>{
        this.dataSource=new MatTableDataSource(x.filter(x=>x.dataType=='Prechecks'));
        this.dataSource.paginator=this.paginator;
       
      })  
    }
    onDellete(row:UserActivity,status:any){
      this.myDailog.openDailogBox('Are you sure to change the status?').afterClosed()
      .subscribe(res=>{
        if(res){
                     row.status=status;
                this.service.put(row.id,row).subscribe(
                      res=>{
                              this.toaster.success('Status changed successfully','Manage Complaints');
                              this.refreshList();
                      }, 
                      err=>{
                        console.log(err)
                      }
                    )
        }
      });

}

}
