import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  constructor() {}

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
