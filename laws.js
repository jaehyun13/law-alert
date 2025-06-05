// laws.js

function formatDate(date) {
  let y = date.getFullYear();
  let m = (date.getMonth() + 1).toString().padStart(2, '0');
  let d = date.getDate().toString().padStart(2, '0');
  return `${y}${m}${d}`;
}

function fetchLawChanges() {
  const apiKey = 'jaehyun4381';  // 예시: 사용자 이메일 ID 부분
  const today = new Date();
  const regDt = formatDate(today);

  const url = `http://www.law.go.kr/DRF/lawSearch.do?target=lsHstInf&OC=${apiKey}&regDt=${regDt}&type=JSON`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('법령 변경 이력 데이터:', data);
      // 여기에 데이터를 화면에 표시하는 코드 넣기
    })
    .catch(err => console.error('API 호출 오류:', err));
}

fetchLawChanges();
