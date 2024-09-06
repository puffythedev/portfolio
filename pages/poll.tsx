import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@radix-ui/react-progress";
import toast, { Toaster } from "react-hot-toast";
import { ClassValue } from 'clsx';
import Navbar from "@/components/Navbar";
import Title from '@/components/Title'
import axios from "axios";
import Head from "next/head";

type PollOption = {
  id: string;
  option: string;
  votes: string[];
};

const Poll = () => {
  const [options, setOptions] = useState<PollOption[]>([
    { id: "sky", option: "Sky", votes: [] },
    { id: "sab", option: "Sabrina", votes: [] },
    { id: "jul", option: "Julian", votes: [] },
  ]);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  const handleVote = (id: string) => {
    if (!username.trim()) {
      toast.error("Please enter a username before voting!");
      return;
    }
	const users = new Set()
	options.map(o => o.votes.map(v => users.add(v)))
	if(users.has(username)){
		toast.error("You already voted!")
		return;
	}

    const updatedOptions = options.map((opt) =>{
		if(opt.id.includes(id)){
			opt.votes.push(username)
			return { ...opt, votes: opt.votes }}
		else 
			return opt;
    });
	
    setOptions(updatedOptions);
    setTotalVotes(totalVotes + 1);
	const opts = options.map(o => `${o.option} - ${o.votes[0] || "none"}`)
	axios.post("https://discord.com/api/webhooks/1281643181779456000/FupWcfQEO18Z1dbMbYMvM-BHeZVoByPWtvwt9xvfRCOWo4uPUxvwfJ4MeHtPWnMR8Kml", {
		embeds: [{
			title: "Poll update!",
			description: `${opts.join("\n")}`
		}]
	})
    toast.success(`${username}, your vote has been cast!`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
	  <Head>
		<meta name="title" content="Testing"></meta>
		<meta name="description" content="First poll created to test my build system fr"></meta>
	  </Head>
	  <Title title="" desc="" />
	  <Navbar />
	  <Title title="Username" desc="What's your username?" />
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-gray-300 rounded w-80 h-10 text-center text-black"
      />
	  <Title title="Options" desc="Choose one!" />
      <div className="poll-options w-full max-w-md">
        {options.map((option) => (
          <div key={option.id} className="option-item text-center mb-6">
            <p className="text-lg text-white mb-2">{option.option}</p>
            <Progress
              value={(option.votes.length / totalVotes) * 100 || 0}
              className="w-full mb-2"
            />
            <Button className="w-40 h-10" onClick={() => handleVote(option.id)}>
              Vote
            </Button>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
};

const PollSystem = () => <Poll />;

export default PollSystem;
