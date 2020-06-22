import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { NoteEditorComponent } from "./components/note-editor/note-editor.component";
import { SearchPipe } from "./pipes/search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NoteEditorComponent,
    SearchPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
