import { TabbedReport } from './Report/TabbedReport';

const values = [
  ['Name', 'Gender', 'Age'],
  ['----', '------', '---'],
  ['Alice Green', 'Female', 55],
  ['Paul Pfifer', 'Male', 26],
  ['Louis Blakenship', 'Male', 44]
];
const r = new TabbedReport(values);
r.run();
