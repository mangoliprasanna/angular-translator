import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslatorService } from './translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public is_loading = true;

  public supported_lang = [
    "bengali",
    "english",
    "hindi",
    "kannada",
    "malayalam",
    "marathi",
    "tamil",
    "telugu",
    "polish",
    "urdu",
    "arabic",
    "french",
    "german",
    "japanese",
    "italian"
  ];
  public translate_data = {
  };
  constructor(private _translatorService: TranslatorService) { }
  ngOnInit() {
    this._translatorService.getTranslation("Hello").subscribe((data) => {
      this.translate_data = data;
      this.is_loading = false;
    })
  }

  onSumbit(theForm: NgForm) {
    console.log(theForm.value.word);
    this.is_loading = true;
    this._translatorService.getTranslation(theForm.value.word).subscribe((data) => {
      this.translate_data = data;
      this.is_loading = false;
    })

  }
}
