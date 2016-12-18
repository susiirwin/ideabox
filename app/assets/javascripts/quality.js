function attachQualityEvents(){
  $(".upgrade-quality").on('click', upgradeQuality)
  $(".downgrade-quality").on('click', downgradeQuality)
}

function upgradeQuality(event){
  event.preventDefault
  var id = $(this).closest(".idea").data("id");
  var qualityHash = {
    'swill': 'plausible',
    'plausible': 'genius',
    'genius': 'genius'
  }
  var ideaQuality = $.trim($(this).siblings('.quality-level').text())
  var newQuality = qualityHash[ideaQuality]

  $.ajax({
    url: `/api/v1/ideas/${id}`,
    method: "put",
    type: 'json',
    data: { idea: {quality: newQuality} }
  }).then($(this).siblings('.quality-level').text(newQuality))
}

function downgradeQuality(event){
  event.preventDefault
  var id = $(this).closest(".idea").data("id");
  var qualityHash = {
    'genius': 'plausible',
    'plausible': 'swill',
    'swill': 'swill'
  }
  var ideaQuality = $.trim($(this).siblings('.quality-level').text())
  var newQuality = qualityHash[ideaQuality]

  $.ajax({
    url: `/api/v1/ideas/${id}`,
    method: "put",
    type: 'json',
    data: { idea: {quality: newQuality} }
  }).then($(this).siblings('.quality-level').text(newQuality))
}
