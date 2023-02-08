import "./home.css"
import FeaturedInfo from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart/>
    </div>
  )
}
