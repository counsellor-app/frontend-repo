import React from 'react';
import MenuBar from '../component/menubar/menubar';
import "./search_counsellor.css"
import CounselingCard from '../component/counselling_card/counselling_card';
function SearchCounsellor(props) {
  const counselingServices = [
   
    {
      title: 'Career Counseling',
      description: 'Guidance for career planning and development.',
      image: 'career_counseling_image.jpg',
    },
    {
      title: 'Relationship Counseling',
      description: 'Assistance for couples and families to improve relationships.',
      image: 'relationship_counseling_image.jpg',
    },
    {
      title: 'Substance Abuse Counseling',
      description: 'Support for individuals struggling with addiction and substance abuse.',
      image: 'substance_abuse_counseling_image.jpg',
    },
    {
      title: 'Rehabilitation Counseling',
      description: 'Assistance for individuals with physical, mental, or emotional disabilities.',
      image: 'rehabilitation_counseling_image.jpg',
    },
    {
      title: 'School and Career Counseling',
      description: 'Guidance for students in educational and career planning.',
      image: 'school_career_counseling_image.jpg',
    },
    {
      title: 'Grief Counseling',
      description: 'Support for individuals coping with loss and bereavement.',
      image: 'grief_counseling_image.jpg',
    },
    {
      title: 'Behavioral Disorder Counseling',
      description: 'Assistance for individuals with behavioral issues.',
      image: 'behavioral_disorder_counseling_image.jpg',
    },
    {
      title: 'Child and Adolescent Counseling',
      description: 'Support for children and teenagers dealing with various issues.',
      image: 'child_adolescent_counseling_image.jpg',
    },
    {
      title: 'Marriage and Family Counseling',
      description: 'Assistance for couples and families to improve relationships.',
      image: 'marriage_family_counseling_image.jpg',
    },
  ];
  
  return (
    <div>
      <MenuBar logo="search_counsellor" />
      <div className="header">
        {/* Other header content */}
      </div>
      <div className="counselor-categories">
        <h2>Explore Our Counselor Categories</h2>
      </div>
      <div className="counseling-page">
      <h2 className="counseling-page-title">Counseling Services</h2>

      
      <div className="counseling-cards-container">
        {counselingServices.map((service, index) => (
          <CounselingCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default SearchCounsellor;