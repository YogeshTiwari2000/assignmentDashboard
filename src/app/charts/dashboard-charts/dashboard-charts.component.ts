import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { DoughnutChartComponent } from "../doughnut-chart/doughnut-chart.component";
import { Doughnut2Component } from "../doughnut-2/doughnut-2.component";
import { BarChart2Component } from "../bar-chart-2/bar-chart-2.component";
import { BarChart3Component } from "../bar-chart-3/bar-chart-3.component";



interface IData {
  month: string;
  avgTemp: number;
  iceCreamSales: number;
}

@Component({
  selector: 'app-dashboard-charts',
  standalone: true,
  imports: [CommonModule, BarChartComponent, DoughnutChartComponent, Doughnut2Component, BarChart2Component, BarChart3Component],
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.css']
})

export class DashboardChartsComponent {

}
