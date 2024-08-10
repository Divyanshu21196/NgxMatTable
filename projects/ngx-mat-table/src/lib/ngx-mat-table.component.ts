import { Component,forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CONFIG } from './modalsInterface';

@Component({
  selector: 'ngx-mat-table',
  template: `
 <table class="table table-striped">
	<thead>
		<tr>
    @for (item of config; track item.label; let i = $index){
    	  <th scope="col">{{item?.label}}</th>
      }
		</tr>
	</thead>
	<tbody>
		@for (list of data; track list.name) {
			<tr>
      		@for (conf of config;track conf.label) {
    				<td>
		  			  {{renderer(conf.key_name,list)}}
			    	</td>
        }
			</tr>
		}
	</tbody>
</table>
  `,
  styles: ``,
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatTableComponent),
      multi: true
    }
  ]
})
export class NgxMatTableComponent {

  @Input() config:Array<CONFIG>  = [];
  @Input() data:Array<any>=[];

  constructor(){
  }

  renderer(keyName:string,data:any){
    if (data.hasOwnProperty(keyName)){
      return data[keyName]
    }
  }


}
