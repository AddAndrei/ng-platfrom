import {NgModule} from '@angular/core';
import {AdminRpository} from './repositories/adminRpository';


@NgModule({
  providers: [AdminRpository],
  exports: [AdminRpository]
})
export class AdminModule {
}
