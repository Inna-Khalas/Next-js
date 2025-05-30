'use client';

import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <p>not found company</p>
      <Link href="/companies">back to companies</Link>
    </div>
  );
};

export default NotFound;
