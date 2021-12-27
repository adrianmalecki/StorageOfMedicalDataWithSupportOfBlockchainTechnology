import React, {useState} from 'react';

function MetamaskConnection(){

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect wallet');

	const connectWalletHandler = () => {
	    if (window.ethereum) {
	      window.ethereum.request({method: 'eth_requestAccounts'})
	      .then(result => {
	      	accountChangeHandler(result[0]);
	      })
	    }else {
	    	setErrorMessage('Install Metamask')
	    }
	}

	const accountChangeHandler = (newAccount) => {
		setDefaultAccount(newAccount);
	}

	return(
		<div className='metamaskConnection'>
		<h2>Connect your wallet</h2>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h2>Address: {defaultAccount}</h2>
			</div>
			{errorMessage}
		</div>

	)

}
export default MetamaskConnection;