function attachEditEvent(){
  $('.idea-title').on('focusout', editIdea)
  $('.idea-body').on('focusout', editIdea)
}

function editIdea(){
  var $ideaDiv = $(this).closest(".idea");

  var id = $ideaDiv.data("id")

  var idea = { idea: {
      title: $ideaDiv.find(".idea-title").text(),
      body: $ideaDiv.find(".idea-body").text()
    }
  }

  $.ajax({
    url: `/api/v1/ideas/${id}`,
    method: 'put',
    type: 'json',
    data: idea
  })
}
