const reports = () => {
    return (
      `<div class='ReportContainer'>
      <div class='ReportContent'>

        <div class='ReportImage'>
          <img src="../../assets/usafeLogo.png"/>
        </div>

        
        <div class='ReportHeadings'>
          <p>Status:</p>
          <p>Type:</p>
          <p>Assigned to:</p>
          <p>Due Date:</p>
        </div>

        <div class='ReportDescriptions'>
          <p>Pending</p>
          <p>Hazard Reporting</p>
          <p>Prod Area Manager</p>
          <p>2018-05-25</p>
        </div>

      </div>
      <div class='ReportBorder'/>
      <a onclick="navigateToPage('../../Pages/reportDetails/reportDetails.html')" class='ReportButton'}>VIEW DETAILS</button>

    </div>
  `
    )
  }
  const reportsCaller=()=>{
      $(".reports").html(reports())
  }
  
  reportsCaller();