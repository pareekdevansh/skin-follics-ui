import React from 'react';
import { Box, Typography, Card, CardContent, Divider, Link } from '@mui/material';
import { APP_NAME } from '../../constants/app-info';
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER } from '../../constants/contact-info';
import { FULL_ADDRESS } from '../../constants/address';

const TermsOfUse = () => {
  return (
    <Box
      sx={{
        px: '5%',
        py: '2rem',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: '1000px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <CardContent
          sx={{
            padding: '2rem',
          }}
        >
          {/* Title Section */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: '16px',
            }}
          >
            Terms of Use
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ textAlign: 'center', mb: '24px' }}
          >
            Last Updated: Dec 17, 2024
          </Typography>

          <Divider sx={{ mb: '24px' }} />

          {/* Content Sections */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '8px' }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" sx={{ mb: '16px', lineHeight: 1.8 }}>
            Welcome to <strong>{APP_NAME} Clinic</strong>. By accessing our website, located at{' '}
            <Link href="https://skinfollics.com" underline="hover" color="primary">
              skinfollics.com
            </Link>
            , you agree to comply with and be bound by these Terms of Use. If you disagree with any
            part of these terms, please refrain from using the site.
          </Typography>

          <Divider sx={{ my: '16px' }} />

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '8px' }}>
            2. Services Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: '16px', lineHeight: 1.8 }}>
            {APP_NAME} Clinic provides information on skincare treatments, hair transplant services,
            and cosmetic solutions. While we strive to offer accurate and up-to-date information,
            the content provided is for general informational purposes only and should not replace
            professional medical advice.
          </Typography>

          <Divider sx={{ my: '16px' }} />

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '8px' }}>
            3. User Responsibilities
          </Typography>
          <Typography variant="body1" sx={{ mb: '8px', lineHeight: 1.8 }}>
            As a user of our website, you agree not to:
          </Typography>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li>Use the site for illegal or unauthorized purposes.</li>
            <li>Copy, modify, or distribute content without permission.</li>
            <li>Submit false information or impersonate someone else.</li>
          </ul>

          <Divider sx={{ my: '16px' }} />

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '8px' }}>
            4. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" sx={{ mb: '16px', lineHeight: 1.8 }}>
            All content, including text, graphics, logos, and images, is the property of {APP_NAME}{' '}
            Clinic and is protected by copyright laws. Unauthorized use of this material is strictly
            prohibited.
          </Typography>

          <Divider sx={{ my: '16px' }} />

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '8px' }}>
            5. Privacy Policy
          </Typography>
          <Typography variant="body1" sx={{ mb: '16px', lineHeight: 1.8 }}>
            Your use of the site is also governed by our{' '}
            <Link href="/privacy-policy" underline="hover" color="primary">
              Privacy Policy
            </Link>
            . Please review it to understand how we collect, use, and safeguard your personal data.
          </Typography>

          <Divider sx={{ my: '16px' }} />

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '8px' }}>
            6. Changes to Terms
          </Typography>
          <Typography variant="body1" sx={{ mb: '16px', lineHeight: 1.8 }}>
            We reserve the right to update these Terms of Use at any time. Changes will be effective
            upon posting. We encourage users to review this page periodically.
          </Typography>

          <Divider sx={{ my: '16px' }} />

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '8px' }}>
            7. Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: '16px', lineHeight: 1.8 }}>
            If you have any questions regarding these Terms of Use, please contact us at:
          </Typography>
          <Box sx={{ mb: '16px' }}>
            <Typography>
              <strong>{APP_NAME} Clinic</strong>
            </Typography>
            <Typography>{FULL_ADDRESS}</Typography>
            <Typography>
              Email:{' '}
              <Link href={`mailto:${CONTACT_EMAIL}`} underline="hover" color="primary">
                {CONTACT_EMAIL}
              </Link>
            </Typography>
            <Typography>
              Phone:{' '}
              <Link href={`tel:+91-${CONTACT_PHONE_NUMBER}`} underline="hover" color="primary">
                +91-{CONTACT_PHONE_NUMBER}
              </Link>
            </Typography>
          </Box>

          <Divider sx={{ my: '16px' }} />

          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: '24px' }}>
            © {new Date().getFullYear()} {APP_NAME} Clinic. All rights reserved.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TermsOfUse;
