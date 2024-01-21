let UserCred = JSON.parse(sessionStorage.getItem("user-cred"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
let emailInfo = document.getElementById("email");
let userName = document.getElementById("username");
let userID = document.getElementById("userID");
// emailInfo.innerText = `E-Mail: ${UserCred.email}`;
// userName.innerText = `Username: ${UserInfo.Username}`;
// userID.innerText = `${UserInfo.id}`;
document.getElementById("welcome").innerText = `Welcome, ${UserInfo.Username}`;
userID.innerText = `${UserInfo.id}`;
console.log(UserInfo.Username);

//Importing Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  query,
  where,
  collection,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBGNGf79JeJJxQS2mix9sGYKlheDjTAxKs",
  authDomain: "cryptowallet-36e02.firebaseapp.com",
  projectId: "cryptowallet-36e02",
  storageBucket: "cryptowallet-36e02.appspot.com",
  messagingSenderId: "805242960903",
  appId: "1:805242960903:web:ca493c781836a38f04fea2",
  measurementId: "G-D488ZYMJMK"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "UserAuthList");

//Code to deposit cryptocurrency

const updateData = document.querySelector("#depositForm");
updateData.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "UserAuthList", UserInfo.id);
  let q = document.getElementById("quantity").value;
  let cryptocurrency = document.getElementById("crypto").value;

  getDoc(docRef).then((doc) => {
    if (cryptocurrency == "BTC") {
      updateDoc(docRef, {
        BTC: Number(q) + doc.data().BTC,
      }).then(() => {
        document.getElementById("quantity").value = null;
        alert("Successfully Deposited ✅");
      });
    } else if (cryptocurrency == "SOL") {
      updateDoc(docRef, {
        SOL: Number(q) + doc.data().SOL,
      }).then(() => {
        document.getElementById("quantity").value = null;
        alert("Successfully Deposited ✅");
      });
    } else if (cryptocurrency == "ETH") {
      updateDoc(docRef, {
        ETH: Number(q) + doc.data().ETH,
      }).then(() => {
        document.getElementById("quantity").value = null;
        alert("Successfully Deposited ✅");
      });
    } else if (cryptocurrency == "BNB") {
      updateDoc(docRef, {
        BNB: Number(q) + doc.data().BNB,
      }).then(() => {
        document.getElementById("quantity").value = null;
        alert("Successfully Deposited ✅");
      });
    } else if (cryptocurrency == "XRP") {
      updateDoc(docRef, {
        XRP: Number(q) + doc.data().XRP,
      }).then(() => {
        document.getElementById("quantity").value = null;
        alert("Successfully Deposited ✅");
      });
    } else if (cryptocurrency == "ADA") {
      updateDoc(docRef, {
        ADA: Number(q) + doc.data().ADA,
      }).then(() => {
        document.getElementById("quantity").value = null;
        alert("Successfully Deposited ✅");
      });
    }
  });
});

//Code to deposit cryptocurrency ends

//Code to transfer cryptocurrency
const transferUpdate = document.querySelector("#transferForm");
transferUpdate.addEventListener("submit", (e) => {
  e.preventDefault();

  let userBTC = 0;
  let userSOL = 0;
  let userETH = 0;
  let userXRP = 0;
  let userBNB = 0;
  let userADA = 0;
  let userTransactionHistory;
  let receiverID = document.getElementById("receiverID").value;
  let userDocRef = doc(db, "UserAuthList", UserInfo.id);
  let receiverDocRef = doc(db, "UserAuthList", receiverID);
  getDoc(userDocRef).then((doc) => {
    userBTC = doc.data().BTC;
    userBNB = doc.data().BNB;
    userETH = doc.data().ETH;
    userSOL = doc.data().SOL;
    userXRP = doc.data().XRP;
    userADA = doc.data().ADA;
    userTransactionHistory = doc.data().Transaction;

    let transferQuantity = Number(
      document.getElementById("transferQuantity").value
    );
    let transferCrypto = document.getElementById("transferCrypto").value;
    let time = new Date();
    let exactMonth = time.getMonth() + 1;
    let transferDate =
      time.getDate() + "-" + exactMonth + "-" + time.getFullYear();
    if (transferCrypto == "BTC") {
      if (transferQuantity <= userBTC) {
        let transferDataString =
          transferDate +
          " " +
          "BTC" +
          " " +
          String(transferQuantity) +
          " " +
          "Sent" +
          " " +
          receiverID;
        userTransactionHistory.push(transferDataString);

        alert("Transaction Successful✅");
        document.getElementById("transferQuantity").value = null;
        document.getElementById("receiverID").value = null;
        updateDoc(userDocRef, {
          BTC: userBTC - transferQuantity,
          Transaction: userTransactionHistory,
        });

        getDoc(receiverDocRef).then((doc) => {
          let receiverDataString =
            transferDate +
            " " +
            "BTC" +
            " " +
            String(transferQuantity) +
            " " +
            "Received" +
            " " +
            UserInfo.id;
          let receiverTransactionHistory = doc.data().Transaction;
          receiverTransactionHistory.push(receiverDataString);
          updateDoc(receiverDocRef, {
            BTC: doc.data().BTC + transferQuantity,
            Transaction: receiverTransactionHistory,
          });
        });
      } else {
        alert("Insufficient Balance");
      }
    } else if (transferCrypto == "ETH") {
      if (transferQuantity <= userETH) {
        let transferDataString =
          transferDate +
          " " +
          "ETH" +
          " " +
          String(transferQuantity) +
          " " +
          "Sent" +
          " " +
          receiverID;
        userTransactionHistory.push(transferDataString);

        alert("Transaction Successful✅");
        document.getElementById("transferQuantity").value = null;
        document.getElementById("receiverID").value = null;
        updateDoc(userDocRef, {
          ETH: userETH - transferQuantity,
          Transaction: userTransactionHistory,
        });

        getDoc(receiverDocRef).then((doc) => {
          let receiverDataString =
            transferDate +
            " " +
            "ETH" +
            " " +
            String(transferQuantity) +
            " " +
            "Received" +
            " " +
            UserInfo.id;
          let receiverTransactionHistory = doc.data().Transaction;
          receiverTransactionHistory.push(receiverDataString);

          updateDoc(receiverDocRef, {
            ETH: doc.data().ETH + transferQuantity,
            Transaction: receiverTransactionHistory,
          });
        });
      } else {
        alert("Insufficient Balance");
      }
    } else if (transferCrypto == "SOL") {
      if (transferQuantity <= userSOL) {
        let transferDataString =
          transferDate +
          " " +
          "SOL" +
          " " +
          String(transferQuantity) +
          " " +
          "Sent" +
          " " +
          receiverID;
        userTransactionHistory.push(transferDataString);

        alert("Transaction Successful✅");
        document.getElementById("transferQuantity").value = null;
        document.getElementById("receiverID").value = null;
        updateDoc(userDocRef, {
          SOL: userSOL - transferQuantity,
          Transaction: userTransactionHistory,
        });

        getDoc(receiverDocRef).then((doc) => {
          let receiverDataString =
            transferDate +
            " " +
            "SOL" +
            " " +
            String(transferQuantity) +
            " " +
            "Received" +
            " " +
            UserInfo.id;
          let receiverTransactionHistory = doc.data().Transaction;
          receiverTransactionHistory.push(receiverDataString);

          updateDoc(receiverDocRef, {
            SOL: doc.data().SOL + transferQuantity,
            Transaction: receiverTransactionHistory,
          });
        });
      } else {
        alert("Insufficient Balance");
      }
    } else if (transferCrypto == "XRP") {
      if (transferQuantity <= userXRP) {
        let transferDataString =
          transferDate +
          " " +
          "XRP" +
          " " +
          String(transferQuantity) +
          " " +
          "Sent" +
          " " +
          receiverID;
        userTransactionHistory.push(transferDataString);

        alert("Transaction Successful✅");
        document.getElementById("transferQuantity").value = null;
        document.getElementById("receiverID").value = null;
        updateDoc(userDocRef, {
          XRP: userXRP - transferQuantity,
          Transaction: userTransactionHistory,
        });

        getDoc(receiverDocRef).then((doc) => {
          let receiverDataString =
            transferDate +
            " " +
            "XRP" +
            " " +
            String(transferQuantity) +
            " " +
            "Received" +
            " " +
            UserInfo.id;
          let receiverTransactionHistory = doc.data().Transaction;
          receiverTransactionHistory.push(receiverDataString);

          updateDoc(receiverDocRef, {
            XRP: doc.data().XRP + transferQuantity,
            Transaction: receiverTransactionHistory,
          });
        });
      } else {
        alert("Insufficient Balance");
      }
    } else if (transferCrypto == "BNB") {
      if (transferQuantity <= userBNB) {
        let transferDataString =
          transferDate +
          " " +
          "BNB" +
          " " +
          String(transferQuantity) +
          " " +
          "Sent" +
          " " +
          receiverID;
        userTransactionHistory.push(transferDataString);

        alert("Transaction Successful✅");
        document.getElementById("transferQuantity").value = null;
        document.getElementById("receiverID").value = null;
        updateDoc(userDocRef, {
          BNB: userBNB - transferQuantity,
          Transaction: userTransactionHistory,
        });

        getDoc(receiverDocRef).then((doc) => {
          let receiverDataString =
            transferDate +
            " " +
            "BNB" +
            " " +
            String(transferQuantity) +
            " " +
            "Received" +
            " " +
            UserInfo.id;
          let receiverTransactionHistory = doc.data().Transaction;
          receiverTransactionHistory.push(receiverDataString);

          updateDoc(receiverDocRef, {
            BNB: doc.data().BNB + transferQuantity,
            Transaction: receiverTransactionHistory,
          });
        });
      } else {
        alert("Insufficient Balance");
      }
    } else if (transferCrypto == "ADA") {
      if (transferQuantity <= userADA) {
        let transferDataString =
          transferDate +
          " " +
          "ADA" +
          " " +
          String(transferQuantity) +
          " " +
          "Sent" +
          " " +
          receiverID;
        userTransactionHistory.push(transferDataString);

        alert("Transaction Successful✅");
        document.getElementById("transferQuantity").value = null;
        document.getElementById("receiverID").value = null;
        updateDoc(userDocRef, {
          ADA: userADA - transferQuantity,
          Transaction: userTransactionHistory,
        });

        getDoc(receiverDocRef).then((doc) => {
          let receiverDataString =
            transferDate +
            " " +
            "ADA" +
            " " +
            String(transferQuantity) +
            " " +
            "Received" +
            " " +
            UserInfo.id;
          let receiverTransactionHistory = doc.data().Transaction;
          receiverTransactionHistory.push(receiverDataString);

          updateDoc(receiverDocRef, {
            ADA: doc.data().ADA + transferQuantity,
            Transaction: receiverTransactionHistory,
          });
        });
      } else {
        alert("Insufficient Balance");
      }
    }
  });
});
//Code to transfer cryptocurrency ends

//Code to show realtime price and balance
window.addEventListener("load", (e) => {
  const docRef = doc(db, "UserAuthList", UserInfo.id);

  getDoc(docRef).then((doc) => {
    let btcQty = doc.data().BTC;
    let ethQty = doc.data().ETH;
    let bnbQty = doc.data().BNB;
    let solQty = doc.data().SOL;
    let adaQty = doc.data().ADA;
    let xrpQty = doc.data().XRP;

    document.getElementById("btcQty").innerText = btcQty;
    document.getElementById("ethQty").innerText = ethQty;
    document.getElementById("bnbQty").innerText = bnbQty;
    document.getElementById("solQty").innerText = solQty;
    document.getElementById("adaQty").innerText = adaQty;
    document.getElementById("xrpQty").innerText = xrpQty;
  });
});

//Code to show realtime price and balance ends

//Code to show history on clicking history button
const historyBtn = document.getElementById("history");
historyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("historyWindow").style.display = "block";
  // document.getElementById("history_info").innerText = UserInfo.email
  document.getElementById("separator").style.display = "block";
  document.getElementById("closeHistory").style.display = "block";

  const docRef = doc(db, "UserAuthList", UserInfo.id);

  getDoc(docRef).then((doc) => {
    let userTransactionHistory = doc.data().Transaction;
    for (let i = 0; i < userTransactionHistory.length; i++) {
      let recString = userTransactionHistory[i];
      let recArray = recString.split(" ");
      console.log(recArray);
      let record = `<tr>
             <td>${recArray[0]}</td>
             <td>${recArray[1]}</td>
             <td>${recArray[2]}</td>
             <td>${recArray[3]}</td>
             <td>${recArray[4]}</td>
             </tr>`;
      document.getElementById("historyData").innerHTML += record;
    }
    // console.log(userTransactionHistory)
  });
});

const historyCloseBtn = document.getElementById("closeHistory");
historyCloseBtn.addEventListener("click", (e) => {
  document.getElementById("historyWindow").style.display = "none";
  document.getElementById("separator").style.display = "none";
  document.getElementById("closeHistory").style.display = "none";
  document.getElementById("historyData").innerHTML = null;
});
//Code to show history on clicking history button ends


//Code to log user out
let signOutBtn = document.getElementById("signOut");
signOutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("user-cred");
  sessionStorage.removeItem("user-info");
  window.location.href = "Sign-up.html";
});

let checkCred = () => {
  if(!sessionStorage.getItem("user-cred")){
      window.location.href = 'login.html';
  }
}

window.addEventListener('load',checkCred);
