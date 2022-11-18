import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScrollService } from '../../services/window-scrolling.service';

@Component({
  selector: 'app-suggest-form',
  templateUrl: './suggest-form.component.html',
  styleUrls: ['./suggest-form.component.scss']
})
export class SuggestFormComponent implements OnInit {

  @Input() showForm: boolean;

  @Output() formCloseEvent = new EventEmitter<boolean>();
  @Output() formEvent = new EventEmitter<boolean>();

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.formCloseEvent.emit(false);
    this.scrollService.enable();
  }

  onSubmit() {
    this.formCloseEvent.emit(false);
    this.formEvent.emit(true);
  }

}
