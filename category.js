const alphabetNav = document.getElementById('alphabet-nav');
const sectionsContainer = document.getElementById('director-sections');

// A부터 Z까지 배열 생성
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// 각 알파벳에 대해 메뉴와 섹션 생성
alphabet.forEach(letter => {
    // 1. 상단 메뉴 링크 추가
    const navLink = document.createElement('a');
    navLink.href = `#sec-${letter}`;
    navLink.textContent = letter;
    alphabetNav.appendChild(navLink);

    // 2. 섹션 컨테이너 생성
    const section = document.createElement('section');
    section.id = `sec-${letter}`;
    section.className = 'director-section';

    // 3. 내부 구조 추가 (예시 데이터)
    section.innerHTML = `
        <h2 class="alphabet-label">${letter}</h2>
        <div class="director-list">
            <a href="#" class="director-name">${letter} Director Example 1</a>
            <a href="#" class="director-name">${letter} Director Example 2</a>
            <a href="#" class="director-name">${letter} Director Example 3</a>
        </div>
    `;
    
    sectionsContainer.appendChild(section);
});