// components/Account.js

const Account = ({ account }) => (
    <div>
      <h2>{account.name}</h2>
      <p>ID: {account.id}</p>
    </div>
);

export default Account;