import React from 'react';

export default function NsbmIntakeBillboard({ lang = 'en' }) {
  // Official Atsuko International Instagram Post Highlights (4 Unique Posts)
  const posts = [
    {
      id: 'DeQjepkEwiW',
      title: 'Caregiver (SSW Visa) Practical Training - Atsuko International'
    },
    {
      id: 'DV0wLR8kYh1',
      title: 'Official 2027 April Intake & SSW Admissions - Atsuko International'
    },
    {
      id: 'Da1rbndEvGK',
      title: 'Food Service (SSW Visa) Approvals - Atsuko International'
    },
    {
      id: 'DZ_jTzyCJha',
      title: 'Batch 17 Native Sensei Classroom Immersion - Atsuko International'
    }
  ];

  return (
    <section className="nsbm-intake-section" aria-label="Atsuko Admissions & Live Instagram Showcase">
      <div className="nsbm-intake-container">
        {/* 4 Posts Row Matching Website Width (No Repeating Posts) */}
        <div className="nsbm-four-posts-row">
          {posts.map((post) => (
            <div key={post.id} className="nsbm-post-stage">
              <iframe
                src={`https://www.instagram.com/p/${post.id}/embed/`}
                title={post.title}
                className="nsbm-post-iframe"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media; clipboard-write;"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
