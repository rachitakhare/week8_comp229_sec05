import { NgModule } from "@angular/core";
import { BookRepository } from "./books.repository";
import { StaticDataSource } from "./static.datasource";
import {HttpClientModule} from '@angular/common/http';
import { Cart } from "./cart.model";
import { RestDataSource } from "../rest.datasource";

@NgModule({
imports:[HttpClientModule],
providers :[BookRepository,StaticDataSource,Cart,{provide: StaticDataSource, useClass:RestDataSource}]


})

export class ModelModule {}