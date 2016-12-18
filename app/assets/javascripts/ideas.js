$(document).ready(function(){
  addIdeas();
});

function addIdeas(){
  $.getJSON("/api/v1/ideas")
  .then(function(allIdeas){
    allIdeas.forEach(renderIdea)
  })
  .then(attachDeleteEvent)
  .then(attachEditEvent)
  .then(attachQualityEvents)
  .fail(displayFailure)
}

function renderIdea(idea){
  $("#ideas-list").append(`<div class='idea'  data-id='${idea.id}'>
                              <p contenteditable="true" class="idea-title">${idea.title.toUpperCase()}</p>
                              <p contenteditable="true" class="idea-body">${idea.body}</p>
                              <p>
                                <button class="upgrade-quality">+</button>
                                <button class="downgrade-quality">-</button>
                                <span class="quality-level">
                              ${idea.quality} </span><button class='delete-idea'>Delete</button></p>
                            </div>`)

}
