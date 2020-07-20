import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AppRoutingModule} from './app-routing.module';
import { BoundaryComponent } from './dragdemo/boundary/boundary.component';
import { PositionlockingComponent } from './dragdemo/positionlocking/positionlocking.component';
import { ConnectedsortinggroupComponent } from './dragdemo/connectedsortinggroup/connectedsortinggroup.component';
import { ConnectedsortingComponent } from './dragdemo/connectedsorting/connectedsorting.component';
import { CustomplaceholderComponent } from './dragdemo/customplaceholder/customplaceholder.component';
import { CustompreviewComponent } from './dragdemo/custompreview/custompreview.component';
import { DelayeddraggingComponent } from './dragdemo/delayeddragging/delayeddragging.component';
import { DisabledsortingComponent } from './dragdemo/disabledsorting/disabledsorting.component';
import { DisabledComponent } from './dragdemo/disabled/disabled.component';
import { EvenpredicateComponent } from './dragdemo/evenpredicate/evenpredicate.component';
import { WithhandleComponent } from './dragdemo/withhandle/withhandle.component';
import { HorizontalsortingComponent } from './dragdemo/horizontalsorting/horizontalsorting.component';
import { AlternaterootComponent } from './dragdemo/alternateroot/alternateroot.component';
import { SortingComponent } from './dragdemo/sorting/sorting.component';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    BoundaryComponent,
    PositionlockingComponent,
    ConnectedsortinggroupComponent,
    ConnectedsortingComponent,
    CustomplaceholderComponent,
    CustompreviewComponent,
    DelayeddraggingComponent,
    DisabledsortingComponent,
    DisabledComponent,
    EvenpredicateComponent,
    WithhandleComponent,
    HorizontalsortingComponent,
    AlternaterootComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
