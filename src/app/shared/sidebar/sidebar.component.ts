import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { GlobalService } from "src/app/services/global.service";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState, INote } from "src/app/store";

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
  newNoteSubscription: Subscription;
  selectedId: string = "";

  allNotes: any;

  @select() notes: Observable<INote>;
  selectedNoteSubscription: Subscription;
  selectedNote: any;
  constructor(
    private globalService: GlobalService,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit() {
    this.getAllNotes();
    // this.getSelectedNote();
    this.getNewNote();
    this.getSearchText();
    this.onSelect(this.allNotes[0]);
  }
  menuCollapse() {
    this.globalService.overlayExpand = false;
  }
  getAllNotes() {
    this.notes.subscribe((notes) => {
      this.allNotes = notes;
    });
  }

  getSelectedNote() {
    this.selectedNoteSubscription = this.globalService
      .getSelectedNote()
      .subscribe((note) => {
        this.selectedNote = note;
      });
  }

  getNewNote() {
    this.newNoteSubscription = this.globalService
      .getNote()
      .subscribe((note) => {
        console.log("note", note);
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
    this.searchTextSubscription.unsubscribe();
    this.newNoteSubscription.unsubscribe();
    this.selectedNoteSubscription.unsubscribe();
  }
}
