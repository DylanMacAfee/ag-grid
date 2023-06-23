import { Component } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { PrimeNgDropdownComponent } from "./prime-ng-dropdown/prime-ng-dropdown.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  columnDefs = [
    {
      headerName: "Type",
      field: "type",
      editable: true
    },
    {
      headerName: "DropdownColumn",
      field: "ddValue",

      cellRenderer: 'primeNgDropdown'
    }
  ];

  frameworkComponents = {
    primeNgDropdown: PrimeNgDropdownComponent,
  };

  rowData = [
    { type: 'Adventure', ddValue: 1 },
    { type: "Movie", ddValue: 2 },
    { type: "Thriller", ddValue: 3 }
  ];
}
 