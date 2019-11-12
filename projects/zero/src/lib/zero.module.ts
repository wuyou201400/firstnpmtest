import { NgModule } from '@angular/core';
import { ZeroComponent } from './zero.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [ZeroComponent, ButtonComponent],
  imports: [
  ],
  exports: [ZeroComponent, ButtonComponent]
})
export class ZeroModule { }
