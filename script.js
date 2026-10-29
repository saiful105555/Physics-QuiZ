// Application State
let state = {
    studentName: "",
    currentQuestionIndex: 0,
    answers: {}, // questionId -> selectedOptionId
    markedForReview: {}, // questionId -> boolean
    timeLeft: 30 * 60, // 30 minutes in seconds
    timerInterval: null,
    isSubmitted: false
};

// DOM Elements
const startScreen = document.getElementById('startScreen');
const examScreen = document.getElementById('examScreen');
const resultScreen = document.getElementById('resultScreen');
const startExamBtn = document.getElementById('startExamBtn');
const studentNameInput = document.getElementById('studentName');
const totalQuestionsCount = document.getElementById('totalQuestionsCount');

const currentQNum = document.getElementById('currentQNum');
const totalQNum = document.getElementById('totalQNum');
const timeRemaining = document.getElementById('timeRemaining');
const examProgressBar = document.getElementById('examProgressBar');

const questionTopicBadge = document.getElementById('questionTopicBadge');
const questionIdBadge = document.getElementById('questionIdBadge');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const clearBtn = document.getElementById('clearBtn');
const markReviewBtn = document.getElementById('markReviewBtn');
const submitExamBtn = document.getElementById('submitExamBtn');
const paletteToggleBtn = document.getElementById('paletteToggleBtn');
const paletteSidebar = document.getElementById('paletteSidebar');
const closePaletteBtn = document.getElementById('closePaletteBtn');
const paletteGrid = document.getElementById('paletteGrid');

// Modals
const confirmModal = document.getElementById('confirmModal');
const cancelSubmitBtn = document.getElementById('cancelSubmitBtn');
const confirmSubmitBtn = document.getElementById('confirmSubmitBtn');
const confAnswered = document.getElementById('confAnswered');
const confUnanswered = document.getElementById('confUnanswered');
const confMarked = document.getElementById('confMarked');

const adminBtn = document.getElementById('adminBtn');
const adminModal = document.getElementById('adminModal');
const closeAdminModal = document.getElementById('closeAdminModal');
const adminTableBody = document.getElementById('adminTableBody');
const adminSearch = document.getElementById('adminSearch');
const adminFilter = document.getElementById('adminFilter');
const exportJsonBtn = document.getElementById('exportJsonBtn');

// Result Screen Elements
const finalScoreDisplay = document.getElementById('finalScoreDisplay');
const finalPercentageDisplay = document.getElementById('finalPercentageDisplay');
const resStudentName = document.getElementById('resStudentName');
const resCorrectCount = document.getElementById('resCorrectCount');
const resIncorrectCount = document.getElementById('resIncorrectCount');
const resUnansweredCount = document.getElementById('resUnansweredCount');
const resTotalScore = document.getElementById('resTotalScore');
const printResultBtn = document.getElementById('printResultBtn');
const reviewAnswersBtn = document.getElementById('reviewAnswersBtn');
const restartBtn = document.getElementById('restartBtn');
const answerReviewContainer = document.getElementById('answerReviewContainer');
const reviewList = document.getElementById('reviewList');

// Initialize App
function initApp() {
    totalQuestionsCount.innerText = questionsData.length + 'টি';
    totalQNum.innerText = questionsData.length;
    
    // Check localStorage for ongoing exam
    const savedState = localStorage.getItem('saiful_science_exam_state');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            if (parsed && !parsed.isSubmitted && parsed.studentName) {
                if (confirm(parsed.studentName + ', আপনার একটি অসমাপ্ত পরীক্ষা সংরক্ষিত আছে। কি আপনি সেটি চালিয়ে যেতে চান?')) {
                    state = parsed;
                    startScreen.classList.remove('active');
                    examScreen.classList.add('active');
                    startTimer();
                    renderQuestion();
                    renderPalette();
                    return;
                } else {
                    localStorage.removeItem('saiful_science_exam_state');
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
}

// Start Exam
startExamBtn.addEventListener('click', () => {
    const name = studentNameInput.value.trim();
    if (!name) {
        alert('দয়া করে আপনার নাম লিখুন।');
        studentNameInput.focus();
        return;
    }
    state.studentName = name;
    startScreen.classList.remove('active');
    examScreen.classList.add('active');
    
    startTimer();
    renderQuestion();
    renderPalette();
    saveStateToStorage();
});

// Timer Function
function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    
    state.timerInterval = setInterval(() => {
        if (state.timeLeft <= 0) {
            clearInterval(state.timerInterval);
            alert('সময় শেষ! আপনার পরীক্ষা স্বয়ংক্রিয়ভাবে জমা দেওয়া হলো।');
            submitExam(true);
            return;
        }
        state.timeLeft--;
        updateTimerDisplay();
        saveStateToStorage();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timeLeft / 60);
    const seconds = state.timeLeft % 60;
    timeRemaining.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (state.timeLeft <= 300) { // Last 5 minutes warning
        document.getElementById('timerDisplay').style.background = '#FEE2E2';
    }
}

// Render Current Question
function renderQuestion() {
    const q = questionsData[state.currentQuestionIndex];
    currentQNum.innerText = state.currentQuestionIndex + 1;
    questionTopicBadge.innerText = q.topic || 'পদার্থবিজ্ঞান';
    questionIdBadge.innerText = `ID: ${q.id}`;
    questionText.innerText = `${state.currentQuestionIndex + 1}. ${q.question}`;
    
    // Progress Bar
    const progressPercent = ((state.currentQuestionIndex + 1) / questionsData.length) * 100;
    examProgressBar.style.width = `${progressPercent}%`;
    
    // Render Options
    optionsContainer.innerHTML = '';
    q.options.forEach(opt => {
        const isSelected = state.answers[q.id] === opt.id;
        const optCard = document.createElement('div');
        optCard.className = `option-card ${isSelected ? 'selected' : ''}`;
        optCard.innerHTML = `
            <div class="option-badge">${opt.id}</div>
            <div class="option-text">${opt.text}</div>
        `;
        optCard.addEventListener('click', () => selectOption(q.id, opt.id));
        optionsContainer.appendChild(optCard);
    });
    
    // Navigation Buttons State
    prevBtn.disabled = state.currentQuestionIndex === 0;
    nextBtn.innerText = state.currentQuestionIndex === questionsData.length - 1 ? 'শেষ প্রশ্ন' : 'পরবর্তী';
    
    renderPalette();
}

// Select Option
function selectOption(questionId, optionId) {
    state.answers[questionId] = optionId;
    renderQuestion();
    saveStateToStorage();
}

// Navigation Event Listeners
nextBtn.addEventListener('click', () => {
    if (state.currentQuestionIndex < questionsData.length - 1) {
        state.currentQuestionIndex++;
        renderQuestion();
    } else {
        openSubmitConfirmation();
    }
});

prevBtn.addEventListener('click', () => {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuestion();
    }
});

clearBtn.addEventListener('click', () => {
    const qId = questionsData[state.currentQuestionIndex].id;
    delete state.answers[qId];
    renderQuestion();
    saveStateToStorage();
});

markReviewBtn.addEventListener('click', () => {
    const qId = questionsData[state.currentQuestionIndex].id;
    state.markedForReview[qId] = !state.markedForReview[qId];
    renderPalette();
    saveStateToStorage();
    alert(state.markedForReview[qId] ? 'প্রশ্নটি রিভিউয়ের জন্য চিহ্নিত করা হয়েছে।' : 'চিহ্নিতকরণ বাতিল করা হয়েছে।');
});

// Palette Rendering
function renderPalette() {
    paletteGrid.innerHTML = '';
    questionsData.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = `palette-btn`;
        btn.innerText = idx + 1;
        
        const isAnswered = state.answers[q.id] !== undefined;
        const isMarked = state.markedForReview[q.id];
        
        if (isAnswered) btn.classList.add('answered');
        if (isMarked) btn.classList.add('marked');
        if (idx === state.currentQuestionIndex) btn.classList.add('current');
        
        btn.addEventListener('click', () => {
            state.currentQuestionIndex = idx;
            renderQuestion();
            if (window.innerWidth <= 900) togglePaletteDrawer(false);
        });
        
        paletteGrid.appendChild(btn);
    });
}

// Palette Drawer for Mobile
paletteToggleBtn.addEventListener('click', () => togglePaletteDrawer(true));
closePaletteBtn.addEventListener('click', () => togglePaletteDrawer(false));

function togglePaletteDrawer(show) {
    if (show) {
        paletteSidebar.classList.add('open');
    } else {
        paletteSidebar.classList.remove('open');
    }
}

// Submit Examination Workflow
submitExamBtn.addEventListener('click', openSubmitConfirmation);

function openSubmitConfirmation() {
    let answeredCount = 0;
    let markedCount = 0;
    
    questionsData.forEach(q => {
        if (state.answers[q.id] !== undefined) answeredCount++;
        if (state.markedForReview[q.id]) markedCount++;
    });
    
    confAnswered.innerText = answeredCount;
    confUnanswered.innerText = questionsData.length - answeredCount;
    confMarked.innerText = markedCount;
    
    confirmModal.classList.remove('hidden');
}

cancelSubmitBtn.addEventListener('click', () => {
    confirmModal.classList.add('hidden');
});

confirmSubmitBtn.addEventListener('click', () => {
    confirmModal.classList.add('hidden');
    submitExam(false);
});

function submitExam(isAuto = false) {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.isSubmitted = true;
    localStorage.removeItem('saiful_science_exam_state');
    
    examScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    calculateAndShowResults();
}

// Calculate Results
function calculateAndShowResults() {
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;
    let verifiedTotal = 0;
    
    questionsData.forEach(q => {
        if (q.answerVerified) verifiedTotal++;
        
        const userAns = state.answers[q.id];
        if (userAns === undefined) {
            unansweredCount++;
        } else if (userAns === q.correctAnswer) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    });
    
    const score = correctCount;
    const percentage = Math.round((score / questionsData.length) * 100);
    
    resStudentName.innerText = state.studentName;
    resCorrectCount.innerText = correctCount;
    resIncorrectCount.innerText = incorrectCount;
    resUnansweredCount.innerText = unansweredCount;
    resTotalScore.innerText = `${score} / ${questionsData.length}`;
    
    finalScoreDisplay.innerText = `${score} / ${questionsData.length}`;
    finalPercentageDisplay.innerText = `${percentage}%`;
    
    // Render Review List
    renderReviewList();
}

function renderReviewList() {
    reviewList.innerHTML = '';
    questionsData.forEach((q, idx) => {
        const userAns = state.answers[q.id];
        let statusClass = 'unanswered';
        let statusText = 'উত্তর দেওয়া হয়নি';
        
        if (userAns !== undefined) {
            if (userAns === q.correctAnswer) {
                statusClass = 'correct';
                statusText = 'সঠিক';
            } else {
                statusClass = 'incorrect';
                statusText = 'ভুল';
            }
        }
        
        const item = document.createElement('div');
        item.className = `review-item ${statusClass}`;
        item.innerHTML = `
            <h4>প্রশ্ন ${idx + 1}: ${q.question}</h4>
            <p><strong>আপনার উত্তর:</strong> ${userAns ? q.options.find(o => o.id === userAns).text : 'দেওয়া হয়নি'}</p>
            <p><strong>সঠিক উত্তর:</strong> ${q.options.find(o => o.id === q.correctAnswer).text}</p>
            <p><small class="text-muted">ব্যাখ্যা: ${q.explanation || 'প্রযোজ্য নয়'}</small></p>
            <span class="badge ${statusClass === 'correct' ? 'text-success' : 'text-danger'}">${statusText}</span>
        `;
        reviewList.appendChild(item);
    });
}

reviewAnswersBtn.addEventListener('click', () => {
    answerReviewContainer.classList.toggle('hidden');
});

printResultBtn.addEventListener('click', () => {
    window.print();
});

restartBtn.addEventListener('click', () => {
    localStorage.removeItem('saiful_science_exam_state');
    location.reload();
});

// Admin Modal Logic
adminBtn.addEventListener('click', () => {
    renderAdminTable();
    adminModal.classList.remove('hidden');
});

closeAdminModal.addEventListener('click', () => {
    adminModal.classList.add('hidden');
});

function renderAdminTable(filter = 'all', search = '') {
    adminTableBody.innerHTML = '';
    const filtered = questionsData.filter(q => {
        const matchesSearch = q.question.toLowerCase().includes(search.toLowerCase()) || q.id.toLowerCase().includes(search.toLowerCase());
        if (filter === 'verified') return matchesSearch && q.answerVerified;
        if (filter === 'unverified') return matchesSearch && !q.answerVerified;
        return matchesSearch;
    });
    
    filtered.forEach(q => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${q.id}</td>
            <td>${q.topic}</td>
            <td>${q.question}</td>
            <td><strong>${q.correctAnswer}</strong></td>
            <td><span class="badge ${q.answerVerified ? 'text-success' : 'text-danger'}">${q.answerVerified ? 'Verified' : 'Unverified'}</span></td>
        `;
        adminTableBody.appendChild(tr);
    });
}

adminSearch.addEventListener('input', (e) => {
    renderAdminTable(adminFilter.value, e.target.value);
});

adminFilter.addEventListener('change', (e) => {
    renderAdminTable(e.target.value, adminSearch.value);
});

exportJsonBtn.addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(questionsData, null, 4));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "saiful_science_questions.json");
    dlAnchorElem.click();
});

// LocalStorage Persistence
function saveStateToStorage() {
    if (!state.isSubmitted && state.studentName) {
        localStorage.setItem('saiful_science_exam_state', JSON.stringify(state));
    }
}

// Run Initialization on Load
window.addEventListener('DOMContentLoaded', initApp);
