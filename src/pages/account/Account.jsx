import React from "react";
import "./account.scss";
import AccountInfo from "./components/account-Info/AccountInfo";
import History from "./components/history/History";
export default function Account() {
  return (
    <div className="account">
      <div className="account-content">
       <AccountInfo/>
        
       <History/>
      </div>
    </div>
  );
}
