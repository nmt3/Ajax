//(API_KEYには、"取得したAPIキー"を記述)
const API_KEY="0089666bdf4c1159a6d41d2d1dc7326c";

$(function(){
  $('#btn').on('click',function(){
    // 入力された都市名でWebAPIに天気予報をリクエスト
    $.ajax({
      url:"https://api.openweathermap.org/data/2.5/weather?q="+$('#cityname').val()+"&units=metric&appid="+API_KEY,
      dataType:"jsonp",
    }).done(function(data){
      // 通信成功
    }).fail(function(data){
      // 通信失敗
    });
  });
});