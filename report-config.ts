export interface ReportConfig {
  title: string;
  format: 'pdf' | 'html' | 'markdown';
  includeTOC: boolean;
}

export interface ReportMetadata {
  author: string;
  createdAt: Date;
}
