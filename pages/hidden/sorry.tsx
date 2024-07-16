import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import Head from 'next/head';
import React from 'react';

export default function Sorry(){
	const message: string = `Hey Hargun,

I know it might not be the best news (or maybe it is the best news for you), but I have come to a decision. Lately, your mental health has not been well, and I wanted to help you feel better, but I do not think I could do any good. So I'm going to do the thing that I've been thinking about since you told me to: ending this relationship. It is really painful for me to say this since I like you too much to leave, but it's for your own good and it will help you get better.

I'm sorry for everything I caused. I'm sorry if I ever made you mad or sad. I'm sorry if I ever failed to keep you entertained. I'm sorry if I was a reason your mental health decreased.

I loved you, and I'll still love you. FYI nobody is better than you in my world, so even if you might not be physically with me, but you will always stay in my heart. Hope things get better soon. I'll always love you. `
    return (
        <>
			<Head>
				<meta name="description" content="This is important info for you, Hargun." />
				<meta name="title" content='Important'></meta>
			</Head>

            <Title title="I'm sorry hargun, but this has to be done." desc={message}/>
        </>
    )
}