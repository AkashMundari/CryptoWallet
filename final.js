

let bitcoin = new WebSocket(
    'wss://stream.binance.com:9443/ws/btcusdt@trade'
)

bitcoin.onmessage = (e) => {
    let data = JSON.parse(e.data);
    let qty = Number(document.getElementById('btcQty').innerText);

    document.getElementById('btcPrice').innerText = parseInt(data.p).toFixed(2);
    document.getElementById('btcBalance').innerText = document.getElementById('btcPrice').innerText*qty;
} 

let ethereum = new WebSocket(
    'wss://stream.binance.com:9443/ws/ethusdt@trade'
)

ethereum.onmessage = (e) => {
    data = JSON.parse(e.data);
    let qty = Number(document.getElementById('ethQty').innerText);

    document.getElementById('ethPrice').innerText = parseInt(data.p).toFixed(2);
    document.getElementById('ethBalance').innerText = document.getElementById('ethPrice').innerText*qty;
} 

let solana = new WebSocket(
    'wss://stream.binance.com:9443/ws/solusdt@trade'
)

solana.onmessage = (e) => {
    data = JSON.parse(e.data);
    let qty = Number(document.getElementById('solQty').innerText);

    document.getElementById('solPrice').innerText = parseInt(data.p).toFixed(2);
    document.getElementById('solBalance').innerText = document.getElementById('solPrice').innerText*qty;
} 

let ripple = new WebSocket(
    'wss://stream.binance.com:9443/ws/solusdt@trade'
)

ripple.onmessage = (e) => {
    data = JSON.parse(e.data);
    let qty = Number(document.getElementById('xrpQty').innerText);

    document.getElementById('xrpPrice').innerText = parseInt(data.p).toFixed(2);
    document.getElementById('xrpBalance').innerText = document.getElementById('xrpPrice').innerText*qty;
} 

let binance = new WebSocket(
    'wss://stream.binance.com:9443/ws/bnbusdt@trade'
)

binance.onmessage = (e) => {
    data = JSON.parse(e.data);
    let qty = Number(document.getElementById('bnbQty').innerText);
    document.getElementById('bnbPrice').innerText = parseInt(data.p).toFixed(2);
    document.getElementById('bnbBalance').innerText = document.getElementById('bnbPrice').innerText*qty;
} 

let cardano = new WebSocket(
    'wss://stream.binance.com:9443/ws/usdcusdt@trade'
)

cardano.onmessage = (e) => {
    data = JSON.parse(e.data);
    let qty = Number(document.getElementById('adaQty').innerText);

    document.getElementById('adaPrice').innerText = parseInt(data.p).toFixed(2);
    document.getElementById('adaBalance').innerText = document.getElementById('adaPrice').innerText*qty;
} 


function updateBalance(){
let btcBalance = Number(document.getElementById('btcBalance').innerText);
let ethBalance = Number(document.getElementById('ethBalance').innerText);
let solBalance = Number(document.getElementById('solBalance').innerText);
let xrpBalance = Number(document.getElementById('xrpBalance').innerText);
let bnbBalance = Number(document.getElementById('bnbBalance').innerText);
let adaBalance = Number(document.getElementById('adaBalance').innerText);

let totBalance = btcBalance + ethBalance + solBalance + xrpBalance + bnbBalance + adaBalance;
document.getElementById('totBalance').innerText = `$ ${totBalance}`;
}









function openDepositWindow(){
    document.getElementById("depositWindow").style.display ="block";
    document.getElementById("separator").style.display = "block";
}

function closeDepositWindow(){
    document.getElementById("depositWindow").style.display = "none";
    document.getElementById("separator").style.display = "none";

}

function openTransferWindow(){
    document.getElementById("transferWindow").style.display = "block";
    document.getElementById("separator").style.display = "block";
}

function closeTransferWindow(){
    document.getElementById("transferWindow").style.display = "none";
    document.getElementById("separator").style.display = "none";
}

function supportExt(){
    document.getElementById('supportExtended').style.display = 'block';
    document.getElementById('plusSupport').style.display = 'none';
    document.getElementById('minusSupport').style.display = 'block';
}

function supportCom(){
    document.getElementById('supportExtended').style.display = 'none';
    document.getElementById('plusSupport').style.display = 'block';
    document.getElementById('minusSupport').style.display = 'none';
}

function faqExt(){
    document.getElementById('faqExtended').style.display = 'block';
    document.getElementById('plusFaq').style.display = 'none';
    document.getElementById('minusFaq').style.display = 'block';
}

function faqCom(){
    document.getElementById('faqExtended').style.display = 'none';
    document.getElementById('plusFaq').style.display = 'block';
    document.getElementById('minusFaq').style.display = 'none';
}