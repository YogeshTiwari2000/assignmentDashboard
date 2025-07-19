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

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

@Component({
  selector: 'app-bar-chart-2',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './bar-chart-2.component.html',
  styleUrl: './bar-chart-2.component.css'
})
export class BarChart2Component implements AfterViewInit {
  @ViewChild('barCanvas') chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  private CHART_COLORS = {
    opening: 'rgb(255, 159, 64)',     // Orange
    received: 'rgb(75, 192, 192)',    // Green
    disbursed: 'rgb(54, 162, 235)',   // Blue
    closing: 'rgb(255, 99, 132)'      // Red
  };

  ngAfterViewInit(): void {
    const labels = ['05-05-2025', '06-05-2025', '07-05-2025'];
    const data = {
      labels,
      datasets: [
        {
          label: 'Opening Cash Balance',
          data: [35000, 42000, 39000],
          backgroundColor: this.transparentize(this.CHART_COLORS.opening, 0.6),
          borderColor: this.CHART_COLORS.opening,
          borderWidth: 1
        },
        {
          label: 'Cash Received',
          data: [50000, 56000, 48000],
          backgroundColor: this.transparentize(this.CHART_COLORS.received, 0.6),
          borderColor: this.CHART_COLORS.received,
          borderWidth: 1
        },
        {
          label: 'Cash Disbursed',
          data: [30000, 34000, 27000],
          backgroundColor: this.transparentize(this.CHART_COLORS.disbursed, 0.6),
          borderColor: this.CHART_COLORS.disbursed,
          borderWidth: 1
        },
        {
          label: 'Closing Cash Balance',
          data: [55000, 64000, 60000],
          backgroundColor: this.transparentize(this.CHART_COLORS.closing, 0.6),
          borderColor: this.CHART_COLORS.closing,
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
          legend: {
            position: 'top' as const
          },
          title: {
            display: true,
            text: 'Cash Management'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value: string | number) => `${(+value / 1000).toFixed(0)}K`
            },
            title: {
              display: true,
              text: 'Amount (Thousands)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          }
        }
      }
    };

    this.chart = new Chart(this.chartRef.nativeElement!, config);
  }

  transparentize(color: string, opacity: number): string {
    const rgb = color.replace(/[^\d,]/g, '').split(',');
    return `rgba(${rgb.join(',')}, ${opacity})`;
  }
}
