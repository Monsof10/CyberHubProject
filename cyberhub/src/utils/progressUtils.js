import { 
  MODULE_STATUS, 
  MODULE_PROGRESS, 
  MODULE_ORDER,
  LEVEL_PROGRESS_WEIGHT 
} from '../constants/progressConstants';

// Calculate progress for a single module within a level
export const calculateModuleProgress = (module) => {
  if (!module) return 0;
  
  // If component_progress exists, calculate progress based on it
  if (module.component_progress) {
    const cp = module.component_progress;
    if (cp.final_quiz.completed) return 100;
    if (cp.final_quiz.started) return 80;
    if (cp.labs.third.completed) return 80;
    if (cp.labs.third.started) return 64;
    if (cp.labs.second.completed) return 64;
    if (cp.labs.second.started) return 48;
    if (cp.labs.first.completed) return 48;
    if (cp.labs.first.started) return 32;
    if (cp.initial_quiz.completed) return 32;
    if (cp.initial_quiz.started) return 16;
    if (cp.article.completed) return 16;
    if (cp.article.started) return 0;
    return 0;
  }
  
  // Fallback to old status-based progress
  return MODULE_PROGRESS[module.status] || 0;
};

// Calculate overall level progress (0-100%)
export const calculateLevelProgress = (levelProgress) => {
  if (!levelProgress || levelProgress.length === 0) return 0;
  
  // Find the highest progress state for each component
  let articleProgress = 0;
  let quizProgress = 0;
  let labProgress = 0;
  let finalQuizProgress = 0;
  
  levelProgress.forEach(module => {
    const progress = calculateModuleProgress(module);
    const status = module.status;
    
    // Update component progress based on status
    if (status.includes('article')) {
      articleProgress = Math.max(articleProgress, progress);
    } else if (status.includes('initial_quiz')) {
      quizProgress = Math.max(quizProgress, progress);
    } else if (status.includes('lab')) {
      labProgress = Math.max(labProgress, progress);
    } else if (status.includes('final_quiz')) {
      finalQuizProgress = Math.max(finalQuizProgress, progress);
    }
  });
  
  // Return the highest progress achieved
  return Math.max(articleProgress, quizProgress, labProgress, finalQuizProgress);
};

// Calculate overall course progress (0-100%)
export const calculateCourseProgress = (levels) => {
  if (!levels || levels.length === 0) return 0;
  
  // Each completed level contributes LEVEL_PROGRESS_WEIGHT% to total progress
  let totalProgress = 0;
  levels.forEach(level => {
    const levelProgress = calculateLevelProgress(level.modules);
    if (levelProgress === 100) {
      totalProgress += LEVEL_PROGRESS_WEIGHT;
    }
  });
  
  return totalProgress;
};

// Check if a module should be locked based on previous module completion
export const isModuleLocked = (currentStatus, previousModuleStatus) => {
  if (!previousModuleStatus) return false;
  
  // Get the component types
  const currentComponent = getComponentType(currentStatus);
  const previousComponent = getComponentType(previousModuleStatus);
  
  // If they're different components, previous must be completed
  if (currentComponent !== previousComponent) {
    return !previousModuleStatus.includes('completed');
  }
  
  // For same component, just check the sequence
  const currentIndex = MODULE_ORDER.indexOf(currentStatus);
  const previousIndex = MODULE_ORDER.indexOf(previousModuleStatus);
  return currentIndex > previousIndex && !previousModuleStatus.includes('completed');
};

// Helper function to get component type from status
const getComponentType = (status) => {
  if (!status) return '';
  if (status.includes('article')) return 'article';
  if (status.includes('initial_quiz')) return 'initial_quiz';
  if (status.includes('lab')) return 'lab';
  if (status.includes('final_quiz')) return 'final_quiz';
  return '';
};

// Get the next module in sequence
export const getNextModule = (currentStatus) => {
  const currentIndex = MODULE_ORDER.indexOf(currentStatus);
  if (currentIndex < 0 || currentIndex >= MODULE_ORDER.length - 1) return null;
  return MODULE_ORDER[currentIndex + 1];
};

// Check if a level is completed
export const isLevelCompleted = (levelProgress) => {
  return calculateLevelProgress(levelProgress) === 100;
};

// Get module completion status text
export const getModuleStatusText = (module) => {
  if (!module) return 'Not Started';
  
  if (module.component_progress) {
    const cp = module.component_progress;
    if (cp.final_quiz.completed) return 'Final Quiz Completed';
    if (cp.final_quiz.started) return 'Final Quiz Started';
    if (cp.labs.third.completed) return 'Advanced Lab Completed';
    if (cp.labs.third.started) return 'Advanced Lab Started';
    if (cp.labs.second.completed) return 'Intermediate Lab Completed';
    if (cp.labs.second.started) return 'Intermediate Lab Started';
    if (cp.labs.first.completed) return 'Basic Lab Completed';
    if (cp.labs.first.started) return 'Basic Lab Started';
    if (cp.initial_quiz.completed) return 'Initial Quiz Completed';
    if (cp.initial_quiz.started) return 'Initial Quiz Started';
    if (cp.article.completed) return 'Course Material Completed';
    if (cp.article.started) return 'Course Material Started';
    return 'Not Started';
  }

  if (module.completed) return 'Completed';
  return 'In Progress';
};

// Format progress percentage for display
export const formatProgress = (progress) => {
  return `${Math.round(progress)}%`;
};
