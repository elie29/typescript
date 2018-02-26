import { IReport } from './IReport';

export class Report implements IReport {
  constructor(private data: Array<string>) {}

  run() {
    this.data.forEach(line => console.log(line));
  }
}
