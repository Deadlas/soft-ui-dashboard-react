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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

import imgpath from "assets/images/BBTF.png"
import { textTransform } from "@mui/system";



function SelectCastegory() {
    const [menu, setMenu] = useState(null);

    const openMenu = ({ currentTarget }) => setMenu(currentTarget);
    const closeMenu = () => setMenu(null);

    const renderMenu = (
        <Menu
            id="simple-menu"
            anchorEl={menu}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={Boolean(menu)}
            onClose={closeMenu}
        >
            <MenuItem onClick={closeMenu}>Action</MenuItem>
            <MenuItem onClick={closeMenu}>Another action</MenuItem>
            <MenuItem onClick={closeMenu}>Something else</MenuItem>
        </Menu>
    );

    return (
        <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <SoftBox>
                    <SoftTypography variant="h4" gutterBottom>
                        $BBTF
                    </SoftTypography>
                </SoftBox>
                <SoftBox color="text" px={2}>
                    <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
                        more_horizon
                    </Icon>
                </SoftBox>
                {renderMenu}
            </SoftBox>
            <SoftBox display="flex" justifyContent="center" alignItems="center" mb={5}
            >
                <img src={imgpath}></img>
            </SoftBox>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <SoftBox>
                    <SoftTypography variant="h4" gutterBottom>
                        Time Elapsed
                    </SoftTypography>
                </SoftBox>
                <SoftBox color="text" px={2}>
                    <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
                        more_horizon
                    </Icon>
                </SoftBox>
                {renderMenu}
            </SoftBox>
            <SoftBox m={3} p={1} style={{borderStyle:"solid", color: "silver", borderWidth:"1px",borderRadius: "10px", display:'flex' }}>
                <div style = {{display: 'inline-block', width: '70%'}}>
                    <div style={{color: '#15134B'}}>Staking Time</div>
                    <div>Start Date: 12/22/2022</div>
                </div>
                <div style = {{display: 'flex', alignItem:'center', width: '30%', fontSize:'30px', color:'#563BFF'}}>
                        68Days
                </div>
            </SoftBox>
            <SoftBox m={3} p={1} style={{display:'flex', justifyContent:'space-between'}}>
                <SoftButton style={{minWidth:'42%', minHeight:'50px', textTransform:'capitalize', fontSize:'20px', fontWeight:'400'}} variant="contained" color="dark">+ Compound</SoftButton>
                <SoftButton style={{minWidth:'42%', minHeight:'50px', textTransform:'capitalize', fontSize:'20px', fontWeight:'400'}} variant="contained" color="dark">+ Withdraw Rewards</SoftButton>
            </SoftBox>
        </Card>
    );
}

export default SelectCastegory;
