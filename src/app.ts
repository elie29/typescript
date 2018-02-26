import { Report } from './Report/Report';
import { pad } from './utils/string';

let values = ['Alice Green', 'Ben Lesh', 'John Travolta'];
values = values.map(value => pad(value, 15, '*'));

const r = new Report(values);
r.run();
