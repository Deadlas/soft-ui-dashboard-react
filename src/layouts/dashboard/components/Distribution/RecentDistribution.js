import React from 'react'
import { useState } from "react";

// Soft UI Dashboard React examples
import Table from "examples/Tables/Table";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import { Menu, MenuItem } from '@mui/material';
import Card from '@mui/material/Card';
import SoftTypography from 'components/SoftTypography';
import Icon from '@mui/material/Icon';



const RecentDistribution = () => {
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
            open={Boolean()}
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
                    <SoftTypography variant="h6" gutterBottom>
                        Projects
                    </SoftTypography>
                </SoftBox>
                <SoftBox color="text" px={2}>
                    <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
                        more_vert
                    </Icon>
                </SoftBox>
                {renderMenu}
            </SoftBox>
            <SoftBox>
                <Table
                    columns={[
                        { name: "name", align: "left" },
                        { name: "function", align: "left" },
                        { name: "employed", align: "center" },
                        { name: "amount", align: "center" },
                        { name: "state", align: "center" },
                    ]}
                    rows={[
                        {
                            name: ["", "Staking Rewards"],
                            function: "Position #93",
                            employed: "8,June,2022",
                            amount: "229 BBTF",
                            state: "pending"
                        },
                        {
                            name: ["", "Staking Rewards"],
                            function: "Position #81",
                            employed: "7,June,2022",
                            amount: "229 BBTF",
                            state: "completed"
                        },
                        {
                            name: ["", "Staking Rewards"],
                            function: "Position #105",
                            employed: "7,June,2022",
                            amount: "229 BBTF",
                            state: "completed"
                        },
                        {
                            name: ["", "Staking Rewards"],
                            function: "Position #33",
                            employed: "6,June,2022",
                            amount: "229 BBTF",
                            state: "completed"
                        },
                    ]}
                />
            </SoftBox>
        </Card>
    )
}

export default RecentDistribution;
