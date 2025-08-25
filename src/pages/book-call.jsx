import React from 'react';
import Layout from '@theme/Layout';
import styles from './Contact.module.css';


export default function CalendlyInline() {
  return (
    <div style={{ minWidth: '320px', height: '700px' }}>
      <iframe
        src="https://calendly.com/ankakulczycka/30min?text_color=0b1728&primary_color=abe5d0"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  );
}