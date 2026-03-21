/**
 * Gjeneron ID për një temë bazuar në klasën, kapitullin dhe emrin e temës
 */
export function generateTopicId(grade: number, chapterId: string, topicName: string): string {
  // Krijon një ID unik duke përdorur klasën, kapitullin dhe emrin e temës
  const gradePrefix = `grade${grade}`;
  const chapterPrefix = chapterId.replace('chapter-', '');
  
  // Konverton emrin e temës në format të vlefshëm për URL
  const topicSlug = topicName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Hiq karakteret speciale
    .replace(/\s+/g, '-') // Zëvendëso hapësirat me -
    .replace(/-+/g, '-') // Zëvendëso - të shumta me një -
    .trim();
  
  return `${gradePrefix}-${chapterPrefix}-${topicSlug}`;
}

/**
 * Gjeneron ID për një temë nga një string i plotë
 */
export function getTopicIdFromFullName(fullName: string, grade: number, chapterId: string): string {
  return generateTopicId(grade, chapterId, fullName);
}

