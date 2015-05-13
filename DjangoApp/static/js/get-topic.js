function getDataSource(datasource){
	if(datasource=="worldbank"){
		$.getJSON('http://localhost:8000/static/js/topic.json',
			function(json){
				var topicSelect = document.getElementById("selectTopic");
				for(var i=0;i<json.length;i++){

					topicSelect.options[i] = new Option();
					topicSelect.options[i].text = json[i].topic;
					topicSelect.options[i].value = json[i].topic;
				}
			});
	}
}