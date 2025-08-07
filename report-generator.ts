import { ReportConfig } from './report-config';
import { ReportValidator } from './report-validator';

export class ReportGenerator {
  constructor(private config: ReportConfig) {
    if (!ReportValidator.validate(config)) {
      throw new Error('Invalid report configuration');
    }
  }

  generate(): string {
    return `# ${this.config.title}\n\nReport content here...`;
  }
}
