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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SelectCastegory from "./components/SelectCategory";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import RewardTracker from "./components/RewardTracker";
import ArrowUpward from '@mui/icons-material/ArrowUpward';

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>

        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <SoftBox mb={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} xl={6}>
                    <MiniStatisticsCard
                      title={{ text: "Total BBTF staked" }}
                      description={{text:"Staking Period Began"}}
                      count="385,420,69"
                      percentage={{ color: "success", text: "+1.25%" }}
                      icon={{ color: "info", component: "paid" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <MiniStatisticsCard
                      title={{ text: "Holder's staked" }}
                      description={{text:"Staking Period Began"}}
                      count="4,209"
                      percentage={{ color: "success", text: "+3%" }}
                      icon={{ color: "info", component: "public" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <MiniStatisticsCard
                      title={{ text: "Total vested Rewards" }}
                      description={{text:"Staking Period Began"}}
                      count="+3,462"
                      percentage={{ color: "error", text: "-2%" }}
                      icon={{ color: "info", component: "emoji_events" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <MiniStatisticsCard
                      title={{ text: "Earned Rewards" }}
                      description={{text:"Staking Period Began"}}
                      count="$103,430"
                      percentage={{ color: "success", text: "+5%" }}
                      icon={{
                        color: "info",
                        component: "shopping_cart",
                      }}
                    />
                  </Grid>
                </Grid>
              </SoftBox>
              <SoftBox mb={3}>
                <GradientLineChart
                  title="Overview"
                  description={
                    <SoftBox display="flex" alignItems="center">
                      <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                        <Icon className="font-bold">arrow_upward</Icon>
                      </SoftBox>
                      <SoftTypography variant="button" color="text" fontWeight="medium">
                        4% more{" "}
                        <SoftTypography variant="button" color="text" fontWeight="regular">
                          in 2021
                        </SoftTypography>
                      </SoftTypography>
                    </SoftBox>
                  }
                  height="20.25rem"
                  chart={gradientLineChartData}
                />
              </SoftBox>
              <SoftBox mb={3}>
                <Projects />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={5}>
                <SelectCastegory/>
              </SoftBox>
              <SoftBox mb={3}>
                <RewardTracker />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
