$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = 0;
    let number = subject_points.length;
    for(let i=0; i<number; i++){
      sum = sum + subject_points[i];
      $("#sum_indicate").text(sum);
    }
    let avg = sum / number
    $("#average_indicate").text(avg);
  };

  function get_achievement(){
    let evaluation;
    let average = $('#average_indicate').text();
    Number(average);
    if(average >= 80){
      evaluation = "A"
    }else if(average >= 60){
      evaluation = "B"
    }else if(average >= 40){
      evaluation = "C"
    }
    else{
      evaluation = "D"
    }
    $("#evaluation").text(evaluation);
    return evaluation;
  }



  function get_pass_or_failure(){
    let judge;
    let subject_point = [ Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_point.length;
    for(let i=0; i<number; i++){
      if(subject_point[i] >= 60){
        judge = "合格"
      }else{
        judge = "不合格";
        break;
      }
    }
      $("#judge").text(judge);
      return judge;
}



  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    let achievement = get_achievement()
    let pass_or_failure = get_pass_or_failure()
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です</label>`);
  };
    $('#national_language, #english, #mathematics, #science, #society').change(function() {
      score_indicate();
    });

    $('#btn-evaluation').click(function() {
      get_achievement();
    });

    $('#btn-judge').click(function() {
      get_pass_or_failure();
    });

    $('#btn-declaration').click(function() {
      judgement();
    });
  });
