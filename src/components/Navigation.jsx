import React from 'react'
import LanguageSelector from './LanguageSelector';

export default function Navigation() {
  return (
    <nav class='container mx-10'>
      <div class='flex container justify-end my-5'>
        <LanguageSelector/>
      </div>
    </nav>
  );
}
