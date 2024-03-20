import Head from 'next/head';
import Image from 'next/image';

import AccountDeletionForm from '@/components/AccountDeletionForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>{'<App Name>'} Account Support</title>
        <meta
          name='description'
          content={`
          Account deletion request process for the <App Name> app.`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-row gap-4 items-center justify-center h-screen'>
        <div className='flex flex-col gap-4 items-center'>
          <Image
            alt='Company logo'
            height={80}
            width={300}
            src='https://placehold.co/300x80.png'
          />
          <AccountDeletionForm />
        </div>
        <div className='flex flex-col gap-4'>
          <Image
            alt='Company logo'
            height={500}
            width={256}
            src='https://placehold.co/256x500.png'
          />
          <p className='w-64 text-sm text-gray-500 dark:text-gray-400 text-center'>
            Alternatively, you can delete your account directly inside the app
            via Settings {'->'} "Delete My Account"
          </p>
        </div>
      </div>
    </>
  );
}
