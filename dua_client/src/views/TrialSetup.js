import React from 'react';

const WorkInProgressPage = () => {
  return (
    <div>
      <h1>Work in Progress</h1>
      <p>This page is under construction. Check back later for updates.</p>
    </div>
  );
};

export default WorkInProgressPage;
// import React, { useState } from "react";
// import styled from "styled-components";
// import ParticipantTable from "./components/ParticipantTable";

// function TrialSetup() {
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Do something with the input value here, like create a new participant
//     console.log(`Input value: ${inputValue}`);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <Container>
//       <Title>Testing Setup</Title>
//       <Form onSubmit={handleSubmit}>
//         <TextInput
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter participant name"
//         />
//         <Button type="submit">Add Participant</Button>
//       </Form>
//       <ParticipantTable />
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
// `;

// const Title = styled.h1`
//   font-size: 3.5rem;
//   margin-bottom: 2rem;
// `;

// const Form = styled.form`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const TextInput = styled.input`
//   font-size: 1.5rem;
//   padding: 0.5rem;
//   border-radius: 4px;
//   border: none;
//   margin-right: 1rem;
//   width: 300px;
// `;

// const Button = styled.button`
//   background-color: #7c5295;
//   color: #fff;
//   padding: 8px 16px;
//   border-radius: 4px;
//   font-size: 1.5rem;
//   cursor: pointer;
//   border: none;

//   &:hover {
//     background-color: #a180b3;
//   }
// `;

// export default TrialSetup;