import { ReportConfig } from './report-config';

export class ReportValidator {
  static validate(config: ReportConfig): boolean {
    if (!config.title || config.title.length === 0) {
      return false;
    }
    return true;
  }
  
  static validateTitle(title: string): boolean {
    return title.length > 0 && title.length <= 100;
  }
}

  static validateFormat(format: string): boolean {
    return ['pdf', 'html', 'markdown'].includes(format);
  }
