import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import {login,upload} from "../static/js/logic";
import Script from 'next/script'
function Home() {
 

  return (
    <div>
      <Head>
      <title>Pierre Guéveneux</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`





.bouton{

color :wheat;
margin-right: 10px;

cursor: pointer;

}

.sbouton{

padding: 5px 7px 5px 7px;

background: rgba(15, 21, 58, 0.733);

}
.list{width:50%;}
.list h1{
  text-align:center;
  color:white;
}


`}</style>

 
      </Head>

      <div className='list'>
      <h1 >Hi, I'm Pierre</h1>
      <br></br>
  <ul>

  <li>Get My cv in your wallet : 

      <a className="sbouton bouton " id="submit"  onClick={login}>Connect MetaMask </a>

      <a  className="sbouton bouton" id="upload" onClick={upload}>Mint my resume </a>
  </li>
  <a className="bouton"  href=" https://testnets.opensea.io/account" >    <li>Check your nft on Opensea</li></a>

      <a className="bouton"  href="https://www.linkedin.com/in/pierre-gueveneux-68ab78197/" > <li>LinkedIn</li></a>


  <a className="bouton"  href="https://github.com/Pierregvx" >    <li>Github</li></a>


  </ul>

</div>


  <Script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></Script>

  <Script src="https://unpkg.com/moralis/dist/moralis.js"></Script></div>

  );
}

export default Home;
