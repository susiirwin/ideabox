function attachDeleteEvent(){
  $('.delete-idea').on('click', deleteIdea)
}

function deleteIdea(){

  var id = $(this).closest(".idea").data("id");

  $.ajax({
    url: `/api/v1/ideas/${id}`,
    method: 'delete',
    type: 'json'
  }).then(removeIdeaFromPage.bind(this))
}

function removeIdeaFromPage(){
  $(this).closest(".idea").remove()
}
