
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartConfiguration
} from 'chart.js';
import { MatIcon } from "@angular/material/icon";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title);

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
  imports: [MatIcon]
})
export class DoughnutChartComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  ngAfterViewInit(): void {
    const labels = [
      'Disbursed',
      'Repayments',
      'Loan Transactions',
      'Non-Performing'
    ];
    const dataValues = [10, 5, 20, 23];
    const backgroundColors = [
      'rgba(153, 102, 255, 0.6)',  // light purple
      'rgba( 46, 125,  50, 0.6)',  // dark green
      'rgba(128, 128,   0, 0.6)',  // olive
      'rgba( 54, 162, 235, 0.6)'   // blue
    ];
    const borderColors = backgroundColors.map(c => c.replace(/0\.6\)$/, '1)'));

    const config: ChartConfiguration<'doughnut', number[], string> = {
      type: 'doughnut' as const,
      data: {
        labels,
        datasets: [{
          data: dataValues,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        cutout: '60%',
        plugins: {
          title: {
            display: true,
            // text: 'Loans Transaction'
          },
          legend: {
            position: 'bottom' as const,
            labels: {
              boxWidth: 12,
              padding: 16
            }
          },
          tooltip: {
            callbacks: {
              label: ctx => {
                const val = ctx.parsed as number;
                const sum = ctx.chart.data.datasets[0].data
                  .filter((v): v is number => typeof v === 'number' && v !== null)
                  .reduce((a, b) => a + b, 0);
                const pct = ((val / sum) * 100).toFixed(1);
                return `${ctx.label}: ${val} (${pct}%)`;
              }
            }
          }
        }
      }
    };

    this.chart = new Chart(this.canvasRef.nativeElement!, config);
  }
}

