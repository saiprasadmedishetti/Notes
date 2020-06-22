import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  newNote: any;
  searchText: string = "";
  noteSubscription: Subscription;
  searchTextSubscription: Subscription;
  selectedId: string = "";

  notes: any[] = [
    {
      id: "1592737567412",
      title: "This is the first one",
      description: "First note description goes here",
      time: "3:20 PM",
    },
    {
      id: "1592737567413",
      title: "This is the second one",
      description: "Second note description goes here",
      time: "9:06 AM",
    },
    {
      id: "1592737567414",
      title: "This is the third one",
      description: "Third note description goes here",
      time: "11:06 AM",
    },
  ];
  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.selectedId = "1592737567412";
    this.getNewNote();
    this.getSearchText();
  }
  getNewNote() {
    this.noteSubscription = this.globalService.getNote().subscribe((note) => {
      this.newNote = note;
    });
  }
  getSearchText() {
    this.searchTextSubscription = this.globalService
      .getSearchText()
      .subscribe((text) => {
        this.searchText = text;
      });
  }
  onSelect(note) {
    this.selectedId = note.id;
    this.globalService.setSelectedNote(note);
  }

  ngOnDestroy() {
    this.noteSubscription.unsubscribe();
    this.searchTextSubscription.unsubscribe();
  }
}
