import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  CadastrarPjComponent,
  CadastroPjComponent
} from './components';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ]
})
export class CadastroPjModule { }
