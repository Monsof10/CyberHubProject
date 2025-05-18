import React from 'react';

const Syllabus = ({ modules, activeModule, toggleModule }) => {
  return (
    <section className="syllabus py-5 bg-light">
      <div className="container">
        <div className="syllabus-header">
          <h2>Syllabus</h2>
          <p>45 units • 168 lessons • 88 projects • 140 quizzes</p>
        </div>
        <div className="syllabus-content">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className="unit"
              onClick={() => toggleModule(module.id)}
            >
              <h5>
                <span className="unit-number">{module.id}</span>
                {module.title}
              </h5>
              <p>{module.description}</p>
              {activeModule === module.id && (
                <div className="unit-details active">
                  <h6>Units</h6>
                  <div className="units-grid">
                    {module.units.map((unit, index) => (
                      <div key={index} className="unit-item">
                        {unit}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
