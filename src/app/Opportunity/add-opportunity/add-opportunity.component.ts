import { Component, OnInit } from '@angular/core';
import {HtmlEditorService, ImageService, LinkService, ToolbarService} from "@syncfusion/ej2-angular-richtexteditor";

@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.component.html',
  styleUrls: ['./add-opportunity.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AddOpportunityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
