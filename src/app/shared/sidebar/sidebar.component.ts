import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  notes: any[] = [
    {
      title: "This is the first one",
      description: "First note description goes here",
      time: "3:20 PM",
    },
    {
      title: "This is the second one",
      description: "Second note description goes here",
      time: "9:06 AM",
    },
    {
      title: "This is the third one",
      description: "Third note description goes here",
      time: "11:06 AM",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
