import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent implements OnInit {
  @Output() editStart = new EventEmitter();
  @Output() saveChanges = new EventEmitter();
  @Output() cancelChanges = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  ngOnInit(): void {}

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
