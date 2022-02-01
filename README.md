this site is accessible at https://link-cv.vercel.app/
This project is devellopped with Next.js, It allows you to mint a NFT containing a jpeg and a link to my resume.
To launch it on the localhost, run 
```bash
yarn dev
```

I used Moralis, It allowed me to generate an IPFS link pretty easily.
The smart contract is pretty basic, I imported ERC721URIStorage (witch import ERC21 itself) in order to access the seturi function.
The ipfs link is hardcoded in the contract. 
I added a variable: information that allows me to collect some information about the person who just minted my resume. 

