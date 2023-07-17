const taskBar = () => {
    return (
      `<div class='taskBarContainer'>

      <div class='taskIconContainer'>

        <a onclick="navigateToPage('../../Pages/reporting/reporting.html')">
          <div class='taskIcons'>
            <i class="fa fa-calendar faIcon" aria-hidden="true"></i>
            <p>My Reporting</p>
            
          </div>
          </a>

          <a onclick="navigateToPage('../../Pages/taskPage/taskPage.html')">
          <div class='taskIcons'>
          <i class="fa fa-calendar-check-o faIcon" aria-hidden="true"></i>
            <p>My Tasks</p>
            
          </div>
          </a>

          <a onclick="navigateToPage('../../Pages/myProfile/myProfile.html')">
          <div class='taskIcons'>
            <i class="fa fa-user faIcon" aria-hidden="true"></i>
            <p>My Profile</p>
            
          </div>
          </a>
        </div>

      </div>
  `
    )
  }
  const taskBarCaller=()=>{
      $(".taskBar").html(taskBar())
  }
  
  taskBarCaller();