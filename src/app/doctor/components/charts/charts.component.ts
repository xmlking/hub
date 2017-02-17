import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
})
export class ChartsComponent {
  title = 'app works!';
  colorScheme = {
    domain: ['#F44336', '#3F51B5', '#8BC34A', '#2196F3', '#009688', '#FF5722', '#CDDC39', '#00BCD4', '#FFC107', '#795548', '#607D8B']
  };

  data = [
    {
      'name': 'Germany',
      'value': 46268
    },
    {
      'name': 'USA',
      'value': 53041
    },
    {
      'name': 'France',
      'value': 42503
    },
    {
      'name': 'United Kingdom',
      'value': 41787
    },
    {
      'name': 'Spain',
      'value': 29863
    },
    {
      'name': 'Italy',
      'value': 35925
    }
  ];

  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 46268
        },
        {
          name: '2000',
          value: 23685
        },
        {
          name: '1990',
          value: 22219
        }
      ]
    },

    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 48377
        },
        {
          name: '2000',
          value: 36449
        },
        {
          name: '1990',
          value: 23954
        }
      ]
    },

    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 42503
        },
        {
          name: '2000',
          value: 22466
        },
        {
          name: '1990',
          value: 21833
        }
      ]
    },

    {
      name: 'United Kingdom',
      series: [
        {
          name: '2010',
          value: 38363
        },
        {
          name: '2000',
          value: 26296
        },
        {
          name: '1990',
          value: 18632
        }
      ]
    }
  ];


  constructor() { }



}
