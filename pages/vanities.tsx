import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import React from 'react';
import Head from 'next/head';

export default function SkyScript(){
    return (
        <main className="bg-slate-900 text-white"><Head>
        <meta name='title' content='Soon' />
        <meta name='description' content="jay is hot frfr" />
      </Head> <Navbar /> <Title title='' desc='' /> <Title title='Coming Soon™' desc=' ' />
        </main> 
    )
}
