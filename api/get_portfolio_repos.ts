import { NowRequest, NowResponse } from '@vercel/node';
import { SplitbeeAnalytics } from '@splitbee/node';
import fetch from 'node-fetch';

const analytics = new SplitbeeAnalytics(process.env.SPLITBEE_PROJECT_ID as string);

export default async function (_req: NowRequest, res: NowResponse) {
	// Get all repositories
	const response = await fetch('https://api.github.com/users/nurodev/repos');
	const repos: Response = (await response.json()).filter((repo: any) => !'NuroDev/NuroDev'.includes(repo.full_name));

	analytics.track({
		userId: 'myunique@user.id',
		event: 'api/get_portfolio_repos',
		data: {
			response: JSON.stringify(repos),
		},
	});

	res.send(repos);
}
