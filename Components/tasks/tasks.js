const tasks = () => {
    return (
      `<div class='TaskContainer'>
      <div class='ReportContent'>

        <div class='TaskHeadings'>
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
      <div class='TaskBtn'>
        <a onclick="navigateToPage('../../Pages/taskDetails/taskDetails.html')" class='ReportButton'}>VIEW DETAILS</a>
        
        <button type="button" class="btn btn-primary ChangeStatus" data-toggle="modal" data-target="#TaskModal">
          Change Status
        </button>
      </div>

    </div>

    
    <div class="modal fade" id="TaskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        </button>
      </div>
      <div class="modal-body">
        <h3> Change Status</h3>

        <form action="/action_page.php">
    <div class="form-check  taskRad">
      <label class="form-check-label" for="radio1">
        <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked>Option 1
      </label>
    </div>
    <div class="form-check  taskRad">
      <label class="form-check-label" for="radio2">
        <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">Option 2
      </label>
    </div>
    <div class="form-check  taskRad">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option3">Option 3
      </label>
    </div>
  </form>




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary UpdateRad">Update</button>
      </div>
    </div>
  </div>
</div>
    

  `
    )
  }
  const tasksCaller=()=>{
      $(".tasks").html(tasks())
  }
  
  tasksCaller();