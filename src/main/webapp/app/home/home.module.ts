import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FilteringSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [FilteringSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class FilteringHomeModule {}
