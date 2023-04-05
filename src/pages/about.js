import React from 'react';
import './about.css';

// This component displays information about the project
function About() {
  return (
    <div>
      <p className='about'>
        We are a team of Lehigh undergraduates developing and testing low-level programming 
        interfaces to operate on numerical systems. Our team is building on existing 
        software that allows for standard numerical analysis functionality (e.g., solving a linear 
        system using direct and iterative methods, computing standard and generalized eigenvalue 
        problems). Options for data visualization (e.g., mathematical plots in 2- and 3d) will 
        be included. A full list of expected functionality was given at the start of the 
        project, and we are encouraged to contribute to this list (with Professor Carr’s approval). 
        Your software allows for different data storage types (e.g., arrays and lists) and 
        formats (e.g., compressed sparse row and jagged diagonal). Such functionality is integral 
        to Professor Carr’s research, and she is interested in software that can grow beyond this 
        Capstone project. So, it is built in such a way that plugins can be added later on. 
        Parallel algorithms have also been developed (e.g., sparse matrix-vector products and the 
        Jacobi iteration), and this was after successful and efficient development of the sequential 
        algorithms. We were encouraged to build a theoretical analysis of the complexity of the 
        implemented algorithms. Our software is not proprietary.
      </p>

      <p className='about'>
        Professor Carr is also interested in publishing scholarly articles on this work with 
        opportunities for group members to serve as co-authors alongside her. So, this project is 
        especially well-suited for those students motivated to pursue graduate degrees or other 
        research opportunities post-graduation. Regardless of future ambitions, any future work 
        done with or on this software will always include acknowledgement of those who contributed 
        to its development.
      </p>

      <p className='about'>
        The first version of this software developed by a team of CS students in the 2022 Capstone 
        course and their work can be found here. This page includes information on how to download, 
        install, and run the current version of the software. The 2023 team members will be available 
        (within reason) during the Fall 2023 semester to assist the 2024 team in onboarding and 
        with general troubleshooting. The expectation of the 2024 team is that they, too, will 
        similarly make themselves available to the 2025 team.
      </p>
    </div>
  );
}

export default About;
