// Global type definitions for DL Web application

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  pdfUrl: string;
  uploadedAt: Date;
  tags: string[];
}

export interface UserProgress {
  id: string;
  paperId: string;
  userId: string;
  currentPage: number;
  totalPages: number;
  status: 'not-started' | 'reading' | 'completed';
  lastReadAt: Date;
  notes: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  paperIds: string[];
  createdBy: string;
  isPublic: boolean;
  createdAt: Date;
}
