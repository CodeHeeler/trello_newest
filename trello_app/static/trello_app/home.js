function displayBoard(category){
    console.log("stuff");
    if(category!='cards'){
      $.ajax({
        url: "http://127.0.0.1:8000/api/"+category+"\/",
        success: function(data){
          $('body').append('<div id='+ data.results[0].title.replace(/\s/g, '') +'><a onclick="displayCard(\'card\')">' + data.results[0].title + '</a><br></div>');
          // $('div'+key).append('<div'+ data.name.replace(/\s/g, '') +'><a onclick="display(\''+url+'\',\''+data.name+'\')">' + data.name + '</a><br><//div>');

        }
        // .replace(/\s/g, '')
        // return data.results[0];

      });
    }else{
      console.log(category)
      $.ajax({
        url: "http://127.0.0.1:8000/api/cards/",
        success: function(data){
          $('body').append('<div id='+ data.results[0].title.replace(/\s/g, '') +'><p>' + data.results[0].title + '</p><br></div>');
        }
      }
      )

    }
}
display('boards')
