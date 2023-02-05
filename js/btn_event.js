var page = 1;
$('#passbtn').click(function(){
    console.log('passbtn Clicked');
    if (page == 1){
        //첫번쨰 페이지 기능
        console.log('page::' + page);
        // id image 변경
        $('#customimg').attr("src", "assets/img/test2.png");
        //id 버튼 보여주기
        $('#passbtn').css({
            "display":"block",
            "top": "75%"
        });
        $('#passbtn2').css({
            "display":"block",
            "top": "85%"
        });
        $('#passbtn').html('결제해서 보기');
        //$('#passbtn1').prop('value',"GGG");
        
    }else if(page == 2){
        //두번째 페이지 기능
        page = 1;
        console.log('page::' + page);
        $('#customimg').css("src", "assets/img/test2.jpeg");
        //location.href='https://qr.kakaopay.com/281006011170227422004956'
        //https://qr.kakaopay.com/281006011170227422004956
    }
    page++;
});

$('#passbtn2').click(function(){
    
});

