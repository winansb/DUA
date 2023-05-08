import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import trialDataArray from "../../../data/TrialData";
import generalData from "../../../data/GeneralData";
import { getTest, updateTest } from "../../../redux/actions/testActions";

function ParticipantSubmitForm({ participant, trialType, onClose, onModalTransition  }) {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const dispatch = useDispatch();

  const determineState = () => {
    let disableGeneralData = false;

    trialDataArray.forEach((trial) => {
      const upperCaseTrialType = trial.trialType.toUpperCase();

      if (
        participant[`${upperCaseTrialType}_COMPLETE`] ||
        participant[`${upperCaseTrialType}_IN_PROGRESS`] !== 0
      ) {
        disableGeneralData = true;
      }
    });

    return disableGeneralData;
  };

  const isDisabled = determineState();

  useEffect(() => {
    async function fetchTest() {
      if (loading) {
        const fetchedTest = await dispatch(getTest(participant.TRIAL_ID));

        if (fetchedTest) {
          setTest(fetchedTest.data);
        }
        setLoading(false);
      }
    }

    fetchTest();
  }, [participant, loading, dispatch]);

  useEffect(() => {
    if (test) {
      const initialValues = {};

      generalData.forEach((field) => {
        initialValues[field.serverName] = test[field.serverName] || "";
      });

      trialDataArray.forEach((trial) => {
        if (trial.trialType === trialType) {
          trial.preTrialQuestions.forEach((item) => {
            initialValues[item.serverName] = test[item.serverName] || "";
          });
        }
      });

      setSelectedOptions(initialValues);
    }
  }, [test, trialType, participant]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if there are any changes
    const hasChanges = Object.keys(selectedOptions).some(
      (key) => selectedOptions[key] !== test[key]
    ); 

    if (hasChanges) {
      // Create a new updatedTest object with the changed values
      const updatedTest = {
        ...test,
        ...selectedOptions,
      };

      // Call the updateTest action with the updatedTest object and test UID
      await dispatch(updateTest(test.UID, updatedTest));
    }

    // Close the form
    onClose();
    // Transition to the next modal
    onModalTransition();
  };

  const handleOptionChange = (optionId, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionId]: value,
    }));
  };

  const trial = trialDataArray.find((t) => t.trialType === trialType);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {generalData.map((field) => (
          <InfoRow key={field.id}>
            <InfoLabel>{field.label}:</InfoLabel>
            <InfoData>
              {field.type === "text" ? (
                <Input
                  value={selectedOptions[field.serverName] || ""}
                  onChange={(e) => handleOptionChange(field.serverName, e.target.value)}
                  disabled={isDisabled}
                />
              ) : (
                <Select
                  value={selectedOptions[field.serverName] || ""}
                  onChange={(e) => handleOptionChange(field.serverName, e.target.value)}
                  disabled={isDisabled}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              )}
            </InfoData>
          </InfoRow>
        ))}
        <React.Fragment key={`trial-${trialType}`}>
          <h1>{trial.trialType}</h1>
          {trial.preTrialQuestions.map((item, index) => (
            <InfoRow key={`${trial.trialType}-${index}`}>
              <InfoLabel>{item.question}:</InfoLabel>
              <InfoData>
                  <Select
                    value={selectedOptions[item.serverName] || ""}
                    onChange={(e) =>
                      handleOptionChange(item.serverName, e.target.value)
                    }
                  >
                {item.options.map((option, optionIndex) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                  ))}
                </Select>
              </InfoData>
            </InfoRow>
            ))}
        </React.Fragment>
      <Buttons>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <SubmitButton type="submit">Confirm</SubmitButton>
      </Buttons>
      </Form>
    </Container>
  );
}

export default ParticipantSubmitForm;

const Container = styled.div`
text-align: center;
`;

const Form = styled.form``;

const InfoRow = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
max-width: 800px;
margin-bottom: 10px;
`;

const InfoLabel = styled.div`
font-weight: bold;
flex: 1;
text-align: left;
`;

const InfoData = styled.div`
flex: 1;
text-align: left;
margin-right: 10px;

&:last-child {
margin-right: 0;
}
`;

const Input = styled.input`
font-size: 1rem;
padding: 0.5rem;
border-radius: 4px;
border: 1px solid #ccc;
width: 100%;
${({ disabled }) => disabled && "background-color: #f0f0f0;"}
`;

const Select = styled.select`
font-size: 1rem;
padding: 0.5rem;
border-radius: 4px;
border: 1px solid #ccc;
width: 100%;
${({ disabled }) => disabled && "background-color: #f0f0f0;"}
`;

const Buttons = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
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