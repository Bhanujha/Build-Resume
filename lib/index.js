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
