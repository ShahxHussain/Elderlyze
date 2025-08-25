import React, { useState } from 'react';
import '../Assets/Css/PhysicalActivities.css';
import { Play, Clock, Users, Heart, Brain, Sun, Moon, Leaf, Dumbbell, Music } from 'lucide-react';

function PhysicalActivities() {
  const [selectedActivity, setSelectedActivity] = useState('yoga');

  const activities = {
    yoga: {
      title: "Yoga & Stretching",
      icon: <Sun size={24} />,
      description: "Gentle yoga poses and stretching exercises for flexibility and balance",
      videos: [
        {
          id: "dQw4w9WgXcQ", // Replace with actual yoga video ID
          title: "Gentle Morning Yoga for Seniors",
          duration: "15 min",
          instructor: "Sarah Johnson"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual yoga video ID
          title: "Chair Yoga for Balance",
          duration: "20 min",
          instructor: "Mike Chen"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual yoga video ID
          title: "Evening Relaxation Stretches",
          duration: "12 min",
          instructor: "Emma Davis"
        }
      ]
    },
    meditation: {
      title: "Meditation & Mindfulness",
      icon: <Brain size={24} />,
      description: "Guided meditation sessions for mental clarity and stress relief",
      videos: [
        {
          id: "dQw4w9WgXcQ", // Replace with actual meditation video ID
          title: "5-Minute Breathing Meditation",
          duration: "5 min",
          instructor: "Dr. Lisa Park"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual meditation video ID
          title: "Mindful Walking Practice",
          duration: "18 min",
          instructor: "James Wilson"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual meditation video ID
          title: "Body Scan Relaxation",
          duration: "25 min",
          instructor: "Maria Rodriguez"
        }
      ]
    },
    walking: {
      title: "Walking & Mobility",
      icon: <Leaf size={24} />,
      description: "Walking exercises and mobility training for daily movement",
      videos: [
        {
          id: "dQw4w9WgXcQ", // Replace with actual walking video ID
          title: "Indoor Walking Workout",
          duration: "30 min",
          instructor: "Tom Anderson"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual walking video ID
          title: "Balance & Gait Training",
          duration: "22 min",
          instructor: "Dr. Sarah Kim"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual walking video ID
          title: "Stair Climbing Safety",
          duration: "16 min",
          instructor: "Robert Taylor"
        }
      ]
    },
    strength: {
      title: "Strength Training",
      icon: <Dumbbell size={24} />,
      description: "Light strength exercises using body weight and light weights",
      videos: [
        {
          id: "dQw4w9WgXcQ", // Replace with actual strength video ID
          title: "Body Weight Squats",
          duration: "18 min",
          instructor: "Coach Mark"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual strength video ID
          title: "Wall Push-ups",
          duration: "15 min",
          instructor: "Jenny Smith"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual strength video ID
          title: "Light Resistance Band Workout",
          duration: "25 min",
          instructor: "Carlos Mendez"
        }
      ]
    },
    taiChi: {
      title: "Tai Chi & Qigong",
      icon: <Moon size={24} />,
      description: "Slow, flowing movements for balance, coordination and inner peace",
      videos: [
        {
          id: "dQw4w9WgXcQ", // Replace with actual tai chi video ID
          title: "Basic Tai Chi Forms",
          duration: "28 min",
          instructor: "Master Li Wei"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual tai chi video ID
          title: "Qigong Breathing Exercises",
          duration: "20 min",
          instructor: "Sifu Chen"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual tai chi video ID
          title: "Tai Chi for Arthritis",
          duration: "35 min",
          instructor: "Dr. Wang"
        }
      ]
    },
    music: {
      title: "Music & Movement",
      icon: <Music size={24} />,
      description: "Rhythmic exercises and dance moves to uplifting music",
      videos: [
        {
          id: "dQw4w9WgXcQ", // Replace with actual music video ID
          title: "Golden Oldies Dance Workout",
          duration: "32 min",
          instructor: "Dance Master Betty"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual music video ID
          title: "Seated Dance Moves",
          duration: "24 min",
          instructor: "Rhythm Coach Dave"
        },
        {
          id: "dQw4w9WgXcQ", // Replace with actual music video ID
          title: "Hand Clapping & Rhythms",
          duration: "18 min",
          instructor: "Music Therapist Amy"
        }
      ]
    }
  };

  const currentActivity = activities[selectedActivity];

  return (
    <div className="physical-activities-page">
      <div className="container">
        <header className="activities-header">
          <h1 className="activities-title">Physical Activities & Wellness</h1>
          <p className="activities-subtitle">Choose an activity to get started with guided videos</p>
        </header>

        <div className="activities-layout">
          {/* Activity Selection Sidebar */}
          <aside className="activities-sidebar">
            <h3 className="sidebar-title">Choose Activity</h3>
            <nav className="activity-nav">
              {Object.entries(activities).map(([key, activity]) => (
                <button
                  key={key}
                  className={`activity-nav-item ${selectedActivity === key ? 'active' : ''}`}
                  onClick={() => setSelectedActivity(key)}
                >
                  <span className="activity-nav-icon">{activity.icon}</span>
                  <span className="activity-nav-text">{activity.title}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Video Content Area */}
          <main className="video-content">
            <div className="activity-info">
              <div className="activity-header">
                <div className="activity-icon">{currentActivity.icon}</div>
                <div className="activity-details">
                  <h2 className="activity-title">{currentActivity.title}</h2>
                  <p className="activity-description">{currentActivity.description}</p>
                </div>
              </div>
            </div>

            <div className="videos-grid">
              {currentActivity.videos.map((video, index) => (
                <div key={index} className="video-card">
                  <div className="video-thumbnail">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="video-overlay">
                      <Play size={20} className="play-icon" />
                    </div>
                  </div>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <div className="video-meta">
                      <span className="video-duration">
                        <Clock size={14} />
                        {video.duration}
                      </span>
                      <span className="video-instructor">
                        <Users size={14} />
                        {video.instructor}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PhysicalActivities;
