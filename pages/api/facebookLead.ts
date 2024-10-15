import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    console.log(
      'WEBHOOK GET request',
      `hub.verify_token: ${req.query['hub.verify_token']}`
    );
    res.status(200).send('GET request');
  } else if (req.method === 'POST') {
    const body = JSON.stringify(req.body);
    console.log('WEBHOOK POST request', `body: ${body}`);
    res.status(200).send('POST request');
  } else if (req.method === 'OPTIONS') {
    console.log('WEBHOOK OPTIONS request');
    res.status(204).end();
  } else {
    console.log('WEBHOOK BAD request');
    res.status(400).end();
  }
}
