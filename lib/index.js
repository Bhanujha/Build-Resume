function newQualification() {
  var template =
    '<div style="display: none; padding: 16px 0; margin: 8px 0;" class="qualification-form"> Qualification: <input type="text" name="" value="" placeholder="Qualification"> <br><br> Board: <input type="text" name="" value="" placeholder="Board"> <br><br> Grade/Percentage: <input type="text" name="" value="" placeholder="Grade/Percentage"> <br><br> Year of Passing: <input type="text" name="" value="" placeholder="Year of Passing"></div> <hr>';
  $("#qualifications").append(template);
  $("#qualifications").find(".qualification-form").slideDown("fast");
}

function newCertification() {
  var template =
    '<div style="display: none; padding: 16px 0; margin: 8px 0;" class="certificate-form"> Certification: <input type="text" name="" value="" placeholder="Certification"> <br><br> Year: <input type="text" name="" value="" placeholder="Year of Certification"> <br><br> Grade/Percentage/Marks: <input type="text" name="" value="" placeholder="Grade/Percentage/Marks"> <br><br> Other Details: <input type="text" name="" value="" placeholder="Any other details"></div><hr>';
  $("#certificates").append(template);
  $("#certificates").find(".certificate-form").slideDown("fast");
}

function newCourse() {
  var template =
    '<textarea class="courses form-control" name="courses" cols="30" placeholder="Course Details..."></textarea><br>';
  $("#courses").append(template);
  $("#courses").find(".courses").slideDown("slow");
}

function newInstrumentalSkill() {
  var template = `<div
    class="instrumental-skill"
    >
      <input type="text" placeholder="Skill name" class="form-control">
      <br>
  </div>`;
  $(".instrumental").append(template);
  $(".instrumental").find(".instrumental-skill").slideDown("slow");
}

function newAward() {
  var template = `<div
    class="award"
    >
    <input type="text" class="form-control" name="awards" placeholder="Achievement Details...">
    <br />
  </div>`;
  $(".awards").append(template);
  $(".awards").find(".award").slideDown("slow");
}

function newExperience() {
  var template = `<div
    class="experience"
    >
    <input type="text" class="form-control" name="company" placeholder="Work Details...">
    <br />
  </div>`;
  $(".experiences").append(template);
  $(".experiences").find(".experience").slideDown("slow");
}

function newWorkShop() {
  var template = `<div
    class="workshop"
    >
    <input type="text" class="form-control" name="workshop" placeholder="Workshop's Details...">
    <br />
  </div>`;
  $(".workshops").append(template);
  $(".workshops").find(".workshop").slideDown("slow");
}

function newProject() {
  var template = `<div
    class="project"
    >
    <input type="text" class="form-control" name="project" placeholder="Project's Details, Links to Drive/Dropbox/Github, etc">
    <br />
  </div>`;
  $(".projects").append(template);
  $(".projects").find(".project").slideDown("slow");
}
