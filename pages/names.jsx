import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import React from 'react';
import Head from 'next/head';

export default function SkyScript(){
    return (
        <><Head>
        <meta name='title' content='SkyOPG.pro - Hall of names' />
        <meta name='description' content="just a cool idea idk" />
      </Head> <Navbar /> <Title title='' desc='' /> <Title title='Hall of names' desc='dm "skyopg." in discord to get a part here' />
            <Title title='jaydennxo' desc={'cute person'} />
            <Title title='seppukujunkie' desc={'hot sexy man'} />
            <Title title='lilliancx' desc={'coolest person ever 💯'} />
            <Title title='skyopg.' desc={'i work in the fields'} />
        </> 
    )
}
