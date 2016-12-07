import { Component, Input, OnChanges } from '@angular/core';
import {HighchartConstant} from "./highchart.constant";

@Component({
    selector:"high-chart",
    template: `<div class="container"></div>`,
    providers:[HighchartConstant]
})

export class HighChartComponent implements OnChanges{
    // constructor(private constant: HighchartConstant) {
    //     this.options = constant;
    // }
    // options: Object;
    title = "High Chart";
    @Input() options: any;
    ngOnChanges(...args: any[]) {
        console.log('onChange fired');
        console.log('changing', args);
    }

}