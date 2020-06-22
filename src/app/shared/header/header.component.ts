import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/services/global.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  searchText: string;
  constructor(private globalService: GlobalService) {}

  ngOnInit() {}
  setSearchText(text) {
    this.globalService.setSearchText(text);
  }
  newNote() {
    this.globalService.setSelectedNote({});
  }
}
