import React, { useState } from 'react';
import '../Assets/Css/PhysicalActivities.css';
import { Heart, Brain, Dumbbell, Leaf, Sun, Activity } from 'lucide-react';

function PhysicalActivities() {
  const [selectedActivity, setSelectedActivity] = useState('yoga');
  
  const activities = {
    yoga: {
      icon: Heart,
      title: 'Yoga & Stretching',
      description: 'Gentle yoga poses and stretching exercises for flexibility and balance.',
      videos: [
        { title: 'Gentle Morning Yoga for Seniors', duration: '15 min', instructor: 'Sarah Johnson' },
        { title: 'Chair Yoga Basics', duration: '12 min', instructor: 'Mike Chen' },
        { title: 'Evening Stretch Routine', duration: '18 min', instructor: 'Emma Davis' },
        { title: 'Balance & Flexibility', duration: '20 min', instructor: 'David Wilson' }
      ]
    },
    meditation: {
      icon: Brain,
      title: 'Meditation & Mindfulness',
      description: 'Calming meditation practices and mindfulness exercises for mental wellness.',
      videos: [
        { title: '5-Minute Meditation', duration: '5 min', instructor: 'Lisa Park' },
        { title: 'Breathing Exercises', duration: '10 min', instructor: 'James Miller' },
        { title: 'Mindfulness Practice', duration: '15 min', instructor: 'Anna Rodriguez' },
        { title: 'Stress Relief Session', duration: '12 min', instructor: 'Tom Anderson' }
      ]
    },
    walking: {
      icon: Sun,
      title: 'Walking & Mobility',
      description: 'Gentle walking routines and mobility exercises for daily movement.',
      videos: [
        { title: 'Indoor Walking Guide', duration: '20 min', instructor: 'Helen Brown' },
        { title: 'Balance Exercises', duration: '15 min', instructor: 'Robert Lee' },
        { title: 'Mobility Stretches', duration: '18 min', instructor: 'Maria Garcia' },
        { title: 'Step-by-Step Walking', duration: '25 min', instructor: 'John Smith' }
      ]
    },
    strength: {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Light strength exercises using body weight and gentle resistance.',
      videos: [
        { title: 'Light Weight Training', duration: '20 min', instructor: 'Carlos Mendez' },
        { title: 'Resistance Band Workout', duration: '18 min', instructor: 'Susan White' },
        { title: 'Body Weight Exercises', duration: '22 min', instructor: 'Kevin Johnson' },
        { title: 'Core Strengthening', duration: '16 min', instructor: 'Rachel Green' }
      ]
    },
    taichi: {
      icon: Leaf,
      title: 'Tai Chi & Qigong',
      description: 'Flowing movements and breathing exercises for harmony and balance.',
      videos: [
        { title: 'Tai Chi for Beginners', duration: '25 min', instructor: 'Master Chen' },
        { title: 'Flow Movements', duration: '20 min', instructor: 'Grace Wong' },
        { title: 'Balance & Coordination', duration: '18 min', instructor: 'Li Wei' },
        { title: 'Energy Flow Practice', duration: '22 min', instructor: 'Yuki Tanaka' }
      ]
    },
    dance: {
      icon: Activity,
      title: 'Music & Movement',
      description: 'Fun dance moves and rhythmic exercises to music.',
      videos: [
        { title: 'Gentle Dance Moves', duration: '20 min', instructor: 'Sophie Turner' },
        { title: 'Rhythm Exercises', duration: '15 min', instructor: 'Marcus Davis' },
        { title: 'Fun Movement Games', duration: '18 min', instructor: 'Emma Wilson' },
        { title: 'Dance Fitness', duration: '25 min', instructor: 'Alex Rivera' }
      ]
    }
  };
  
  const currentActivity = activities[selectedActivity];
  const IconComponent = currentActivity.icon;
  
  return (
    <main className="physical-activities-page">
      <section className="hero-section">
        <div className="container">
          <h1>Physical Activities & Wellness</h1>
          <p className="hero-subtitle">Choose an activity to get started with guided videos</p>
        </div>
      </section>
      
      <section className="activities-section">
        <div className="container">
          <div className="activity-tabs">
            {Object.entries(activities).map(([key, activity]) => {
              const IconComponent = activity.icon;
              return (
                <button 
                  key={key}
                  className={`activity-tab ${selectedActivity === key ? 'active' : ''}`}
                  onClick={() => setSelectedActivity(key)}
                >
                  <IconComponent size={20} />
                  <span>{activity.title}</span>
                </button>
              );
            })}
          </div>

          <div className="activity-content">
            <div className="activity-details">
              <div className="activity-header">
                <div className="activity-icon">
                  <IconComponent size={32} />
                </div>
                <div>
                  <h3>{currentActivity.title}</h3>
                  <p>{currentActivity.description}</p>
                </div>
              </div>
              
              <div className="videos-showcase">
                {currentActivity.videos.map((video, index) => (
                  <div key={index} className="video-card">
                    <iframe 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title={video.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    />
                    <div className="video-info">
                      <h4>{video.title}</h4>
                      <p className="video-meta">{video.duration} • {video.instructor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PhysicalActivities;
