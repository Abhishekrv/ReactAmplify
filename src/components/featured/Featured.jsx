import "./featured.css"

export default function FeaturedInfo() {
  return (
    <div className="featuredRRR">
        <div className="featuredItem">
            
            <div className="featuredVulnerabilitiesContainer">
                <ul>
                    <span className="featuredTitle"><h2>ProjectStryker</h2></span>
                    <li><span className="featuredScoping">Scoping : To be Scoped</span></li>    
                    <li><span className="featuredReporting">Reporting : TBD</span></li>    
                    <li><span className="featuredRemediation">Remediation : TBD</span></li>    
                </ul>
            </div>
            
            <div className="featuredVulnerabilitiesContainer">
                <ul>
                    <span className="featuredTitle"><h2>ProjectEureka</h2></span>
                    <li><span className="featuredScoping">Scoping : Scoping report can be found here</span></li>    
                    <li><span className="featuredReporting">Reporting: Reporting in progress</span></li>    
                    <li><span className="featuredRemediation">Remediation : TBD</span></li>    
                </ul>   
            </div>

            <div className="featuredVulnerabilitiesContainer">
            <ul>
                <span className="featuredTitle"><h2>ProjectCyberhen</h2></span>
                    <li><span className="featuredScoping">Scoping : Scoping report can be found here</span></li>    
                    <li><span className="featuredReporting">Reporting : Report can be found here</span></li>    
                    <li><span className="featuredRemediation">Remediation : All patches fixed. Project is clean</span></li>    
                </ul>   
            </div>
            </div>
        </div>
  )
}
