// bar-chart-3.component.ts
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
  Legend,
  Title
} from 'chart.js';
import { MatIcon } from "@angular/material/icon";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

@Component({
  selector: 'app-bar-chart-3',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './bar-chart-3.component.html',
  styleUrl: './bar-chart-3.component.css'
})
export class BarChart3Component implements AfterViewInit {
  @ViewChild('barCanvas') chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit(): void {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const profitData = [25, 50, 25, 50, 25, 75];
    const lossData = [10, 25, 25, 25, 10, 25];

    const data = {
      labels,
      datasets: [
        {
          label: 'Profit',
          data: profitData,
          backgroundColor: 'rgba(76, 175, 80, 0.6)',    // Green
          borderColor: 'rgb(76, 175, 80)',
          borderWidth: 1
        },
        {
          label: 'Loss',
          data: lossData,
          backgroundColor: 'rgba(33, 150, 243, 0.6)',    // Blue
          borderColor: 'rgb(33, 150, 243)',
          borderWidth: 1
        }
      ]
    };

    const config = {
      type: 'bar' as const,
      data,
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' as const },
          title: {
            display: true,
            // text: 'Net Profit/Loss'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 100,
            ticks: {
              stepSize: 25,
              callback: (value: any) => `${value}K`
            },
            title: {
              display: true,
              text: 'Amount (K)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          }
        }
      }
    };

    this.chart = new Chart(this.chartRef.nativeElement!, config);
  }
}
