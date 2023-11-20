import React, { useState } from 'react';
import { Box, Button, Step, StepLabel, Stepper, TextField, Typography, Container, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from '@mui/material';

const steps = ['Firma Bilgileri', 'Yazılım Bilgileri', 'Kullanıcı Sayısı', 'Tamamla'];

const validateStep = (formValues, stepFields) => {
  const errors = {};
  let isValid = true;

  for (const field of stepFields) {
    const value = formValues[field];
    if (value === '' || value === undefined || (Array.isArray(value) && value.length === 0)) {
      errors[field] = 'Lütfen Bu Alanı Doldurun!';
      isValid = false;
    }
  }

  return { isValid, errors };
};

const DemoForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    companyName: '',
    industry: '',
    fullName: '',
    email: '',
    phone: '',
    projectManager: '',
    // Add more fields for other steps
  });
  const [formErrors, setFormErrors] = useState({});

  const handleNext = () => {
    // Define fields for each step that need validation
    const stepValidationFields = {
      0: ['companyName',],
      1: ['projectManager'],
      // ...add more fields for other steps
    };

    // Perform validation for the current step
    const currentFieldsToValidate = stepValidationFields[activeStep] || [];
    const { isValid, errors } = validateStep(formValues, currentFieldsToValidate);

    // Update errors state or move to the next step
    if (!isValid) {
      setFormErrors(errors);
    } else {
      setFormErrors({}); // Clear errors
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <TextField
              name="companyName"
              label="Firma Adı*"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formValues.companyName}
              onChange={handleChange}
              error={!!formErrors.companyName}
              helperText={formErrors.companyName || ''}
            />
            {/* Yeni formlar buraya */}
          </>
        );
      case 1:
        return (
          <FormControl component="fieldset" error={!!formErrors.projectManager}>
            <FormLabel component="legend">Bünyenizde Ticari/ERP Yazılım Proje Ekibi veya Yöneticisi mevcut mu?</FormLabel>
            <RadioGroup
              name="projectManager"
              value={formValues.projectManager}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Evet, Mevcut" />
              <FormControlLabel value="no" control={<Radio />} label="Hayır, Mevcut Değil" />
              {/* ... other radio buttons */}
            </RadioGroup>
            <Typography variant="caption" color="error">
              {formErrors.projectManager || ''}
            </Typography>
          </FormControl>
        );
      // ... other steps
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Box className='form-margin' sx={{ borderRadius: 1 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          {activeStep === steps.length ? (
            <Typography sx={{ mt: 2, mb: 1 }}>
                <div className='mt-5 text-center'>
                    <img src='https://cpm.com.tr/wp-content/uploads/2021/07/cpm-logo-yazili.png' className='mb-5'/> <br/>
                    <h2 className='text-bold color-primary'>
                        Demo Talebiniz başarıyla alınmıştır. En kısa sürede dönüş yapılacaktır.
                    </h2> 
                </div>
            </Typography>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Önceki
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} variant='contained'>
                  {activeStep === steps.length - 1 ? 'Gönder' : 'Sonraki'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default DemoForm;
