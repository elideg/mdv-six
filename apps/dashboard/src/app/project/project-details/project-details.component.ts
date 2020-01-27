import { Project } from '@mdv-six/core-data';
import { FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mdv-six-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  currentProject;
  originalTitle;


  @Input() form: FormGroup
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
      this.currentProject = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(project: Project) {
    this.saved.emit(project);
  }

  cancel(project: Project) {
    this.cancelled.emit(project);
  }

  saveForm(formDirective: NgForm) {
    this.save(this.form.value)
    formDirective.resetForm();
  }
}
