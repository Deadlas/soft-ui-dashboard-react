/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
// import Grid from "@mui/material/Grid";


// Billing page components
import Bill from "layouts/billing/components/Bill";

// import ReactSimplyCarousel from 'react-simply-carousel';

function RewardTracker() {
  const arrImg = ['$BBTF','$SFM','$BNB-MP','$BTC-MP'];

  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h4" fontWeight="medium">
          Rewards Tracker
        </SoftTypography>
      </SoftBox>
      <SoftBox m={3} style= {{display:'flex'}}>
        {/*  justifyContent:'space-around' */}
        {arrImg.map((link, k) => (
          <div style={{width:'23%', padding:'2%', display:'flex', flexDirection:'column', gap:'15px'}}>
            <img src = {'images/coin'+(k+1) +'.png'} />
            <span style={{fontSize:'12px',width:'100%', textAlign:'center'}}>{link}</span>
          </div>
        ))}
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
        </SoftBox>
        <SoftBox p={3} m={3} style={{ borderStyle: "solid", color: "silver", borderWidth: "1px", borderRadius: "10px", display: 'flex' }}>
          <SoftBox >0x*******9C41</SoftBox>
        </SoftBox>
        <SoftBox m={3}>
          <SoftButton style={{ minWidth: '100%', minHeight: '60px', textTransform: 'capitalize', fontSize: '20px', fontWeight: '400' }} variant="contained" color="dark">Refresh Rewards</SoftButton>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default RewardTracker;
