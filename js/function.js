alert('이 주제의 당사자인 JalNanSon의 동의를 얻지 못하여 부득이하게 영어로 작성하게 되었다. \nJalNanSon이 영어를 잘 몰라 자기 이야기인 줄 눈치채지 못할 것 같아서...');
alert('간단히 요약을 하자면, \n현재 JalNanSon이 어떤 생각을 하고 있으며 \n어떤 상태인지를 미루어 짐작해보고 \nJalNanSon과의 관계를 원만하게 유지하며 \n현 위기를 잘 극복하고자 하는 내용이다.');

//DOM선택
const $logo = document.querySelector('h1.logo');
const $mnus = document.querySelectorAll('header>.container>nav>.gnb>li>a');
const $articles = document.querySelectorAll('article');
const $top = document.querySelector('a.top');

//활성화 표시에 사용할 변수
let nowIdx = 0;
let oldIdx = nowIdx;
const arrTopVal = [];

//탑값을 배열에 추가
$articles.forEach(($article, idx)=>{
	arrTopVal[idx] = $article.offsetTop;
});

//반복되는 코드를 함수화
const pageAni = function(idx){	
		window.scrollTo({
			left:0,
			top: arrTopVal[idx]-100,
			behavior: 'smooth'
		});	
};

//스크롤 이벤트
window.addEventListener('scroll', function(){
	const scrollTop = Math.ceil(window.scrollY);	
	for(let i=0; i<$articles.length; i++){
		if(scrollTop>=arrTopVal[i]-100){
			oldIdx=nowIdx;
			nowIdx=i;
			$mnus[oldIdx].parentElement.classList.remove('on');
			$mnus[nowIdx].parentElement.classList.add('on');
		}
	}	
});

//메뉴 클릭 이벤트
$mnus.forEach(($mnu, idx)=>{
	$mnu.addEventListener('click',(evt)=>{
		evt.preventDefault();		
		pageAni(idx);				
	});
});

//탑 클릭 이벤트
$top.addEventListener('click', (evt)=>{
	evt.preventDefault();
	pageAni(0);
});

//로고 클릭 이벤트
$logo.addEventListener('click', (evt)=>{
	evt.preventDefault();
	$top.click();
});