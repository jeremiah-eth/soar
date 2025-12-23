# Soar Vote

A decentralized voting application built on the Stacks blockchain, allowing users to participate in protocol governance securely and transparently.

## Features

- **Decentralized Voting**: Votes are recorded directly on the Stacks blockchain.
- **Real-time Results**: Live vote counts fetched from smart contracts.
- **Secure Authentication**: Connect with your Stacks wallet (Leather, Xverse, etc).
- **Social Sharing**: Share your participation on X (Twitter).
- **Dark Mode**: Fully supported dark/light themes.
- **BNS Support**: Displays your Bitcoin Name System (BNS) name if available.
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS and Shadcn UI.

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4, Shadcn UI
- **Blockchain**: Stacks.js (Connect, Network, Transactions)
- **State Management**: React Context (WalletProvider)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/soar.git
   cd soar
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```
   *Note: If you encounter peer dependency issues with React 19, use `npm install --legacy-peer-deps`.*

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Smart Contract

The application interacts with the `voting` contract deployed at `ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM`.

- `vote(bool choice)`: Cast a vote (true = Yes, false = No).
- `get-results()`: specific read-only function to get current tallies.
- `has-voted(principal)`: Check if an address has already voted.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
