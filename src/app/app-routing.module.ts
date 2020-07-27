import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoundaryComponent} from './dragdemo/boundary/boundary.component';
import {PositionlockingComponent} from './dragdemo/positionlocking/positionlocking.component';
import {ConnectedsortinggroupComponent} from './dragdemo/connectedsortinggroup/connectedsortinggroup.component';
import {ConnectedsortingComponent} from './dragdemo/connectedsorting/connectedsorting.component';
import {CustomplaceholderComponent} from './dragdemo/customplaceholder/customplaceholder.component';
import {CustompreviewComponent} from './dragdemo/custompreview/custompreview.component';
import {DelayeddraggingComponent} from './dragdemo/delayeddragging/delayeddragging.component';
import {DisabledsortingComponent} from './dragdemo/disabledsorting/disabledsorting.component';
import {DisabledComponent} from './dragdemo/disabled/disabled.component';
import {EvenpredicateComponent} from './dragdemo/evenpredicate/evenpredicate.component';
import {WithhandleComponent} from './dragdemo/withhandle/withhandle.component';
import {HorizontalsortingComponent} from './dragdemo/horizontalsorting/horizontalsorting.component';
import {AlternaterootComponent} from './dragdemo/alternateroot/alternateroot.component';
import {SortingComponent} from './dragdemo/sorting/sorting.component';
import {StackedbarChartComponent} from './antg2/stackedbar-chart/stackedbar-chart.component';

const routes: Routes = [
  { path: 'app-boundary', component: BoundaryComponent },
  { path: 'app-positionlocking', component: PositionlockingComponent },
  { path: 'app-connectedsortinggroup', component: ConnectedsortinggroupComponent },
  { path: 'app-connectedsorting', component: ConnectedsortingComponent },
  { path: 'app-evenpredicate', component: EvenpredicateComponent },
  { path: 'app-customplaceholder', component: CustomplaceholderComponent },
  { path: 'app-custompreview', component: CustompreviewComponent },
  { path: 'app-delayeddragging', component: DelayeddraggingComponent },
  { path: 'app-disabledsorting', component: DisabledsortingComponent },
  { path: 'app-disabled', component: DisabledComponent },
  { path: 'app-withhandle', component: WithhandleComponent },
  { path: 'app-horizontalsorting', component: HorizontalsortingComponent },
  { path: 'app-alternateroot', component: AlternaterootComponent },
  { path: 'app-sorting', component: SortingComponent },
  { path: 'app-stackedbar-chart', component: StackedbarChartComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
