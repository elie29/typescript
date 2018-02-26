import { IReport } from './IReport';

export class Report implements IReport {
  constructor(protected data: Array<string>) {}

  run() {
    this.data.forEach(line => console.log(line));
  }
}
