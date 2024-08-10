ngx-mat-tablet is built for Angular >=8.0.0.It doesn't use jQuery.

Get Started ::

    Run npm i ngx-mat-table or ng add ngx-mat-table.

    Import FormsModule and ReactiveFormsModule in your app.module.ts file.

    Add NgxMatTableModule to app NgModule, make sure you have BrowserAnimationsModule as well.

    import { CommonModule } from '@angular/common';

    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

    @NgModule({ imports: [ CommonModule, BrowserAnimationsModule, // required animations module NgxMatTableModule, // DvInputModule added ],

    bootstrap: [App],

    declarations: [App], })

    class MainModule {}

    Inside component.ts file

    import {Component} from '@angular/core';

    @Component({ selector: 'my-component', template: <ngx-mat-table data="TYPENAME" config=""></ngx-mat-table> })

    export class MyComponent { }

    API

INPUT-TYPENAMES:[data,config]


    Available options based on input options

Run ng generate component component-name --project dv-input-custom to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module --project dv-input-custom.

    Note: Don't forget to add --project ngx-mat-table or else it will be added to the default project in your angular.json file.

Running unit tests

Run ng test dv-input-custom to execute the unit tests via Karma.
Further help

To get more help on the Angular CLI use go check out the Divyanshu