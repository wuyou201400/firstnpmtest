import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import { ZeroModule } from '../../projects/zero/src/lib/zero.module';//本地地调用测试
import { ZeroModule } from '@qzl/zerotest'; //使用刚刚发布的npm包

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
