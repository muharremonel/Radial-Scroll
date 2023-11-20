import React, { useState } from 'react';
import { Box, Button, TextField, Checkbox, FormControlLabel, Container, Typography} from '@mui/material';


const SupportForm = () => {
    const [formValues, setFormValues] = useState({
      companyName: '',
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      kvkkConsent: false,
      messageConsent: false,
    });
    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleChange = (event) => {
      const { name, value, checked, type } = event.target;
      
      setFormValues({
        ...formValues,
        [name]: type === 'checkbox' ? checked : value,
      });
      
      if (value) {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        setFormSubmitted(true);
      }
    };
  
    const validateForm = () => {
      const errors = {};
      let isValid = true;
  
      const fieldsToValidate = ['companyName', 'fullName', 'email', 'phone', 'subject', 'message'];
  
      fieldsToValidate.forEach((field) => {
        if (!formValues[field]) {
          isValid = false;
          errors[field] = 'Lütfen Bu Alanı Doldurun!';
        }
      });
  
      if (!formValues.kvkkConsent) {
        isValid = false;
        errors.kvkkConsent = 'Lütfen KVKK metnini onaylayın.';
      }
  
      setFormErrors(errors);
      return isValid;
    };
  

  if (formSubmitted) {
    return (
      <div className='mt-5 text-center'>
        <img src='https://cpm.com.tr/wp-content/uploads/2021/07/cpm-logo-yazili.png' className='mb-5' alt='CPM Logo'/>
        <h2 className='text-bold color-primary'>
          Destek Talebiniz başarıyla alınmıştır. En kısa sürede dönüş yapılacaktır.
        </h2>
      </div>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box component="form" noValidate onSubmit={handleSubmit} className='form-margin' sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="companyName"
          label="Firma Adı"
          name="companyName"
          value={formValues.companyName}
          onChange={handleChange}
          error={!!formErrors.companyName}
          helperText={formErrors.companyName || ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="fullName"
          label="Adınız Soyadınız"
          name="fullName"
          value={formValues.fullName}
          onChange={handleChange}
          error={!!formErrors.fullName}
          helperText={formErrors.fullName || ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Mail Adresiniz"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email || ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Telefonunuz"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          error={!!formErrors.phone}
          helperText={formErrors.phone || ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="subject"
          label="Konu"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          error={!!formErrors.subject}
          helperText={formErrors.subject || ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="message"
          label="Mesajınız"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          error={!!formErrors.message}
          helperText={formErrors.message || ''}
        />
        <FormControlLabel
          control={
            <Checkbox
              value="kvkkConsent"
              color="primary"
              name="kvkkConsent"
              checked={formValues.kvkkConsent}
              onChange={handleChange}
            />
          }
          label={
            <>
              <a href="kvkk" className='kvkk-link' rel="noopener">
                KVKK Aydınlatma Metni
              </a>
              {' '}
              <Typography component="span">
                'ni okudum, kabul ediyorum.
              </Typography>
            </>
          }
        />
        {formErrors.kvkkConsent && (
          <Typography color="error" variant="body2">
            {formErrors.kvkkConsent}
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Gönder
        </Button>
      </Box>
    </Container>
  );
};

export default SupportForm;
