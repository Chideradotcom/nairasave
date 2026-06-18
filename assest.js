const assets = [
{
    id:"US-TREAS-INST-001",
    holding:"$85,000.00",
    equivalent:"₦136,000,000",
    risk:"LOW",
    status:"Active Yielding"
},
{
    id:"NG-BONDS-SOV-042",
    holding:"₦42,500,000",
    equivalent:"₦42,500,000",
    risk:"LOW",
    status:"Active Yielding"
},
{
    id:"STABLE-FLEX-PORTFOLIO",
    holding:"$39,500.00",
    equivalent:"₦63,200,000",
    risk:"MID",
    status:"Vesting (48h)"
}
];

const tableBody = document.getElementById("table-body");

function renderLedger(assetData){

    tableBody.innerHTML = "";

    assetData.forEach((asset) => {

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td class="asset-id">${asset.id}</td>
            <td>${asset.holding}</td>
            <td>${asset.equivalent}</td>
            <td>
                <span class="${asset.risk.toLowerCase()}">
                    ${asset.risk}
                </span>
            </td>
            <td>
    
             <td>
                <span class="status">
                    ${
                        asset.status === "Active Yielding"
                        ? `<span class="status-dot active"></span>`
                        : `<span class="status-lock">🔒</span>`
                    }
                    ${asset.status}
                </span>
            </td>
        `;

        tableBody.appendChild(newRow);
    });
}

renderLedger(assets);

// Simulate a live update 

setTimeout(() => {

    assets.push({
        id: "NG-FIXED-081",
        holding: "₦18,000,000",
        equivalent: "₦18,000,000",
        risk: "LOW",
        status: "Active Yielding"
    });

    renderLedger(assets);

}, 5000);