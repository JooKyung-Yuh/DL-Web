import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Paper } from '@/types';

interface PaperState {
  papers: Paper[];
  selectedPaper: Paper | null;
  currentPage: number;
  isLoading: boolean;
  error: string | null;
}

interface PaperActions {
  setPapers: (papers: Paper[]) => void;
  addPaper: (paper: Paper) => void;
  selectPaper: (paper: Paper | null) => void;
  setCurrentPage: (page: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

type PaperStore = PaperState & PaperActions;

export const usePaperStore = create<PaperStore>()(
  devtools(
    (set) => ({
      // State
      papers: [],
      selectedPaper: null,
      currentPage: 1,
      isLoading: false,
      error: null,

      // Actions
      setPapers: (papers) => set({ papers }, false, 'setPapers'),
      
      addPaper: (paper) =>
        set(
          (state) => ({ papers: [...state.papers, paper] }),
          false,
          'addPaper'
        ),

      selectPaper: (paper) => set({ selectedPaper: paper }, false, 'selectPaper'),

      setCurrentPage: (page) => set({ currentPage: page }, false, 'setCurrentPage'),

      setLoading: (loading) => set({ isLoading: loading }, false, 'setLoading'),

      setError: (error) => set({ error }, false, 'setError'),

      clearError: () => set({ error: null }, false, 'clearError'),
    }),
    {
      name: 'paper-store',
    }
  )
);
