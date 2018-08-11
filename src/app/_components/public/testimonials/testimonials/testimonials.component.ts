import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  @Output() formState: string;

  constructor() { }

  ngOnInit() {
    this.formState = 'out';
  }

  toggleForm() {
    console.log('toggled ', this.formState);
    this.formState === 'in'
      ? this.formState = 'out'
      : this.formState = 'in';
  }

}
