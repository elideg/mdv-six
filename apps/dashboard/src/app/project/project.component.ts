import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '@mdv-six/core-data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv-six-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  form: FormGroup;
  selectedProject: Project;
  projects$;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.initForm();
    this.getProjects();
    this.resetProject();
  }

  selectProject(project: Project) {
    this.form.patchValue(project)
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectService.all();
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: ''
    }
    this.selectProject(emptyProject);
  }

  createProject(project: Project) {
    this.projectService.create(project).subscribe((r) => {
      this.resetProject();
      this.getProjects();
    })
  }

  cancel() {
    this.resetProject();
    this.form.reset();
  }

  saveProject(project: Project) {
    if (project.id) {
      this.updateProject(project);
    } else {
      this.createProject(project);
    }
  }

  updateProject(project: Project) {
    this.projectService.update(project).subscribe((r) => {
      this.resetProject();
      this.getProjects();
    });
  }

  deleteProject(project: Project) {
    this.projectService.delete(project).subscribe((r) => {
      this.resetProject();
      this.getProjects();
    })
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      title: [''],
      details: ['']
    })
  }

}
