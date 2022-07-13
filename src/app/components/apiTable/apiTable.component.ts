import { Component, Input, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface ToDoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'apiTable'
  , templateUrl: './apiTable.component.html'
  , styleUrls: [ './apiTable.component.css' ]
})
export class ApiTableComponent implements AfterViewInit {
  @Input() name: string;
  
  public displayedColumns: string[] = ['userid', 'id', 'title', 'completed', 'action'];
  public tableData = new MatTableDataSource();

  public unsubscribe$: Subject<void> = new Subject();

  resultsLength = 0;
  isLoadingResults = true;

  constructor(private httpClient: HttpClient) {}

  ngAfterViewInit() {
      this.isLoadingResults = true;

      this.getToDoItems()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((apiData: any) => {
              this.tableData = apiData;
              
              this.resultsLength = apiData.length;
          });

      this.isLoadingResults = false;
  }

  getToDoItems(): Observable<ToDoItem> {
      return this.httpClient.get<ToDoItem>('https://jsonplaceholder.typicode.com/todos');
  }
}
