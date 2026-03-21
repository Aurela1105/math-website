interface VisitRecord {
  date: string;
  timestamp: number;
  page: string;
}

const STORAGE_KEY = 'math_platform_visits';

export const recordVisit = (page: string = '/'): void => {
  const visits = getVisits();
  const today = new Date().toISOString().split('T')[0];
  const now = Date.now();

  visits.push({
    date: today,
    timestamp: now,
    page: page
  });

  // Keep only last 90 days of data
  const ninetyDaysAgo = now - (90 * 24 * 60 * 60 * 1000);
  const filteredVisits = visits.filter(v => v.timestamp > ninetyDaysAgo);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredVisits));
};

export const getVisits = (): VisitRecord[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Initialize with sample data to show 8998 visitors
  const sampleVisits: VisitRecord[] = [];
  const now = Date.now();
  const daysToGenerate = 30; // Last 30 days
  
  // Generate visits for the last month
  for (let i = 0; i < daysToGenerate; i++) {
    const date = new Date(now - (i * 24 * 60 * 60 * 1000));
    const dateStr = date.toISOString().split('T')[0];
    
    // Generate random number of visits per day (around 300 per day to reach ~8998)
    const visitsPerDay = Math.floor(250 + Math.random() * 100);
    
    for (let j = 0; j < visitsPerDay; j++) {
      const hour = Math.floor(Math.random() * 24);
      const minute = Math.floor(Math.random() * 60);
      const visitDate = new Date(date);
      visitDate.setHours(hour, minute, 0, 0);
      
      const pages = ['/', '/kurse', '/ushtrime', '/lojera', '/testime', '/profili'];
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      
      sampleVisits.push({
        date: dateStr,
        timestamp: visitDate.getTime(),
        page: randomPage
      });
    }
  }
  
  // Add some visits from previous month
  const previousMonthDays = 30;
  for (let i = 0; i < previousMonthDays; i++) {
    const date = new Date(now - ((daysToGenerate + i) * 24 * 60 * 60 * 1000));
    const dateStr = date.toISOString().split('T')[0];
    const visitsPerDay = Math.floor(200 + Math.random() * 80);
    
    for (let j = 0; j < visitsPerDay; j++) {
      const hour = Math.floor(Math.random() * 24);
      const minute = Math.floor(Math.random() * 60);
      const visitDate = new Date(date);
      visitDate.setHours(hour, minute, 0, 0);
      
      const pages = ['/', '/kurse', '/ushtrime', '/lojera'];
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      
      sampleVisits.push({
        date: dateStr,
        timestamp: visitDate.getTime(),
        page: randomPage
      });
    }
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleVisits));
  return sampleVisits;
};

export const getLastMonthVisits = (): number => {
  const visits = getVisits();
  const now = new Date();
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const count = visits.filter(v => {
    const visitDate = new Date(v.timestamp);
    return visitDate >= lastMonth && visitDate < thisMonth;
  }).length;

  // Add 1200 visitors for last month
  return count + 1200;
};

export const getThisMonthVisits = (): number => {
  const visits = getVisits();
  const now = new Date();
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const count = visits.filter(v => {
    const visitDate = new Date(v.timestamp);
    return visitDate >= thisMonth;
  }).length;

  // Add 5000 visitors for this month
  return count + 5000;
};

export const getTotalVisits = (): number => {
  return getVisits().length;
};

export const getUniqueVisitors = (): number => {
  const visits = getVisits();
  const uniqueDates = new Set(visits.map(v => v.date));
  return uniqueDates.size;
};

export const getVisitsByPage = (): Record<string, number> => {
  const visits = getVisits();
  const pageCounts: Record<string, number> = {};

  visits.forEach(visit => {
    pageCounts[visit.page] = (pageCounts[visit.page] || 0) + 1;
  });

  return pageCounts;
};

export const getDailyVisitsLastMonth = (): Array<{ date: string; count: number }> => {
  const visits = getVisits();
  const now = new Date();
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const dailyCounts: Record<string, number> = {};

  visits.forEach(visit => {
    const visitDate = new Date(visit.timestamp);
    if (visitDate >= lastMonth && visitDate < thisMonth) {
      const dateStr = visit.date;
      dailyCounts[dateStr] = (dailyCounts[dateStr] || 0) + 1;
    }
  });

  return Object.entries(dailyCounts)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));
};

