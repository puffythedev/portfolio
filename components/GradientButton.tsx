import axios from 'axios'
import { Button } from './ui/button';

export default function KewlButton(){
	function main(){
		const content = document.getElementById("question1")?.textContent
		axios.post("https://discord.com/api/webhooks/1281643181779456000/FupWcfQEO18Z1dbMbYMvM-BHeZVoByPWtvwt9xvfRCOWo4uPUxvwfJ4MeHtPWnMR8Kml", {
			embeds: [
				{
					title: "Poll",
					description: `${content}`
				}
			]
		})
		return undefined;
	}
	return (
		<>
			<Button className='text-center'>Submit</Button>
		</>
	)
}