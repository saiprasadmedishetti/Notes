import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { NoteEditorComponent } from "./components/note-editor/note-editor.component";
import { SearchPipe } from "./pipes/search.pipe";
import {
  NgReduxModule,
  NgRedux,
  DevToolsExtension,
} from "@angular-redux/store";
import { IAppState, rootReducer, INITIAL_STATE } from "./store";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NoteEditorComponent,
    SearchPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
