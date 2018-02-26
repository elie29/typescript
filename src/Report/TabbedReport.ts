import { pad } from '../utils/string';
import { Report } from './Report';

export class TabbedReport extends Report {
  private maxLength: number[] = [];

  constructor(private values: (string | number)[][]) {
    /**
     * initialise report to empty
     * as we have class properties
     */
    super([]);

    this.setMaxLength();

    const data: string[] = [];
    this.formatValues().forEach(val => data.push(val));

    this.data = data;
  }

  private setMaxLength(): void {
    this.values.forEach(row => {
      row.forEach((v, i) => {
        const val = v + '';
        if (!this.maxLength[i] || val.length > this.maxLength[i]) {
          this.maxLength[i] = val.length;
        }
      });
    });
  }

  private formatValues(): string[] {
    return this.values.map(row => this.formatColumns(row));
  }

  private formatColumns(row: (string | number)[], seperator = ' '): string {
    return row
      .map((v, i) => pad(v + '', this.maxLength[i], seperator))
      .join(' ');
  }
}
