## MintableLite
MintableLite is a marketplace where users can mint, list and sell their NFTs. Every NFT has
name, description, image / animation attributes. Users must sign in to mint, sell or buy an
item. The app have two pages, a landing page for listing already minted NFTs fetched
from an endpoint and a details page for viewing full details of an item which comes from
another API endpoint.


This project is mainly created by using [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [Tailwindcss](https://tailwindcss.com/docs/installation) for frontend development and [AWS-Amplify] (https://docs.amplify.aws/cli/), [Node.js] , [Express] for backend and API development


## System Requirements
For run this application, system needs to support following versions
"next": "12.3.1",
"react": "18.2.0",


## Deployment & Hosting
This Application has been deployed and hosted in domain :  https://mintablelite.rahu.me/ 


## Getting Started

First, run the development server :

```bash
npm run dev
# or
yarn dev
```

## Create Account and Login

To Mint an item, you need to sign up and sign into this application.
    - Authentication has been implemented using Amplify Auth
    (https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/)

![alt text](https://github.com/rahunanthanan/mintable-lite/blob/main/screenshots/Create%20Account.png)

![alt text](https://github.com/rahunanthanan/mintable-lite/blob/main/screenshots/Sign%20in.png)



## Storage

Used NOSQL Database - DynamoDB  for storage


## Endpoints 
The app have three endpoints to list all minted items, mint an item and
get details of an item.

To create endpoints, AWS serverless express was used with API gateway

List API : GET
    https://uc0zhs235j.execute-api.ap-southeast-1.amazonaws.com/dev/nfts

Mint API : POST
    https://uc0zhs235j.execute-api.ap-southeast-1.amazonaws.com/dev/nfts

   Parameters :  pk, sk, nft_id, name, description, image, animation, user : {name, id}

Details API - GET
    https://uc0zhs235j.execute-api.ap-southeast-1.amazonaws.com/dev/nfts/{nft_id}
    Request Parameters : id

Postman collection is included in codebase, Refer Mintable Lite.postman_collection.json


## TO DO
Frontend - Mint Page needs to be implemented
Backend - Endpoints needs to protected



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


