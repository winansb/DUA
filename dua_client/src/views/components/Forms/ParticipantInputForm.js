import React, { useState } from "react";
import styled from "styled-components";
import { createParticipant } from "../../../redux/actions/participantActions";
import { createTest } from "../../../redux/actions/testActions";
import { useDispatch } from "react-redux";
import trialDataArray from "../../../data/TrialData";
import generalData from "../../../data/GeneralData";

function ParticipantInputForm({ onClose }) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all fields have values
    const allFieldsFilled =
      Object.keys(selectedOptions).length ===
      generalData.length + trialDataArray.reduce((count, trial) => count + trial.preTrialQuestions.length, 0);

    if (allFieldsFilled) {
      const generalDataEntries = generalData.reduce((obj, field) => {
        obj[field.serverName] = selectedOptions[field.id];
        return obj;
      }, {});

      const trialDataEntries = trialDataArray.reduce((obj, trial) => {
        trial.preTrialQuestions.forEach((item, index) => {
          obj[`${item.serverName}`] = selectedOptions[`${trial.trialType}-${index}`];
        });
        return obj;
      }, {});
    
      const testData = {
        ...generalDataEntries,
        ...trialDataEntries,
      };

      const createdTest = await dispatch(createTest(testData));


      const createdParticipant = await dispatch(createParticipant({
          PARTICIPANT_ID: selectedOptions["participantID"],
          TRIAL_ID: createdTest.UID,
        })
      );

      console.log(createdParticipant);
      onClose();
    }
  };

  const handleOptionChange = (optionId, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionId]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {generalData.map((field) => {
        if (field.type === "text") {
          return (
            <Label key={field.id}>
              {field.label}:
              <Input
                value={selectedOptions[field.id] || ""}
                onChange={(e) => handleOptionChange(field.id, e.target.value)}
              />
            </Label>
          );
        } else {
          return (
            <Label key={field.id}>
              {field.label}:
              <Select
                value={selectedOptions[field.id] || ""}
                onChange={(e) => handleOptionChange(field.id, e.target.value)}
              >
                <option value="">Select...</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Label>
          );
        }
      })}
      {trialDataArray.map((trial, trialIndex) => (
        <React.Fragment key={`trial-${trialIndex}`}>
          <h2>{trial.trialType}</h2>
          {trial.preTrialQuestions.map((item, index) => (
            <LabelRow key={`${trial.trialType}-${index}`}>
              <Label>
                {item.question}:
                <Select
                  value={selectedOptions[`${trial.trialType}-${index}`] || ""}
                  onChange={(e) =>
                    handleOptionChange(`${trial.trialType}-${index}`, e.target.value)
                  }
                >
                  <option value="">Select...</option>
                  {item.options.map((option, optionIndex) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Label>
            </LabelRow>
          ))}
        </React.Fragment>
      ))}
      <ButtonRow>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <SubmitButton onClick={handleSubmit}>Confirm</SubmitButton>
      </ButtonRow>
    </Form>
  );
}
export default ParticipantInputForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const LabelRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
`;

const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  margin-right: 1rem;

  &:hover {
    background-color: #bbb;
  }
`;

const SubmitButton = styled.button`
  background-color: #7c5295;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #a180b3;
  }
`;
