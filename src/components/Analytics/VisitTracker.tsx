import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { recordVisit } from '../../utils/analytics';

export default function VisitTracker() {
  const location = useLocation();

  useEffect(() => {
    // Record visit when route changes
    recordVisit(location.pathname);
  }, [location.pathname]);

  return null; // This component doesn't render anything
}

