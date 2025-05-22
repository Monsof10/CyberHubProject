// Module status constants
export const MODULE_STATUS = {
  // Article progress
  ARTICLE_STARTED: 'article_started',
  ARTICLE_COMPLETED: 'article_completed',
  
  // Initial quiz progress
  INITIAL_QUIZ_STARTED: 'initial_quiz_started',
  INITIAL_QUIZ_COMPLETED: 'initial_quiz_completed',
  
  // Lab progress
  FIRST_LAB_STARTED: 'first_lab_started',
  FIRST_LAB_COMPLETED: 'first_lab_completed',
  SECOND_LAB_STARTED: 'second_lab_started',
  SECOND_LAB_COMPLETED: 'second_lab_completed',
  THIRD_LAB_STARTED: 'third_lab_started',
  THIRD_LAB_COMPLETED: 'third_lab_completed',
  
  // Final quiz progress
  FINAL_QUIZ_STARTED: 'final_quiz_started',
  FINAL_QUIZ_COMPLETED: 'final_quiz_completed'
};

// Progress percentage within a level
export const MODULE_PROGRESS = {
  // Article progress (0-16%)
  [MODULE_STATUS.ARTICLE_STARTED]: 0,
  [MODULE_STATUS.ARTICLE_COMPLETED]: 16,
  
  // Initial quiz progress (16-32%)
  [MODULE_STATUS.INITIAL_QUIZ_STARTED]: 16,
  [MODULE_STATUS.INITIAL_QUIZ_COMPLETED]: 32,
  
  // Lab progress (32-80%)
  [MODULE_STATUS.FIRST_LAB_STARTED]: 32,
  [MODULE_STATUS.FIRST_LAB_COMPLETED]: 48,
  [MODULE_STATUS.SECOND_LAB_STARTED]: 48,
  [MODULE_STATUS.SECOND_LAB_COMPLETED]: 64,
  [MODULE_STATUS.THIRD_LAB_STARTED]: 64,
  [MODULE_STATUS.THIRD_LAB_COMPLETED]: 80,
  
  // Final quiz progress (80-100%)
  [MODULE_STATUS.FINAL_QUIZ_STARTED]: 80,
  [MODULE_STATUS.FINAL_QUIZ_COMPLETED]: 100
};

// Module display names
export const MODULE_NAMES = {
  [MODULE_STATUS.ARTICLE_STARTED]: 'Course Material',
  [MODULE_STATUS.INITIAL_QUIZ_STARTED]: 'Initial Quiz',
  [MODULE_STATUS.FIRST_LAB_STARTED]: 'Basic Lab',
  [MODULE_STATUS.SECOND_LAB_STARTED]: 'Intermediate Lab',
  [MODULE_STATUS.THIRD_LAB_STARTED]: 'Advanced Lab',
  [MODULE_STATUS.FINAL_QUIZ_COMPLETED]: 'Final Quiz'
};

// Module sequence order
export const MODULE_ORDER = [
  MODULE_STATUS.ARTICLE_STARTED,
  MODULE_STATUS.INITIAL_QUIZ_STARTED,
  MODULE_STATUS.FIRST_LAB_STARTED,
  MODULE_STATUS.SECOND_LAB_STARTED,
  MODULE_STATUS.THIRD_LAB_STARTED,
  MODULE_STATUS.FINAL_QUIZ_COMPLETED
];

// Level constants
export const LEVELS = {
  BEGINNER: 1,
  BASIC: 2,
  INTERMEDIATE: 3,
  ADVANCED: 4,
  EXPERT: 5
};

// Each level represents 20% of total course progress
export const LEVEL_PROGRESS_WEIGHT = 20;

// Level names
export const LEVEL_NAMES = {
  [LEVELS.BEGINNER]: 'Beginner',
  [LEVELS.BASIC]: 'Basic',
  [LEVELS.INTERMEDIATE]: 'Intermediate',
  [LEVELS.ADVANCED]: 'Advanced',
  [LEVELS.EXPERT]: 'Expert'
};
