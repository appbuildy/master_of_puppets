import React, { useState } from 'react';
import Card from '../my-projects/card';
import './modal.css';

import { Modal } from 'antd';
import Token from './token';
import Base from './base';

const STEP_TOKEN = 'STEP_TOKEN';
const STEP_BASE = 'STEP_BASE';

const CreateProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(STEP_TOKEN);

  const renderStep = () => {
    if (step === STEP_TOKEN) {
      return <Token setStepBase={() => setStep(STEP_BASE)} />;
    } else if (step === STEP_BASE) {
      return (
        <Base
          setStepToken={() => setStep(STEP_TOKEN)}
          setStepBase={() => setStep(STEP_BASE)}
        />
      );
    }
  };

  return (
    <>
      <Modal
        visible={isOpen}
        bodyStyle={{ padding: 0 }}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        footer={null}
        closable={false}
        title={null}
        maskClosable={false}
        width={1000}
      >
        {renderStep()}
      </Modal>

      <Card onClick={() => setIsOpen(true)}> create</Card>
    </>
  );
};

export default CreateProject;
