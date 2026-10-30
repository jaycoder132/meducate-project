
// =======================================
// MEDUCATE - PART 02
// Interactive Health Learning Modules
// =======================================

// 1. EDUCATIONAL CONTENT

const topics = {
  hypertension: {
    title: "Hypertension",
    description: "Understanding high blood pressure and heart health.",
    lessons: [
      {
        title: "What Is Hypertension?",
        text: "Hypertension means blood pressure that stays too high over time. Blood pressure measures the force of blood against artery walls.",
        points: [
          "Blood pressure is recorded using two numbers.",
          "Systolic pressure is the top number.",
          "Diastolic pressure is the bottom number.",
          "Hypertension often has no noticeable symptoms."
        ],
        tip: "Regular blood pressure measurement is important because you may feel well even when your blood pressure is high."
      },
      {
        title: "Risk Factors",
        text: "Some factors increase the likelihood of developing hypertension.",
        points: [
          "High sodium intake",
          "Physical inactivity",
          "Excess body weight",
          "Smoking and excessive alcohol consumption",
          "Family history and increasing age"
        ],
        tip: "Some risk factors cannot be changed, but healthy lifestyle choices can help lower risk."
      },
      {
        title: "Prevention and Management",
        text: "Healthy habits and appropriate medical care can help control blood pressure.",
        points: [
          "Eat a balanced diet with less sodium.",
          "Exercise regularly as appropriate.",
          "Avoid smoking.",
          "Monitor blood pressure as advised.",
          "Take prescribed medicines as directed."
        ],
        tip: "Do not stop blood pressure medication without consulting your healthcare professional."
      }
    ],
    question: {
      text: "Which statement about hypertension is correct?",
      options: [
        "Hypertension always causes headaches.",
        "Hypertension may have no noticeable symptoms.",
        "Medication can be stopped when you feel better."
      ],
      correct: 1,
      explanation: "Correct. Many people with hypertension have no symptoms, so regular monitoring is important."
    }
  },

  diabetes: {
    title: "Diabetes Mellitus",
    description: "Understanding blood glucose and diabetes self-care.",
    lessons: [
      {
        title: "What Is Diabetes?",
        text: "Diabetes is a chronic condition in which blood glucose becomes too high because the body does not make enough insulin or cannot use insulin effectively.",
        points: [
          "Insulin helps glucose enter body cells.",
          "Type 1 and type 2 diabetes have different causes.",
          "High blood glucose can damage organs over time.",
          "Diabetes requires appropriate ongoing management."
        ],
        tip: "Diabetes management plans differ from person to person."
      },
      {
        title: "Common Symptoms",
        text: "Some people with diabetes experience symptoms, while others may have few or none.",
        points: [
          "Frequent urination",
          "Increased thirst",
          "Unexplained weight loss",
          "Fatigue",
          "Blurred vision"
        ],
        tip: "Symptoms alone cannot confirm diabetes. A healthcare professional may recommend blood tests."
      },
      {
        title: "Healthy Diabetes Management",
        text: "Diabetes care includes education, healthy habits, monitoring, and prescribed treatment.",
        points: [
          "Follow an individualized meal plan.",
          "Stay physically active as appropriate.",
          "Monitor glucose when recommended.",
          "Take prescribed medicines correctly.",
          "Attend regular healthcare appointments."
        ],
        tip: "Do not replace prescribed diabetes treatment with unverified online remedies."
      }
    ],
    question: {
      text: "Which action supports safe diabetes management?",
      options: [
        "Stop medication when symptoms disappear.",
        "Use an online cure instead of prescribed treatment.",
        "Follow the care plan recommended by your healthcare team."
      ],
      correct: 2,
      explanation: "Correct. Following an individualized care plan helps support safe diabetes management."
    }
  },

  medication: {
    title: "Medication Safety",
    description: "Understanding safe medicine use and medication labels.",
    lessons: [
      {
        title: "Understanding Medication Labels",
        text: "Medication labels provide important instructions for using medicines safely.",
        points: [
          "Check the medicine name.",
          "Read the prescribed dose and instructions.",
          "Check the expiration date.",
          "Review warnings and storage instructions.",
          "Ask a pharmacist about unclear directions."
        ],
        tip: "Never guess a medicine's dose when the label or instructions are unclear."
      },
      {
        title: "Safe Medication Practices",
        text: "Following correct medication practices helps prevent avoidable harm.",
        points: [
          "Take medicines according to the prescription.",
          "Do not share prescription medicines.",
          "Keep an updated medication list.",
          "Ask before combining medicines or supplements.",
          "Store medicines safely away from children."
        ],
        tip: "Ask a healthcare professional what to do if you miss a dose; instructions depend on the medicine."
      },
      {
        title: "Avoiding Medication Misinformation",
        text: "Not all medication advice found online is reliable.",
        points: [
          "Be cautious about miracle-cure advertisements.",
          "Check the source of medication information.",
          "Avoid buying medicines from suspicious sellers.",
          "Do not change treatment based only on social media.",
          "Consult a licensed healthcare professional."
        ],
        tip: "A product being called natural does not automatically make it safe."
      }
    ],
    question: {
      text: "What should you do if medication instructions are unclear?",
      options: [
        "Guess the correct dose.",
        "Ask a pharmacist or healthcare professional.",
        "Follow a random social media comment."
      ],
      correct: 1,
      explanation: "Correct. A pharmacist or healthcare professional can clarify medication instructions."
    }
  },

  literacy: {
    title: "Digital Health Literacy",
    description: "Finding, understanding, and evaluating online health information.",
    lessons: [
      {
        title: "What Is Digital Health Literacy?",
        text: "Digital health literacy involves finding, understanding, evaluating, and using health information from digital sources.",
        points: [
          "Searching for health information online",
          "Understanding digital health resources",
          "Evaluating the credibility of information",
          "Using information to support informed decisions"
        ],
        tip: "Online information can support learning, but it does not replace individualized professional care."
      },
      {
        title: "Identifying Reliable Sources",
        text: "Reliable health resources should provide accurate, transparent, and evidence-based information.",
        points: [
          "Check who wrote or reviewed the information.",
          "Look for credible medical organizations.",
          "Check the publication or review date.",
          "Look for supporting scientific evidence.",
          "Compare important claims with trusted sources."
        ],
        tip: "A professional-looking website is not automatically a trustworthy source."
      },
      {
        title: "Recognizing Misinformation",
        text: "Health misinformation includes false or misleading claims that may influence health decisions.",
        points: [
          "Watch for claims of guaranteed cures.",
          "Be cautious about sensational headlines.",
          "Check whether evidence is provided.",
          "Avoid sharing unverified medical claims.",
          "Protect personal health information online."
        ],
        tip: "Before sharing a health claim, verify it using trustworthy sources."
      }
    ],
    question: {
      text: "Which is a good way to check online health information?",
      options: [
        "Trust a post because it has many likes.",
        "Believe every advertisement with testimonials.",
        "Check the author, evidence, date, and source."
      ],
      correct: 2,
      explanation: "Correct. Checking the author, evidence, date, and source helps evaluate credibility."
    }
  }
};


// 2. SAVED PROGRESS

const storageKey = "meducate-completed";
let completed = [];

try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (Array.isArray(saved)) {
    completed = saved.filter(id => topics[id]);
  }
} catch {
  completed = [];
}


// 3. FIND HTML ELEMENTS

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const courseCards = document.querySelectorAll(".course-card");

const lessonPanel = document.getElementById("lessonPanel");
const lessonTitle = document.getElementById("lessonTitle");
const lessonDescription = document.getElementById("lessonDescription");

const contentTitle = document.getElementById("contentTitle");
const contentBody = document.getElementById("contentBody");

const knowledgeCheck = document.getElementById("knowledgeCheck");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const answerFeedback = document.getElementById("answerFeedback");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

let currentTopic = null;
let currentLesson = 0;
let selectedAnswer = null;
let answerChecked = false;


// 4. SEARCH AND FILTER

function filterTopics() {
  const search = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;
  let visible = 0;

  courseCards.forEach(card => {
    const matchesSearch = card.dataset.title.includes(search);
    const matchesCategory =
      category === "all" || card.dataset.category === category;

    card.hidden = !(matchesSearch && matchesCategory);

    if (!card.hidden) visible++;
  });

  document.getElementById("topicCount").textContent =
    `${visible} topic${visible === 1 ? "" : "s"}`;

  document.getElementById("emptyMessage").hidden = visible > 0;
}

searchInput.addEventListener("input", filterTopics);
categoryFilter.addEventListener("change", filterTopics);


// 5. OPEN A TOPIC

function openTopic(topicId) {
  if (!topics[topicId]) return;

  currentTopic = topicId;
  currentLesson = 0;

  lessonTitle.textContent = topics[topicId].title;
  lessonDescription.textContent = topics[topicId].description;

  document.getElementById("courses").hidden = true;
  lessonPanel.hidden = false;

  showLesson();
  lessonPanel.scrollIntoView({ behavior: "smooth" });
}


// 6. DISPLAY A LESSON

function showLesson() {
  const topic = topics[currentTopic];
  const totalSteps = topic.lessons.length + 1;

  const isQuestion = currentLesson === topic.lessons.length;

  const percentage = Math.round(
    (currentLesson / totalSteps) * 100
  );

  document.getElementById("lessonCounter").textContent =
    `Step ${currentLesson + 1} of ${totalSteps}`;

  document.getElementById("lessonPercentage").textContent =
    percentage + "%";

  document.getElementById("lessonProgressBar").style.width =
    percentage + "%";

  // Build the lesson navigation
  const navigation = document.getElementById("lessonNavigation");
  navigation.innerHTML = "";

  const names = topic.lessons.map(lesson => lesson.title);
  names.push("Knowledge Check");

  names.forEach((name, index) => {
    const button = document.createElement("button");

    button.className = "lesson-nav-button";
    button.textContent = `${index + 1}. ${name}`;

    if (index === currentLesson) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      currentLesson = index;
      showLesson();
    });

    navigation.appendChild(button);
  });

  // Show lesson or knowledge check
  if (!isQuestion) {
    const lesson = topic.lessons[currentLesson];

    document.getElementById("lessonBadge").textContent =
      `LESSON ${String(currentLesson + 1).padStart(2, "0")}`;

    contentTitle.textContent = lesson.title;
    contentBody.innerHTML = "";

    const paragraph = document.createElement("p");
    paragraph.textContent = lesson.text;
    contentBody.appendChild(paragraph);

    const list = document.createElement("ul");

    lesson.points.forEach(point => {
      const item = document.createElement("li");
      item.textContent = point;
      list.appendChild(item);
    });

    contentBody.appendChild(list);

    const tip = document.createElement("div");
    tip.className = "health-tip";

    const tipTitle = document.createElement("strong");
    tipTitle.textContent = "Health Tip";

    const tipText = document.createElement("p");
    tipText.textContent = lesson.tip;

    tip.appendChild(tipTitle);
    tip.appendChild(tipText);
    contentBody.appendChild(tip);

    knowledgeCheck.hidden = true;

  } else {
    document.getElementById("lessonBadge").textContent =
      "KNOWLEDGE CHECK";

    contentTitle.textContent = "Test Your Knowledge";
    contentBody.innerHTML = "";

    knowledgeCheck.hidden = false;
    showQuestion();
  }

  previousButton.disabled = currentLesson === 0;

  nextButton.textContent = isQuestion
    ? "Finish Module ✓"
    : "Next Lesson →";

  nextButton.disabled = isQuestion && !answerChecked;
}


// 7. DISPLAY THE KNOWLEDGE CHECK

function showQuestion() {
  const question = topics[currentTopic].question;

  selectedAnswer = null;
  answerChecked = false;

  questionText.textContent = question.text;
  answerOptions.innerHTML = "";
  answerFeedback.textContent = "";
  answerFeedback.className = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.className = "answer-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      if (answerChecked) return;

      selectedAnswer = index;

      document.querySelectorAll(".answer-option").forEach(btn => {
        btn.classList.remove("chosen");
      });

      button.classList.add("chosen");
    });

    answerOptions.appendChild(button);
  });
}


// 8. CHECK THE ANSWER

document.getElementById("checkAnswerButton")
  .addEventListener("click", () => {

    if (selectedAnswer === null) {
      answerFeedback.textContent = "Please select an answer first.";
      return;
    }

    const question = topics[currentTopic].question;
    const correct = selectedAnswer === question.correct;

    answerFeedback.textContent = correct
      ? question.explanation
      : "Not quite. " + question.explanation;

    answerFeedback.className = correct
      ? "correct"
      : "incorrect";

    answerChecked = true;
    nextButton.disabled = false;
  });


// 9. PREVIOUS AND NEXT BUTTONS

previousButton.addEventListener("click", () => {
  if (currentLesson > 0) {
    currentLesson--;
    showLesson();
  }
});

nextButton.addEventListener("click", () => {
  const totalLessons = topics[currentTopic].lessons.length;

  if (currentLesson < totalLessons) {
    currentLesson++;
    showLesson();
  } else if (answerChecked) {
    completeModule();
  }
});


// 10. COMPLETE THE MODULE

function completeModule() {
  if (!completed.includes(currentTopic)) {
    completed.push(currentTopic);

    localStorage.setItem(
      storageKey,
      JSON.stringify(completed)
    );
  }

  updateProgress();

  document.getElementById("lessonProgressBar").style.width = "100%";
  document.getElementById("lessonPercentage").textContent = "100%";

  alert("Congratulations! You completed this Meducate module.");

  returnToDashboard();
}


// 11. UPDATE DASHBOARD PROGRESS

function updateProgress() {
  const total = Object.keys(topics).length;
  const count = completed.length;
  const percentage = Math.round((count / total) * 100);

  document.getElementById("totalTopics").textContent = total;
  document.getElementById("completedTopics").textContent = count;
  document.getElementById("progressPercent").textContent =
    percentage + "%";

  Object.keys(topics).forEach(id => {
    const done = completed.includes(id);

    document.getElementById(`bar-${id}`).style.width =
      done ? "100%" : "0%";

    document.getElementById(`status-${id}`).textContent =
      done ? "Completed" : "Not Started";

    const button = document.querySelector(
      `.course-button[data-topic="${id}"]`
    );

    button.textContent = done
      ? "Review Topic →"
      : "Start Learning →";
  });
}


// 12. RETURN TO DASHBOARD

function returnToDashboard() {
  restoreDashboard();

  document.getElementById("courses").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("backButton")
  .addEventListener("click", returnToDashboard);


// 13. CONNECT START LEARNING BUTTONS

document.querySelectorAll(".course-button").forEach(button => {
  button.addEventListener("click", () => {
    openTopic(button.dataset.topic);
  });
});


// 14. MAIN SIDEBAR NAVIGATION

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const section = link.dataset.section;

    if (section === "dashboard") {
      restoreDashboard();

      window.scrollTo({ top: 0, behavior: "smooth" });

    } else if (section === "topics") {
      restoreDashboard();
      document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
      });

    } else if (section === "progress") {
      restoreDashboard();
      document.querySelector(".stats-grid").scrollIntoView({
        behavior: "smooth"
      });

    } else if (section === "challenges") {
      openChallengeHome();
    }

    document.querySelectorAll(".nav-link").forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});


// 15. INITIALIZE THE DASHBOARD

updateProgress();


// =====================================
// PART 03 - MYTH VS FACT CHALLENGE
// =====================================

// 1. QUESTION BANK
const challengeQuestions = {

  hypertension: [
    {
      statement: "People with hypertension always have symptoms.",
      answer: "myth",
      explanation: "Hypertension often has no noticeable symptoms. Regular blood pressure monitoring is important."
    },
    {
      statement: "Too much sodium can contribute to high blood pressure.",
      answer: "fact",
      explanation: "Excessive sodium intake can increase blood pressure. Reducing sodium can support blood pressure control."
    },
    {
      statement: "Only older adults can develop hypertension.",
      answer: "myth",
      explanation: "Hypertension can occur in younger adults and even children, although risk generally increases with age."
    },
    {
      statement: "Regular physical activity can help manage blood pressure.",
      answer: "fact",
      explanation: "Appropriate regular physical activity can help reduce blood pressure and support cardiovascular health."
    },
    {
      statement: "You should stop prescribed blood pressure medicine when you feel better.",
      answer: "myth",
      explanation: "Feeling better does not necessarily mean blood pressure is controlled without treatment. Consult your healthcare professional before changing medication."
    }
  ],

  diabetes: [
    {
      statement: "Diabetes affects how the body regulates blood glucose.",
      answer: "fact",
      explanation: "Diabetes involves problems with insulin production, insulin action, or both, resulting in elevated blood glucose."
    },
    {
      statement: "Everyone with diabetes must avoid all carbohydrates.",
      answer: "myth",
      explanation: "Carbohydrates can be part of an individualized diabetes meal plan. Portion sizes and food choices matter."
    },
    {
      statement: "Regular physical activity can support diabetes management.",
      answer: "fact",
      explanation: "Physical activity can help improve insulin sensitivity and support overall health."
    },
    {
      statement: "Diabetes always causes obvious symptoms.",
      answer: "myth",
      explanation: "Some people, especially those with type 2 diabetes, may have few or no noticeable symptoms."
    },
    {
      statement: "Diabetes can affect the eyes, kidneys, nerves, and heart.",
      answer: "fact",
      explanation: "Persistently elevated blood glucose can contribute to complications involving several organs."
    }
  ],

  medication: [
    {
      statement: "Prescription medicines can be safely shared with family members.",
      answer: "myth",
      explanation: "Prescription medicines are selected for individual patients. Sharing them can cause harm."
    },
    {
      statement: "Reading medication labels helps prevent medication errors.",
      answer: "fact",
      explanation: "Labels provide important information about dosage, instructions, warnings, and storage."
    },
    {
      statement: "Natural or herbal products are always safe.",
      answer: "myth",
      explanation: "Natural products can cause side effects and interact with medicines."
    },
    {
      statement: "A pharmacist can help explain unclear medication instructions.",
      answer: "fact",
      explanation: "Pharmacists can clarify how medicines should be used and explain relevant precautions."
    },
    {
      statement: "Taking a larger dose than prescribed makes medicine work better.",
      answer: "myth",
      explanation: "Taking more than the prescribed dose can increase the risk of toxicity and other serious adverse effects."
    }
  ],

  literacy: [
    {
      statement: "A health post with thousands of likes is automatically reliable.",
      answer: "myth",
      explanation: "Popularity does not prove accuracy. Medical claims should be checked against trustworthy sources."
    },
    {
      statement: "Checking the author and evidence helps evaluate health information.",
      answer: "fact",
      explanation: "Identifying qualified authors and supporting evidence is an important part of evaluating online health information."
    },
    {
      statement: "Every website ending in .com contains false health information.",
      answer: "myth",
      explanation: "Website domains alone cannot determine reliability. Evaluate authorship, evidence, transparency, and credibility."
    },
    {
      statement: "Online health misinformation can influence unsafe decisions.",
      answer: "fact",
      explanation: "False or misleading health claims may encourage people to delay care or use unsafe treatments."
    },
    {
      statement: "You should verify medical claims before sharing them online.",
      answer: "fact",
      explanation: "Checking credible sources before sharing information helps reduce the spread of misinformation."
    }
  ]

};


// 2. GAME VARIABLES
let challengeTopic = null;
let questionIndex = 0;
let challengeScore = 0;
let questionAnswered = false;


// 3. FIND GAME ELEMENTS
const mythFactSection =
  document.getElementById("mythFactSection");

const challengeHome =
  document.getElementById("challengeHome");

const challengeGame =
  document.getElementById("challengeGame");

const challengeResults =
  document.getElementById("challengeResults");

const mythButton =
  document.getElementById("mythButton");

const factButton =
  document.getElementById("factButton");

const nextQuestionButton =
  document.getElementById("nextQuestionButton");


// 4. SHOW CHALLENGE HOME
function openChallengeHome() {

  // Hide dashboard learning content
  document.getElementById("courses").hidden = true;
  document.querySelector(".stats-grid").hidden = true;
  document.querySelector(".welcome-banner").hidden = true;
  lessonPanel.hidden = true;

  // Show challenge selection
  mythFactSection.hidden = false;
  challengeHome.hidden = false;
  challengeGame.hidden = true;
  challengeResults.hidden = true;

  mythFactSection.scrollIntoView({
    behavior: "smooth"
  });
}


// 5. RESTORE THE DASHBOARD
function restoreDashboard() {

  mythFactSection.hidden = true;

  document.getElementById("courses").hidden = false;
  document.querySelector(".stats-grid").hidden = false;
  document.querySelector(".welcome-banner").hidden = false;

  lessonPanel.hidden = true;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// 6. START A CHALLENGE
function startChallenge(topicId) {

  if (!challengeQuestions[topicId]) return;

  challengeTopic = topicId;
  questionIndex = 0;
  challengeScore = 0;
  questionAnswered = false;

  challengeHome.hidden = true;
  challengeResults.hidden = true;
  challengeGame.hidden = false;

  document.getElementById("gameTopicName").textContent =
    topics[topicId].title;

  showChallengeQuestion();
}


// 7. DISPLAY A QUESTION
function showChallengeQuestion() {

  const questions = challengeQuestions[challengeTopic];
  const question = questions[questionIndex];

  questionAnswered = false;

  document.getElementById("gameStatement").textContent =
    question.statement;

  document.getElementById("gameScore").textContent =
    `Score: ${challengeScore}`;

  document.getElementById("gameQuestionCounter").textContent =
    `Question ${questionIndex + 1} of ${questions.length}`;

  const percentage = Math.round(
    ((questionIndex + 1) / questions.length) * 100
  );

  document.getElementById("gameProgressPercent").textContent =
    `${percentage}%`;

  document.getElementById("gameProgressFill").style.width =
    `${percentage}%`;

  // Reset buttons
  mythButton.disabled = false;
  factButton.disabled = false;

  mythButton.classList.remove("selected");
  factButton.classList.remove("selected");

  document.getElementById("gameFeedback").hidden = true;
  nextQuestionButton.hidden = true;

  nextQuestionButton.textContent =
    questionIndex === questions.length - 1
      ? "View Results →"
      : "Next Question →";
}


// 8. CHECK THE PLAYER'S ANSWER
function submitChallengeAnswer(selectedAnswer) {

  // Prevent answering twice
  if (questionAnswered) return;

  questionAnswered = true;

  const question =
    challengeQuestions[challengeTopic][questionIndex];

  const isCorrect = selectedAnswer === question.answer;

  if (isCorrect) {
    challengeScore += 10;
  }

  // Highlight selected button
  const selectedButton =
    selectedAnswer === "myth" ? mythButton : factButton;

  selectedButton.classList.add("selected");

  mythButton.disabled = true;
  factButton.disabled = true;

  // Display feedback
  const feedback = document.getElementById("gameFeedback");

  feedback.hidden = false;
  feedback.className = isCorrect
    ? "game-feedback correct"
    : "game-feedback incorrect";

  document.getElementById("feedbackTitle").textContent =
    isCorrect
      ? "Correct! +10 Points"
      : `Not quite! This statement is a ${question.answer.toUpperCase()}.`;

  document.getElementById("feedbackExplanation").textContent =
    question.explanation;

  document.getElementById("gameScore").textContent =
    `Score: ${challengeScore}`;

  nextQuestionButton.hidden = false;
}


// 9. NEXT QUESTION
function nextChallengeQuestion() {

  if (!questionAnswered) return;

  const total = challengeQuestions[challengeTopic].length;

  if (questionIndex < total - 1) {
    questionIndex++;
    showChallengeQuestion();
  } else {
    showChallengeResults();
  }
}


// 10. SHOW FINAL RESULTS
function showChallengeResults() {

  challengeGame.hidden = true;
  challengeResults.hidden = false;

  const total = challengeQuestions[challengeTopic].length;
  const maximumScore = total * 10;

  document.getElementById("finalScore").textContent =
    `${challengeScore} / ${maximumScore}`;

  const percentage = (challengeScore / maximumScore) * 100;

  let message = "";

  if (percentage === 100) {
    message = "Excellent! You are a Health Fact Detective!";
  } else if (percentage >= 60) {
    message = "Great effort! Keep improving your health knowledge.";
  } else {
    message = "Keep learning! Review the lessons and try again.";
  }

  document.getElementById("resultMessage").textContent =
    message;

  challengeResults.scrollIntoView({
    behavior: "smooth"
  });
}


// 11. CONNECT THE GAME BUTTONS

document.querySelectorAll(".challenge-topic-card")
  .forEach(button => {

    button.addEventListener("click", () => {
      startChallenge(button.dataset.challenge);
    });

  });

mythButton.addEventListener("click", () => {
  submitChallengeAnswer("myth");
});

factButton.addEventListener("click", () => {
  submitChallengeAnswer("fact");
});

nextQuestionButton.addEventListener("click", () => {
  nextChallengeQuestion();
});

document.getElementById("playAgainButton")
  .addEventListener("click", () => {
    startChallenge(challengeTopic);
  });

document.getElementById("chooseAnotherButton")
  .addEventListener("click", openChallengeHome);

document.getElementById("backFromChallenge")
  .addEventListener("click", restoreDashboard);
