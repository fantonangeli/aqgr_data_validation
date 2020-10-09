import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funky-radio',
  templateUrl: './funky-radio.component.html',
  styleUrls: ['./funky-radio.component.scss']
})
/**
 * Just a cool checkbox.
 *
 * @implements {OnInit}
 */
export class FunkyRadioComponent implements OnInit {

   /**
    * the label for the input
    */
  @Input() label="";

   /**
    * the id for the input
    */
  @Input() inputId="";

   /**
    * the type for the input. Accepted values: default, primary, succcess, danger, warning, info
    */
  @Input() type="";




  @Input() inputModel: boolean;
  @Output() inputModelChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
