import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoteEditorComponent } from "./components/note-editor/note-editor.component";

const routes: Routes = [{ path: "", component: NoteEditorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
