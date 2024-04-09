// data/pdfPosts.ts
export interface PdfPost {
  id: number;
  title: string;
  date: string;
  file: string;
}

export const pdfPostID: PdfPost[] = [
  {
    id: 1,
    title: '魁北克经验移民\nPEQ快速移民项目',
    date: '11 Jan 2024',
    file: '/pdf/1.pdf'
  },
  {
    id: 2,
    title: '魁北克经验移民\nPEQ快速移民项目',
    date: '22 Jan 2024',
    file: '/pdf/2.pdf'
  },
  {
    id: 3,
    title: 'HEC暑期夏校',
    date: '02 April 2024',
    file: '/pdf/3.pdf'
  },
  {
    id: 4,
    title: 'PEQ移民\nCSM文秘类',
    date: '05 April 2024',
    file: '/pdf/4.pdf'
  }
];
