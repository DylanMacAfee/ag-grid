import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  selector: "app-prime-ng-dropdown",
  templateUrl: "./prime-ng-dropdown.component.html",
  styleUrls: ["./prime-ng-dropdown.component.css"]
})
export class PrimeNgDropdownComponent implements ICellRendererAngularComp {
  params: ICellRendererParams;

  cars = [
    { label: "Honda", value: "eHonda" },
    { label: "Jaguar", value: "fJaguar" },
    { label: "Mercedes", value: "gMercedes" }
  ];

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  onChange(value) {
    this.params.data[this.params.colDef.field] = value;
  }

  refresh() {
    return true;
  }

  doSomething() {}
}
