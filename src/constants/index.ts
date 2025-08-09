// Application constants

export const APP_CONFIG = {
  name: 'DL Web',
  description: 'Deep Learning Paper Reader',
  version: '1.0.0',
} as const;

export const ROUTES = {
  HOME: '/',
  PAPERS: '/papers',
  VIEWER: '/viewer',
  LEARNING_PATHS: '/learning-paths',
  SETTINGS: '/settings',
} as const;

export const PAPER_STATUS = {
  NOT_STARTED: 'not-started',
  READING: 'reading',
  COMPLETED: 'completed',
} as const;

export const API_ENDPOINTS = {
  PAPERS: '/api/papers',
  UPLOAD: '/api/upload',
  USER_PROGRESS: '/api/user-progress',
  LEARNING_PATHS: '/api/learning-paths',
} as const;
