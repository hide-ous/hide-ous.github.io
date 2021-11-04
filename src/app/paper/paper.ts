export interface Author {
  firstname: string;
  lastname: string
}

export interface PressRelease{
  text: string;
  link: string
}
export interface Paper {
  key: string;
  authors: Author[];
  title: string;
  year: number;
  venue: string;
  link: string;
  description: string;
  press?: PressRelease[];
  award?: string;
  bibtex?: string;
  formatted?: string;
}
