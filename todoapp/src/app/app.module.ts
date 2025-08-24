import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoService } from './service/todo.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        TodoitemComponent,
        TodolistComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule], providers: [TodoService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
