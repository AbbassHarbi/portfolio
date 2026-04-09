import { useState } from 'react';
import { Section } from '../Section';
import { Button } from '../Button';
import './Sections.css';

export const Contact = ({ data }) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  if (!data) return null;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    const details = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "0db2800e-7f2b-4183-9951-2e8bf627fb5b",
          subject: "New Contact Form Submission from your Portfolio",
          from_name: details.name,
          ...details
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Error connecting to the local server.');
    }

    import('../../utils/analytics').then(({ trackInteraction }) => {
      trackInteraction('contact_form', 'submit');
    });
  };

  return (
    <Section id="contact" className="animate-on-scroll">
      <div className="section-header" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ display: 'inline-block' }}>Get In Touch</h2>
      </div>

      <div className="contact-wrapper">
        <p style={{ marginBottom: '32px' }}>
          Currently open for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        {data.contact_form?.enabled && status !== 'success' && (
          <form 
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px', animation: 'fadeIn 0.5s ease-in-out' }} 
            onSubmit={handleFormSubmit}
          >
            <input type="text" name="name" placeholder="Name" required style={inputStyle} disabled={status === 'submitting'} />
            <input type="email" name="email" placeholder="Email" required style={inputStyle} disabled={status === 'submitting'} />
            <textarea name="message" placeholder="Message" rows={4} required style={inputStyle} disabled={status === 'submitting'} />
            
            {status === 'error' && (
              <div style={{ color: '#ef4444', fontSize: '14px', background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '6px' }}>
                {errorMessage}
              </div>
            )}

            <Button type="submit" variant="primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}

        {status === 'success' && (
          <div style={{ 
            padding: '24px', 
            borderRadius: '8px', 
            backgroundColor: 'rgba(34, 197, 94, 0.1)', 
            border: '1px solid rgba(34, 197, 94, 0.3)',
            marginBottom: '32px',
            color: '#4ade80',
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            <h3 style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Message Sent
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              Thank you for reaching out! Your message has been successfully received, and I will get back to you as soon as possible.
            </p>
            <button 
              onClick={() => setStatus('idle')} 
              style={{ marginTop: '20px', background: 'transparent', border: 'none', color: 'var(--color-accent)', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
            >
              Send another message
            </button>
          </div>
        )}

        {data.email && (
          <Button as="a" href={`mailto:${data.email}`} variant={data.contact_form?.enabled ? 'secondary' : 'primary'}>
            Say Hello
          </Button>
        )}

        {data.links && (
          <div className="contact-links">
            {data.links.github && (
              <a href={data.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {data.links.linkedin && (
              <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            )}
            {data.links.x && (
              <a href={data.links.x} target="_blank" rel="noopener noreferrer">X / Twitter</a>
            )}
            {data.links.whatsapp && (
              <a href={data.links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            )}
          </div>
        )}
      </div>
    </Section>
  );
};

const inputStyle = {
  padding: '12px 16px',
  borderRadius: '6px',
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg-secondary)',
  color: 'var(--color-text-primary)',
  fontFamily: 'var(--font-primary)',
  fontSize: 'var(--text-body)',
  transition: 'border-color var(--transition-fast)'
};
