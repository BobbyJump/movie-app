import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScrollService } from '../../services/window-scrolling.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show: boolean;

  @Output() modalEvent = new EventEmitter<boolean>();

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.modalEvent.emit(false);
    this.scrollService.enable();
  }

}
