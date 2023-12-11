/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { getBinsCount } from "Redux/actions/Statistiques.action";
import { getUsersCounts } from "Redux/actions/Statistiques.action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatisticCard from "./components/StatisticCard";
// Example import statement
import backgroundImage from "../../assets/514f2ec3798090c6df00dad1592c8166.svg";



const Header = () => {
  const dispatch = useDispatch()
  const userStatistiques = useSelector(state=>state?.userStatistiques?.statistiques)
  const BinStatistiques = useSelector(state=>state?.binStatistiques?.statistiques)

useEffect(() => {
  dispatch(getUsersCounts())
  dispatch(getBinsCount())
},[userStatistiques, BinStatistiques] )

const user = userStatistiques?.byRole?.filter(el => el.role === "USER") || [];
const municipal = userStatistiques?.byRole?.filter(el => el.role === "MUNICIPAL") || [];

const allUser = userStatistiques?.total
// console.log(user[0]?.currentDayCount)


  return (
    <>
      <div className="header bg-gradient-reverse-primary pb-8 pt-2 pt-md-7 "
        style={{
    minHeight: "300px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center top"
  }}
      >
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
            <StatisticCard key={1} icon={"fas fa-trash"} title="Bins count" iconClass="bg-warning" value={BinStatistiques?.totalCount} percentageIncrease={BinStatistiques?.percentageIncrease} />
            <StatisticCard key={2} icon={"fas fa-users"} title="Users Count" iconClass="bg-yellow" value={allUser?.totalCount} percentageIncrease={allUser?.percentageIncrease} />
            <StatisticCard key={3} icon={"fas fa-truck"} title="Urban Count" iconClass="bg-info" value={municipal[0]?.totalCount} percentageIncrease={municipal[0]?.percentageIncrease} />


            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
