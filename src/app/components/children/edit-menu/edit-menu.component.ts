import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent implements OnInit {
  @Input() addOption: boolean = false;
  @Output() editStart = new EventEmitter();
  @Output() saveChanges = new EventEmitter();
  @Output() cancelChanges = new EventEmitter();
  @Output() addFunction = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  addContent() {
    this.addFunction.emit();
    console.log('Content added');
  }
  startEdit() {
    this.editing = true;
    this.editStart.emit();
  }
  saveEdit() {
    this.editing = false;
    this.saveChanges.emit();
    console.log('Changes saved');
  }
  cancelEdit() {
    this.editing = false;
    this.cancelChanges.emit();
    console.log('Changes canceled');
  }
}
