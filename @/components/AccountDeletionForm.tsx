import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AccountDeletionForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        subject: 'Account Deletion Request',
        text: `${email} wants to delete their account.`,
      }),
    });

    if (response.ok) {
      // handle success
    } else {
      // handle error
    }
    setEmail('');
  };
  return (
    <div className='grid items-center gap-4 px-4 py-6 mx-auto max-w-sm rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900'>
      <p className='text-sm text-gray-500 dark:text-gray-400'>
        We need your email address to verify your identity when submitting a
        request to delete your {'<App Name>'} account. We will reach out to you
        at this email address to confirm your request. When your account is
        deleted, all information associated with your account will be deleted
        including the following:
        <br />
        <br />
        1. Your email address
        <br />
        2. Your name, if you added one
        <br />
        3. Your profile picture, if you added one
      </p>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div className='space-y-2'>
          <Label className='text-sm' htmlFor='email'>
            Email Address
          </Label>
          <Input
            id='email'
            placeholder='Email'
            required
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button className='w-full' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}
