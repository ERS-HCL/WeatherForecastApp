import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CloudinessPipe } from "./cloudiness.pipe";
import { CamelCasePipe } from "./camel-case.pipe";


@NgModule({
  declarations: [
    CloudinessPipe,
    CamelCasePipe
  ],
  exports: [
    CommonModule,
    CloudinessPipe,
    CamelCasePipe
  ]
})

export class SharedModule { }
