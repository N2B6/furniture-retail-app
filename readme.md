# Evok Furniture E-Commerce Platform

![Evok Logo](https://seeklogo.com/images/E/evok-logo-430837FE11-seeklogo.com.png)

A full-stack furniture e-commerce solution with blockchain integration for secure transactions and environmental donations.

## 🌟 Features

### Core Functionality
- 🛒 Dynamic shopping cart with quantity controls
- 💳 Cryptocurrency payments via MetaMask
- 🌍 Environmental donation system
- 📦 Admin dashboard for fund management
- 📰 Blog system with article management
- 📄 Automated PDF receipt generation
- 🛡️ Error handling (404 & 500 pages)

### Blockchain Integration
- 🔐 MetaMask authentication
- 💸 Ethereum payments (Sepolia testnet)
- 📜 Smart contract interactions
- 🔄 Real-time ETH/EUR conversion rates

## 🛠️ Technologies

**Frontend:**
- Bootstrap 5
- HTML5/CSS3
- JavaScript
- Web3.js

**Backend:**
- Node.js
- Express
- Ethereum Smart Contracts

**Services:**
- MetaMask Wallet
- CoinGecko API
- HTML2PDF.js

## 🚀 Installation

### Deployed Link
[![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://furniture-retail-app.onrender.com/)
🔗 Live Demo: https://furniture-retail-app.onrender.com/

1. **Clone repository**
bash
git clone https://github.com/N2B6/furniture-retail-app.git
cd evok-furniture

2. **Install dependencies**

```bash
npm install express
```

3. **Start server**
```bash
node server.js
```

4. **Access application**
```
http://localhost:8080
```

## ⚙️ Configuration

### Environment Setup
1. Install [MetaMask](https://metamask.io/)
2. Connect to **Sepolia Test Network**
3. Get test ETH from [Sepolia Faucet](https://sepolia-faucet.pk910.de/)

### Smart Contracts
| Contract Type | Address |
|---------------|---------|
| Payment       | `0xc91ae67f18ea3f876c39e1f95332a68637e932e4` |
| Donation      | `0x5693aB88be9d401A1C3Bf29B55165C75fC69c46D` |

## 🔧 Smart Contract Development

### Contract Overview
The payment system uses an Ethereum smart contract written in Solidity:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PaymentContract is Ownable {
    event Deposit(address indexed sender, uint amount);

    constructor() Ownable(msg.sender) {}

    function deposit() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(address payable recipient, uint amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        recipient.transfer(amount);
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}
```

### Key Features
- 💰 Secure payment processing with event logging
- 🔐 Owner-only withdrawal functionality
- 📊 Balance tracking
- 🛡️ Built using OpenZeppelin's Ownable contract

### Development Steps
1. **Development Environment**
   - Web-based Remix IDE (https://remix.ethereum.org/)
   - Accessed via Firefox browser (no local installation required)
   - Created contract with 4 core functions:
     - `deposit()`: Handle incoming payments
     - `withdraw()`: Owner fund withdrawal
     - `getBalance()`: Contract balance check
     - `getAddress()`: Returns contract address (inherited from Ownable)
     - Constructor: Initialize contract ownership
     - Tested on both JavaScript VM (local) and Sepolia testnet

2. **Contract Interaction**
   - Connected MetaMask wallet through Remix interface
   - Verified function execution through Remix's console
   - Used Remix's built-in debugger for transaction analysis

2. **Dependencies**
```bash
npm install @openzeppelin/contracts
```

3. **Deployment**
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

4. **Verification**
```bash
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
```

### Contract ABI
```json
[
    {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [{"internalType": "uint256","name": "","type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAddress",
        "outputs": [{"internalType": "address","name": "","type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }
]
```

🔗 [View on Etherscan](https://sepolia.etherscan.io/address/0xc91ae67f18ea3f876c39e1f95332a68637e932e4)

## 🛍️ Using the Platform

### Making a Purchase
1. Browse products
2. Add items to cart
3. Proceed to checkout
4. Connect MetaMask
5. Confirm payment

### Donating to Environment
1. Navigate to Donation page
2. Enter amount (Minimum €10)
3. Confirm via MetaMask

## 👨💻 Admin Access

**Authorized Account:**
```
0x389EfAd6DBc6351435e64c32e02600c80670245f
```

**Dashboard Features:**
- View contract balance
- Withdraw funds
- Transaction monitoring

Access via: `/admin`

## 📂 Project Structure

```
evok-furniture/
├── templates/          # HTML pages
├── Images/             # Static assets
├── server.js           # Backend server
└── readme.md           # This documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch:
```bash
git checkout -b feature/your-feature
```
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📄 License

MIT License

## 🙏 Acknowledgments

- Bootstrap Team for UI components
- MetaMask for wallet integration
- CoinGecko for crypto data
- Ethereum Foundation for smart contracts
