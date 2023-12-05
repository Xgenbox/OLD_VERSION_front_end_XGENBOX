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
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatisticCard from "./components/StatisticCard";
import { fetchScore } from "Redux/actions/scoreAction";



const HeaderCiti = () => {
  const dispatch = useDispatch()
  const userStatistiques = useSelector(state=>state?.userStatistiques?.statistiques)
  const BinStatistiques = useSelector(state=>state?.binStatistiques?.statistiques)
  const scores = useSelector(state=>state?.scores?.score)

useEffect(() => {
  dispatch(getUsersCounts())
  dispatch(getBinsCount())
  dispatch(fetchScore())
},[userStatistiques, BinStatistiques,scores] )

const user = userStatistiques?.byRole?.filter(el => el.role === "USER") || [];
const municipal = userStatistiques?.byRole?.filter(el => el.role === "MUNICIPAL") || [];

const allUser = userStatistiques?.total
// console.log(user[0]?.currentDayCount)

// const score = useMemo(() => ({
//     labels: ['score'],
//     data: [Number(scores?.score?.score) * 0.01 || 0],
//   }), [scores]);
// console.log(scores)
  return (
    <>
      <div className="header bg-gradient-green pb-8 pt-5 pt-md-8 ">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
            <StatisticCard key={1} icon={"fas fa-chart-line"} title="User Score" iconClass="bg-warning" value={scores?.score?.score} percentageIncrease={scores?.rank} />
            <StatisticCard key={2} icon={"fas fa-gift"} title="all Gift Count" iconClass="bg-yellow" value={scores?.score?.gift.length+1} percentageIncrease={allUser?.percentageIncrease} gift={true} />
            {/* <StatisticCard key={3} icon={"fas fa-truck"} title="MUNICIPALs count" iconClass="bg-info" value={municipal[0]?.totalCount} percentageIncrease={municipal[0]?.percentageIncrease} /> */}


            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderCiti;
