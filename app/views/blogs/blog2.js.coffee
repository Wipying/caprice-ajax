$('#content-wrapper').html "<%=escape_javascript(render 'blog2')%>"
$('#searchbox-wrapper-for-blog').html "<%=escape_javascript(render 'searchbox')%>"
History.pushState '','','/blogs/blog2'