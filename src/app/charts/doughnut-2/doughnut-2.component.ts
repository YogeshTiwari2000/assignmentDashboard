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
  ChartConfiguration,
  Plugin
} from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title);

// Dirty plugin
const centerTextPlugin: Plugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { ctx, chartArea: { width, height } } = chart;
    ctx.save();

    // @ts-ignore
    ctx.fillStyle = chart.options.plugins.centerText.color || '#000';
    // @ts-ignore
    const text = chart.options.plugins.centerText.text || '';

    ctx.font = `${(height / 114).toFixed(2)}em sans-serif`;
    ctx.textBaseline = 'middle';
    const textX = (width - ctx.measureText(text).width) / 2;
    const textY = height / 2;
    ctx.fillText(text, textX, textY);

    ctx.restore();
  }
};

@Component({
  selector: 'app-doughnut-2',
  standalone: true,
  template: `<div class="border-b-2 text-sm text-black font-bold pb-2">xyz wallet</div><canvas #doughnutCanvas></canvas>`,
  styles: [`canvas { width:100%!important; height:auto!important; }`]
})
export class Doughnut2Component implements AfterViewInit {
  @ViewChild('doughnutCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit(): void {
    const totalAccounts = 500;

    const config: any = {               // ← cast to any
      type: 'doughnut',
      data: {
        labels: ['Opened', 'Closed', 'Dormant'],
        datasets: [{
          data: [80, 40, 20],
          backgroundColor: [
            'rgba(75,192,192,0.6)',
            'rgba(255,99,132,0.6)',
            'rgba(54,162,235,0.6)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        cutout: '70%',
        plugins: {
          title: { display: true, text: 'Account Activity' },
          legend: { position: 'bottom' },
          centerText: {               // TS won’t complain—config is any
            text: `${totalAccounts}`,
            color: '#333'
          }
        }
      },
      plugins: [centerTextPlugin]
    };

    this.chart = new Chart(this.canvasRef.nativeElement, config);
  }
}
