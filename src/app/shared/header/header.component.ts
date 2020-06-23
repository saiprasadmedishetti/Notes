import { Component, OnInit, OnDestroy } from "@angular/core";
import { GlobalService } from "src/app/services/global.service";
import { Subscription } from "rxjs";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "src/app/store";
import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "src/app/action-types";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @select() notes;
  searchText: string;
  note: {};
  selectedNote = {};
  allNotes = [];
  getNoteSubscription: Subscription;
  selectedNoteSubscription: Subscription;
  constructor(
    private globalService: GlobalService,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit() {
    this.getNote();
    this.getSelectedNote();
    this.getAllNotes();
  }
  menuExpand() {
    this.globalService.overlayExpand = true;
  }
  getAllNotes() {
    this.notes.subscribe((notes) => {
      this.allNotes = notes;
    });
  }
  getNote() {
    this.getNoteSubscription = this.globalService
      .getNote()
      .subscribe((note) => (this.note = note));
  }
  getSelectedNote() {
    this.selectedNoteSubscription = this.globalService
      .getSelectedNote()
      .subscribe((note) => (this.selectedNote = note));
  }

  setSearchText(text) {
    this.globalService.setSearchText(text);
  }
  addNewNote() {
    this.globalService.setSelectedNote({});
    if (this.note != undefined) {
      this.ngRedux.dispatch({
        type: ADD_NOTE,
        payload: this.note,
      });
      this.globalService.setSelectedNote({});
      this.globalService.setNote(undefined);
    }
  }

  deleteNote() {
    let selectedIndex = this.allNotes.indexOf(this.selectedNote);
    let nextSelect = this.allNotes[selectedIndex];
    console.log("nextselect", nextSelect);

    this.ngRedux.dispatch({
      type: DELETE_NOTE,
      payload: this.selectedNote,
    });
    this.globalService.setSelectedNote(nextSelect);
    this.globalService.setNote(undefined);
  }
  ngOnDestroy() {
    this.getNoteSubscription.unsubscribe();
    this.getNoteSubscription.unsubscribe();
  }
}
