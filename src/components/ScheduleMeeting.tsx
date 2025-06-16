
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export const ScheduleMeeting = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScheduleMeeting = () => {
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ2g2UbVl_WK9r5JlBqO9GpFKVQC2YpXOHSO2WM6zfE7WLnK7_QHvR6XwSLpOTsJhMcqEGqI', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="bg-white rounded-lg shadow-2xl p-4 max-w-sm border border-gray-200">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl leading-none"
        >
          ×
        </button>
        
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Schedule a Meeting</h4>
            <p className="text-sm text-gray-600">Let's discuss your project</p>
          </div>
        </div>
        
        <Button 
          onClick={handleScheduleMeeting}
          className="w-full bg-primary hover:bg-primary/90 text-white"
          size="sm"
        >
          Book 15-30 min slot
        </Button>
      </div>
    </div>
  );
};
