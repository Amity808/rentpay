<!-- TITLE -->
<p align="center"> 
  <img width="100px" src="https://github.com/celo-org/celo-composer/blob/main/images/readme/celo_isotype.svg" align="center" alt="Celo" />
 <h2 align="center">RentPay</h2>
 <p align="center">Build, deploy, and iterate quickly on decentralized applications using Celo.</p>
</p>
  <p align="center">
    <a href="https://github.com/celo-org/celo-composer/graphs/stars">
      <img alt="GitHub Contributors" src="https://img.shields.io/github/stars/celo-org/celo-composer?color=FCFF52" />
    </a>
    <a href="https://github.com/celo-org/celo-composer/graphs/contributors">
      <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/celo-org/celo-composer?color=E7E3D4" />
    </a>
    <a href="https://github.com/celo-org/celo-composer/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/celo-org/celo-composer?color=E7E3D4" />
    </a>
    <a href="https://github.com/celo-org/celo-composer/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/celo-org/celo-composer?color=E7E3D4" />
    </a>
    <a href="https://opensource.org/license/mit/">
      <img alt="MIT License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
    </a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

RentPay transforms African rental markets by easing upfront annual rent burdens with secure MiniPay transactions and budget-friendly saving tools. #DigitalRenting #FinancialInclusion
<p align="right">(<a href="#top">back to top</a>)</p>

**Problem Statement:**
Rent payment challenges are a widespread issue globally, with tenants often struggling to manage large upfront payments and secure financial transactions. However, these challenges are particularly acute in Africa, where landlords frequently require up to a year's rent upfront—a significant financial burden that many cannot afford (BBC News, 2022). Moreover, with over 350 million adults in Africa without access to traditional banking services, a substantial portion of the population is effectively excluded from the rental market. This backdrop makes Africa an ideal starting point for RentPay, especially given the high usage of the Opera browser and its integrated MiniPay service, which are well-positioned to deliver digital solutions in this market.

**Objective:**
The objective of RentPay is to revolutionize the rental process by making it more accessible, secure, and user-friendly. Using cutting-edge technology, RentPay aims to facilitate easier, more flexible payment options, enhance the transparency and security of rental transactions, and ultimately improve housing accessibility and affordability across Africa. While the long-term vision is global, the initial focus on Africa leverages existing digital habits to effectively address these specific challenges.

**Methodology:**
- Digital Payments Integration: Utilize MiniPay within the Opera browser to enable secure, straightforward digital rent and utility payments, offering an alternative to traditional banking infrastructures.

- Smart Contracts: Implement blockchain-based smart contracts to automate rental payments and agreement enforcement, ensuring transactions are transparent, secure, and efficient.

- Digital Identities: Develop a system for digital identities that securely validates and stores tenant and landlord information, streamlining the screening and verification processes.
Savings and Budgeting Tools: Introduce locked savings accounts within MiniPay, enabling tenants to incrementally save towards their rent and utilities, fostering better financial management

**Scope of the Solution:**
RentPay is targeted initially at the African rental market, focusing on urban areas with high digital engagement to refine the platform. The solution is designed to be scalable, with potential future expansion into rural areas and other global markets.

**Key Features:**
- Rent and Utility Payment through MiniPay:
Rent and utility payments can be easily made by users using the MiniPay wallet in the Opera Mini browser.
It is no longer necessary to use traditional banking services thanks to this function, which provides a safe and convenient payment option.

- Locked Savings Account for Budgeting:
Tenants might choose to set aside a certain amount of money for utilities and rent only.
Tenants may successfully manage their budget and guarantee on-time rent payments with the support of this locked savings account that allows for incremental increases.

- Budget-Friendly Autosave Option:
MiniPay has an autosave function that lets renters set aside a certain portion of their income for their rental contract account.
This function, which progressively accumulates money for rent payments, encourages saving discipline.

- External Contributions:
A tenant's MiniPay rent and utility fund can be directly funded by friends, family, or other donors.
This feature gives tenants more flexibility and financial help, which improves their capacity to fulfill their responsibilities.

**Conclusion:**
We encourage financial responsibility and transparency by providing tenants with a contemporary and effective platform to manage their utilities and rent. We hope to streamline the rental payment process and enhance tenants' overall financial well-being by utilising cutting-edge technologies and intuitive interfaces.


## Built With

To give tenants a simple, safe, and comprehensive way to handle their rent and utilities, RentPay is designed as a decentralized application (dApp) that makes use of a number of 
different technologies. Among the major technologies employed in this project are:

- [Next.js](https://nextjs.org/): utilised as the front-end foundation for creating the application's user interface. Server-side rendering, routing, and other functionality are provided by Next.js, which improves the application's performance and user experience.
- [Celo](https://celo.org/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.19/): Usedd for writing our smart contract
- [React.js](https://reactjs.org/): Front end library which our Next.js app is going to be built on
- [Tailwind CSS](https://v2.tailwindcss.com/docs): Used in the styling of the UI components. Tailwind CSS is a utility-first approach to CSS that makes it possible to quickly design and modify user interface elements.
- [Hardhat](https://hardhat.org/hardhat-runner/docs/config): Selected as the platform for development where smart contracts are assembled, tested, and implemented. For Ethereum development, Hardhat provides an extensive toolkit with integrated testing and debugging help.
- [Viem](https://viem.sh/): Utilised to control Ethereum interactions within the application and wallet connections. Viem provides tools for managing Ethereum addresses, approving trades, and getting blockchain information.
- [Ethers.js](https://docs.ethers.org/v6/): Utilised to communicate with the Ethereum network. A JavaScript package called ethers.js offers APIs for communicating with smart contracts, sending transactions, and retrieving blockchain data.
- [Rainbowkit-celo](https://github.com/celo-org/rainbowkit-celo): Employed in the creation of UI components. In order to expedite development and guarantee consistency in design, Rainbowkit offers a set of pre-designed components that are readily integrated into the application.
- [TypeChain](https://www.npmjs.com/package/typechain): Generated TypeScript bindings for Ethereum smart contracts using this. In TypeScript projects, TypeChain helps to maintain type safety and offers auto-generated typings for interfacing with smart contracts.
  
These technologies work together smoothly to produce a decentralised application that is reliable and effective and satisfies RentPay users' needs.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Prerequisites

- Node: Make sure your computer has both Node.js and npm (Node Package Manager) installed. The official Node.js website has them available for download and installation.
- Git (v2.38 or higher)
- Install an Ethereum wallet that works with it (like MetaMask), and make sure the account has enough money in it to run smart contracts and use the app.

## How to use Celo Composer

The easiest way to start with Celo Composer is using `@celo/celo-composer`. This CLI tool lets you quickly start building dApps on Celo for multiple frameworks, including React (with either react-celo or rainbowkit-celo), React Native (w/o Expo), Flutter, and Angular. To get started, just run the following command, and follow the steps:

```bash
npx @celo/celo-composer@latest create
```

### Front-end framework

![Celo Composer select framework](https://github.com/celo-org/celo-composer/blob/main/images/readme/cc_step_1.png?raw=true)

### Web3 library (for react-app)

![Celo Composer select framework](https://github.com/celo-org/celo-composer/blob/main/images/readme/cc_step_2.png?raw=true)

### Smart contract framework

![Celo Composer tool selection](https://github.com/celo-org/celo-composer/blob/main/images/readme/cc_step_3.png?raw=true)

### Subgraph

![Celo Composer subgraph support](https://github.com/celo-org/celo-composer/blob/main/images/readme/cc_step_4.png?raw=true)

### Name your dApp

![Celo Composer dApp name](https://github.com/celo-org/celo-composer/blob/main/images/readme/cc_step_5.png?raw=true)

**_🔥Voila, you have a dApp ready to go. Voila, you have a dApp ready to go. Start building your dApp on Celo._**

### Getting started

Once your custom dApp has been created, just install dependencies, either with `yarn` or `npm i`, and run the respective script from the `package.json` file.
## Supported Frameworks

### React

- Support for Website and Progressive Web Application.
- Works with all major crypto wallets.

Check [package readme](https://github.com/celo-org/celo-composer/blob/main/packages/react-app/README.md) to learn more about.

### React Native

- Out of the box config, just focus on buidl.
- Support for Android and IOS.
- Works with and without [Expo](https://expo.dev/).
- Working example app included.

Check [package readme](https://github.com/celo-org/celo-composer/blob/main/packages/react-native-app/README.md) to learn more about.

### Flutter

- One command to get started - Type `flutter run` to start development in your mobile phone.
- Works with all major mobile crypto wallets.
- Support for Android, IOS (Web, Windows, and Linux coming soon).
- Working example app included.

Check [package readme](https://github.com/celo-org/celo-composer/blob/main/packages/flutter-app/README.md) to learn more about.

### Angular

- Support for Website and Progressive Web Application.
- Works with all major crypto wallets.

Check [package readme](https://github.com/celo-org/celo-composer/blob/main/packages/angular-app/README.md) to learn more about.

<!-- USAGE EXAMPLES -->

## 🔭 Learning Solidity

📕 Read the docs: <https://docs.soliditylang.org>

- [Primitive Data Types](https://solidity-by-example.org/primitives/)
- [Mappings](https://solidity-by-example.org/mapping/)
- [Structs](https://solidity-by-example.org/structs/)
- [Modifiers](https://solidity-by-example.org/function-modifier/)
- [Events](https://solidity-by-example.org/events/)
- [Inheritance](https://solidity-by-example.org/inheritance/)
- [Payable](https://solidity-by-example.org/payable/)
- [Fallback](https://solidity-by-example.org/fallback/)

📧 Learn the [Solidity globals and units](https://solidity.readthedocs.io/en/v0.8.19/units-and-global-variables.html)

## Support

Join the Celo Discord server at <https://chat.celo.org>. Reach out on the dedicated repo channel [here](https://discord.com/channels/600834479145353243/941003424298856448).

<!-- ROADMAP -->

## Challenges:

Throughout the development process, several challenges were encountered, including:
- Integration Complexity:
Compatibility and synchronization issues arose when handling different technology integrations and guaranteeing smooth communication between frontend, backend, and blockchain components.

- Smart Contract Deployment:
Gas prices, transaction speeds, Solidity version, configuration, and network dependability had to be carefully taken into account when deploying smart contracts on the Ethereum network and setting up the network.

- Security Considerations:
Safeguarding user cash and confidential information has always been a difficulty, especially when it comes to Decentralised Finance (DeFi) apps. This includes secure coding techniques and smart contract auditing.


## Roadmap

Moving forward, the roadmap for RentPay includes:

Enhanced User Features:
introducing new features and updating the UI to improve usability and functionality (transaction history, notifications, account management, etc.).

Scalability and Performance:
Exploring solutions for optimizing performance and scalability, including layer 2 scaling solutions, gas fee optimizations, and network upgrades.
Security Enhancements:
To reduce security risks and safeguard user assets, new security measures should be put in place, audits should be carried out often, and best practices should be followed.

Community Engagement:
Establishing a vibrant community around RentPay through initiatives for adoption, instruction, and rewards in order to get input for future enhancements.
Through tackling these obstacles and adhering to the plan, RentPay hopes to establish itself as a preeminent decentralized platform for managing rent and utilities, offering users all around the world financial inclusion and empowerment.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

We welcome contributions from the community.

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

- [@CeloDevs](https://twitter.com/CeloDevs)
- [Discord](https://discord.com/invite/celo)

<p align="right">(<a href="#top">back to top</a>)</p>
