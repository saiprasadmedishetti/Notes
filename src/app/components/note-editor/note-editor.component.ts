import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-note-editor",
  templateUrl: "./note-editor.component.html",
  styleUrls: ["./note-editor.component.scss"],
})
export class NoteEditorComponent implements OnInit {
  constructor(private globalService: GlobalService) {}
  time: Date = new Date();
  note: any = {
    title: "",
    description: "",
  };
  ngOnInit() {
    this.getTime();
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
    this.globalService.setNote({ ...this.note, time: new Date() });
  }
}
