import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import React from 'react';
import Head from 'next/head';

export default function SkyScript(){
    const names = [
        {
            name: "aqhe",
            description: "d4ddy, my boss, codespiral, matching, best friends, netherlands"
        },
        {
            name: "jaydennxo",
            description: "cute person"
        },
        {
            name: "marithesaint",
            description: "she's NOT a saint"
        },
        {
            name: "seppukujunkie",
            description: "hot sexy man"
        },
        {
            name: "lilliancx",
            description: "coolest person ever 💯"
        },
        {
            name: "koda",
            description: "fat ass and big titty with alot of attatude plzzzzzzzzzzz"
        },
        {
            name: "z3n.xyz",
            description: "“Basically high”"
        },
        {
            name: "skyopg",
            description: "i work in the fields"
        },
        {
            name: "cl2sh",
            description: "i dont know"
        }
    ]
    return (
        <div className="bg-slate-900 text-white"><Head>
        <meta name='title' content='SkyOPG.pro - Hall of names' />
        <meta name='description' content="just a cool idea idk" />
      </Head> <Navbar /> <Title title='' desc='' /> <Title title='Hall of names' desc='dm "skyopg.pro" in discord to get a part here' />
            {names.map(n => (<>
            <Title title={n.name} desc={n.description} />
                </>
            ))}
        </div> 
    )
}
