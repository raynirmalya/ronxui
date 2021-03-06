import { Component, OnInit } from '@angular/core';
// import Stack from '@jsundefined/algojs/collections/stack';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // const stack = new Stack();
    // stack.push(3);
    // stack.push(5);
    // const stck = stack.push(8);
    // console.log(stck);
  }

  colsConfig = [
    { field: 'vin', title: 'Column1', dataType: 'multiselect' },
    {
      field: 'extraColumn2',
      title: 'Column2',
      dataType: 'DATE',
      subColumns: [
        { field: 'extraColumn3', title: 'Column3', dataType: 'STRING' },
        { field: 'extraColumn5', title: 'Column4', dataType: 'STRING' },
      ],
    },
    {
      field: 'year',
      title: 'Column5',
      dataType: 'STRING',
      subColumns: [
        { field: 'extraColumn1', title: 'Column6', dataType: 'STRING' },
        { field: 'extraColumn6', title: 'Column7', dataType: 'NUMBER' },
        { field: 'extraColumn4', title: 'Column8', dataType: 'STRING' },
      ],
    },
  ];
}
