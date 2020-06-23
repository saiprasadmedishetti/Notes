import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { GlobalService } from "src/app/services/global.service";
import { IAppState } from "src/app/store";
import { ADD_NOTE, UPDATE_NOTE } from "src/app/action-types";
import { Subscription } from "rxjs";

@Component({
  selector: "app-note-editor",
  templateUrl: "./note-editor.component.html",
  styleUrls: ["./note-editor.component.scss"],
})
export class NoteEditorComponent implements OnInit, OnDestroy {
  @select() notes;
  @select() payload;
  subscription: Subscription;
  constructor(
    private globalService: GlobalService,
    private ngRedux: NgRedux<IAppState>
  ) {}

  time: Date = new Date();
  note: any = {};
  getCurrentNote: any;
  getNoteSubscription: Subscription;
  selectedNote = {};
  ngOnInit() {
    this.getTime();
    this.getSelectedNote();
    this.getNote();
    this.notes.subscribe((notes) => (this.note = notes[0]));
  }
  getNote() {
    this.getNoteSubscription = this.globalService
      .getNote()
      .subscribe((note) => (this.getCurrentNote = note));
  }

  getSelectedNote() {
    this.globalService
      .getSelectedNote()
      .subscribe((note) => (this.note = note));
  }

  getTime() {
    setTimeout(() => {
      this.time = new Date();
      this.getTime();
    }, 1000);
  }

  setNote() {
    this.globalService.setNote({
      ...this.note,
      time: new Date(),
    });
  }
  updateNote() {
    console.log(this.note);
    this.ngRedux.dispatch({
      type: UPDATE_NOTE,
      payload: this.note,
    });
    this.globalService.setSelectedNote(this.note);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.getNoteSubscription.unsubscribe();
  }
}
