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
margin-left:10px;

}
.list{width:50%;}
.Presentation{
  padding: 10px 14px 10px 14px;

  background: rgb(179 23 23 / 73%);
  margin-bottom: 30px;
}
#text{
  background: #c1c1de;
  border-radius: 10px;
  border: 1px blue;
  margin-left: 10px;
  width: 400px;
  height: 17px;
}
#disclaimer{
  background: #5e79ab;
  color: yellow;
}


`}</style>

 
      </Head>
      
      <div className='list'>
  
  <ul>
  
<li className="Presentation"> Hi Im Pierre👨‍💻</li>
<li>Give some information about yourself if you wish. Otherwise leave blank <input placeholder="ex :compagny, link, name, what's on your mind etc" id="text" type="text" /> <br /><span id = 'disclaimer'>⚠️ it will be stored in the blockchain</span>  </li>
  <li>Get My cv in your wallet : /!\ the moralis servor is asleep, it isn't going to work

      <a className="sbouton bouton " id="submit"  onClick={login}>Connect MetaMask </a>

      <a  className="sbouton bouton" id="upload" onClick={upload}>Mint my resume </a>
  </li>
  <a className="bouton"  href=" https://testnets.opensea.io/account" >    <li>Go check out your NFT on opensea</li></a>

      <a className="bouton"  href="https://www.linkedin.com/in/pierre-gueveneux-68ab78197/" > <li>LinkedIn</li></a>


  <a className="bouton"  href="https://github.com/Pierregvx" >    <li>My Github</li></a>
<a href="https://github.com/Pierregvx/link-cv"><li>Github repo of this site</li></a>

  </ul>

</div>


  <Script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></Script>

  <Script src="https://unpkg.com/moralis/dist/moralis.js"></Script></div>

  );
}

export default Home;
