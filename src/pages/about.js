import React from 'react';
import './about.css';

function About() {
  return (
    <div>
      <p className='about'>We are a team of Lehigh undergraduates developing and testing low-level programming 
      interfaces to operate on numerical systems.You and your team will build on existing software that allows for 
      standard numerical analysis functionality (e.g., solving a linear system using direct and iterative methods, 
      computing standard and generalized eigenvalue problems). Options for data visualization (e.g., mathematical 
      plots in 2- and 3d) should be included. A full list of expected functionality will be given at the start of the 
      project, and you are encouraged to contribute to this list (with Professor Carr’s approval). Your software should 
      allow for different data storage types (e.g., arrays and lists) and formats (e.g., compressed sparse row and 
      jagged diagonal). Such functionality is integral to Professor Carr’s research, and she is interested in software 
      that can grow beyond this capstone project. So, it should be built in such a way that plugins can be added later 
      on. Parallel algorithms can also be developed (e.g., sparse matrix-vector products and the Jacobi iteration), but 
      only after successful and efficient development of the sequential algorithms. You are encouraged to build a 
      theoretical analysis of the complexity of the implemented algorithms. Your software should not be proprietary 
      (e.g., while you may develop some concepts initially in MATLAB, your final project should not depend on it).
 
      Professor Carr is also interested in publishing scholarly articles on this work with opportunities for group members 
      to serve as co-authors alongside her. So, this project is especially well-suited for those students motivated to 
      pursue graduate degrees or other research opportunities post-graduation. Regardless of future ambitions, any future 
      work done with or on this software will always include acknowledgement of those who contributed to its development.
      
      The first version of this software developed by a team of CS students in the 2022 capstone course and their work 
      can be found here.  This page includes information on how to download, install, and run the current version of the 
      software. The 2022 team members will be available (within reason) during the Spring 2023 semester to assist the 2023 
      team in onboarding and with general troubleshooting.  The expectation of the 2023 team is that they, too, will 
      similarly make themselves available to the 2024 team.
 

      </p>
    </div>
  );
}

export default About;
