import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-report-contracts-chart',
  templateUrl: './contracts-chart.component.html',
  styleUrls: ['./contracts-chart.component.scss']
})
export class ContractsChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const chart = new Chart(document.getElementById('pie-chart') as HTMLCanvasElement, {
      type: 'pie',
      data: {
        labels: ['Fora ponta', 'Ponta'],
        datasets: [{
          label: 'Population (millions)',
          backgroundColor: ['#5a5a5a', '#ef406d'],
          data: [75, 25]
        }]
      },
      options: {
        legend : {
          display : true,
          labels : {
            fontColor: 'rgb(0,0,0)'
          },
          position: 'bottom'
        }
      }
    });
  }

}
