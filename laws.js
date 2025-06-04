// 1) 법안 데이터 배열 - 실제 수집된 데이터로 바꿔서 사용
const lawsData = [
  {
    date: "2025-06-05",
    title: "법안 제목 1",
    summary: "법안 요약 내용 1",
    link: "https://example.com/법안1"  // 실제 상세페이지 URL
  },
  {
    date: "2025-06-04",
    title: "법안 제목 2",
    summary: "법안 요약 내용 2",
    link: "https://example.com/법안2"
  },
  // 필요에 따라 계속 추가
];

// 2) 페이지에 법안 목록 표시 함수
function displayLaws() {
  const container = document.getElementById('laws');
  if (!lawsData.length) {
    container.innerHTML = '<p>등록된 법안이 없습니다.</p>';
    return;
  }

  let html = '<ul>';
  lawsData.forEach(law => {
    html += `
      <li>
        <div class="date">${law.date}</div>
        <div class="title">${law.title}</div>
        <div class="summary">${law.summary}</div>
        <a href="${law.link}" target="_blank" rel="noopener">자세히 보기</a>
      </li>
    `;
  });
  html += '</ul>';

  container.innerHTML = html;
}

// 3) 페이지 로드 시 법안 목록 표시
window.onload = displayLaws;
