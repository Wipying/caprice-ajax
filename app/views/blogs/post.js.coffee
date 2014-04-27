$('#content-wrapper').html "<%=escape_javascript(render 'post')%>"
$('#searchbox-wrapper-for-blog').html "<%=escape_javascript(render 'searchbox')%>"
History.pushState '','','/blogs/post'