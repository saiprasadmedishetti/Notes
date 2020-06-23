import { Injectable } from "@angular/core";
import { Subject, Observable, Subscription } from "rxjs";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../store";
import { ADD_NOTE } from "../action-types";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  overlayExpand: boolean = false;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  private noteSubject = new Subject<any>();
  private searchTextSubject = new Subject<string>();
  private selectedNoteSubject = new Subject<any>();

  setSearchText(text: string) {
    this.searchTextSubject.next(text);
  }
  getSearchText(): Observable<any> {
    return this.searchTextSubject.asObservable();
  }

  setNote(note: any) {
    this.noteSubject.next(note);
  }

  getNote(): Observable<any> {
    return this.noteSubject.asObservable();
  }
  setSelectedNote(note: any) {
    this.selectedNoteSubject.next(note);
  }

  getSelectedNote(): Observable<any> {
    return this.selectedNoteSubject.asObservable();
  }
}
