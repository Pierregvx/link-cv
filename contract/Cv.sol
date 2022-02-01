pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@OpenZeppelin/contracts/utils/Counters.sol";

contract Cv is ERC721URIStorage {
    mapping(uint=>string) public InfoOwner;
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIds;
    constructor() ERC721("Cv", "myCv") 
    {
        
    }
    function mintToken (string memory _info)
        public
        returns (uint256)
    {
        
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        //I hardcoded the uri
        _setTokenURI(newItemId, "https://ipfs.moralis.io:2053/ipfs/QmVXsWWWd5ZRgz6tMsZmnFFbaPBkHnscEfTpQR2LxtV4Z1");
       
        return newItemId;
    }
    function _Addinfo(uint256 _newItemId, string memory _info) internal{
        InfoOwner[_newItemId] = _info;
    }
    
    

}
