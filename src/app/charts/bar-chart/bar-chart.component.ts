

import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend,
  ChartConfiguration
} from 'chart.js';
import { MatIcon } from "@angular/material/icon";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend
);

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  imports: [MatIcon]
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('barCanvas') private chartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  ngAfterViewInit(): void {
    const labels = ['Deposit', 'Withdrawal', 'Transfers', 'Loan', 'Teller'];
    const values = [80, 60, 90, 50, 70];

    const data = {
      labels,
      datasets: [{
        label: 'Transactions Awaiting Approval',
        data: values,
        backgroundColor: [
          'rgba(255, 165, 0, 0.6)',   // orange
          'rgba(40, 167, 69, 0.6)',   // green
          'rgba(135, 206, 250, 0.6)', // light blue
          'rgba(30, 144, 255, 0.6)',  // dark blue
          'rgba(255, 215, 0, 0.6)'    // yellow
        ],
        borderColor: [
          'rgb(255, 165, 0)',
          'rgb(40, 167, 69)',
          'rgb(135, 206, 250)',
          'rgb(30, 144, 255)',
          'rgb(255, 215, 0)'
        ],
        borderWidth: 1
      }]
    };

    const config: ChartConfiguration<'bar', number[], string> = {
      type: 'bar' as const,
      data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            // text: 'Transactions Awaiting Approval'
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Transaction Type'
            }
          },
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 25,
              callback: (tickValue: string | number) => `${tickValue}K`
            },
            title: {
              display: true,
              text: 'Count (K)'
            }
          }
        }
      }
    };

    this.chart = new Chart(this.chartRef.nativeElement!, config);
  }
}
