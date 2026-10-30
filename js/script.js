
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
      
    } else if (section === "simulator") {
      openSimulator();
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
  document.getElementById("simulatorSection").hidden = true;
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
  document.getElementById("simulatorSection").hidden = true;
  lessonPanel.hidden = true;

  document.getElementById("courses").hidden = false;
  document.querySelector(".stats-grid").hidden = false;
  document.querySelector(".welcome-banner").hidden = false;

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

const scorePercentage = Math.round(
  (challengeScore / maximumScore) * 100
);

document.getElementById("finalScore").textContent =
  `${challengeScore} / ${maximumScore} (${scorePercentage}%)`;

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

// ======================================
// PART 04 - HEALTH DECISION SIMULATOR
// ======================================

// 1. OUR FICTIONAL PATIENT SCENARIOS

const simulatorCases = {

  hypertension: {
    title: "Hypertension",
    steps: [
      {
        title: "An Unexpected Blood Pressure Reading",
        situation:
          "Maria, age 52, checks her blood pressure at home. " +
          "Her reading is 150/95 mmHg. She feels well and " +
          "has no symptoms. This is her first elevated reading.",
        choices: [
          {
            text: "Ignore the reading because she feels fine.",
            safe: false,
            feedback:
              "High blood pressure often has no symptoms. " +
              "An elevated reading should not be ignored."
          },
          {
            text: "Rest quietly, check her measurement technique, and repeat the reading.",
            safe: true,
            feedback:
              "Correct. Resting quietly and repeating the " +
              "measurement using proper technique is a sensible " +
              "first step. A single reading does not establish a diagnosis."
          },
          {
            text: "Take an extra blood pressure tablet immediately.",
            safe: false,
            feedback:
              "Taking extra medication without instructions " +
              "can be dangerous."
          }
        ]
      },
      {
        title: "The Reading Remains Elevated",
        situation:
          "Maria repeats the measurement correctly. Her " +
          "blood pressure remains around 150/95 mmHg. " +
          "She still has no symptoms.",
        choices: [
          {
            text: "Arrange a healthcare consultation and keep a record of the readings.",
            safe: true,
            feedback:
              "Correct. Repeated elevated readings warrant " +
              "medical evaluation. Recording readings can help " +
              "the healthcare professional assess her blood pressure."
          },
          {
            text: "Stop checking because she feels normal.",
            safe: false,
            feedback:
              "Hypertension may remain unnoticed without " +
              "regular monitoring."
          },
          {
            text: "Borrow a friend's blood pressure medicine.",
            safe: false,
            feedback:
              "Medicines should never be borrowed or shared."
          }
        ]
      },
      {
        title: "Developing a Healthy Routine",
        situation:
          "After a consultation, Maria receives an individualized " +
          "blood pressure management plan. She wants to " +
          "support her treatment at home.",
        choices: [
          {
            text: "Stop treatment whenever her readings improve.",
            safe: false,
            feedback:
              "Treatment should not be stopped without " +
              "professional advice."
          },
          {
            text: "Use an advertised miracle supplement instead.",
            safe: false,
            feedback:
              "Unverified products should not replace " +
              "recommended treatment."
          },
          {
            text: "Follow her care plan, monitor blood pressure, and maintain healthy habits.",
            safe: true,
            feedback:
              "Correct. Following the agreed care plan and " +
              "healthy lifestyle practices supports blood pressure management."
          }
        ]
      }
    ]
  },

  diabetes: {
    title: "Diabetes Mellitus",
    steps: [
      {
        title: "Recognizing Possible Low Blood Sugar",
        situation:
          "Daniel, age 45, has diabetes and uses insulin. " +
          "He is awake, able to swallow, and suddenly feels " +
          "shaky, sweaty, and hungry. His glucose meter is nearby.",
        choices: [
          {
            text: "Ignore the symptoms and continue working.",
            safe: false,
            feedback:
              "These symptoms may indicate hypoglycemia " +
              "and should be assessed promptly."
          },
          {
            text: "Check his blood glucose immediately.",
            safe: true,
            feedback:
              "Correct. When available, checking glucose " +
              "helps confirm suspected hypoglycemia. " +
              "Treatment should not be delayed if testing is unavailable."
          },
          {
            text: "Take extra insulin.",
            safe: false,
            feedback:
              "Extra insulin could make low blood sugar worse."
          }
        ]
      },
      {
        title: "A Low Glucose Reading",
        situation:
          "Daniel's glucose reading is 62 mg/dL. " +
          "He is still awake and can safely swallow.",
        choices: [
          {
            text: "Consume 15 grams of fast-acting carbohydrate and recheck glucose after 15 minutes.",
            safe: true,
            feedback:
              "Correct. For many conscious adults, the 15-15 " +
              "approach is used for glucose below 70 mg/dL. " +
              "Repeat treatment if still low and follow the " +
              "individualized diabetes plan."
          },
          {
            text: "Take another dose of insulin.",
            safe: false,
            feedback:
              "Insulin lowers glucose and may worsen hypoglycemia."
          },
          {
            text: "Go to sleep without treating the low glucose.",
            safe: false,
            feedback:
              "Untreated hypoglycemia can become dangerous."
          }
        ]
      },
      {
        title: "Preventing Another Episode",
        situation:
          "Daniel's glucose improves and he feels better. " +
          "He wants to reduce the chance of another episode.",
        choices: [
          {
            text: "Stop all diabetes medicines permanently.",
            safe: false,
            feedback:
              "Medication changes require professional guidance."
          },
          {
            text: "Review the episode, meals, activity, and medicines with his diabetes care team.",
            safe: true,
            feedback:
              "Correct. Reviewing possible causes with the " +
              "healthcare team can help prevent future episodes."
          },
          {
            text: "Ignore future symptoms if they feel similar.",
            safe: false,
            feedback:
              "Repeated symptoms should be assessed and treated promptly."
          }
        ]
      }
    ]
  },

  medication: {
    title: "Medication Safety",
    steps: [
      {
        title: "An Unclear Prescription Label",
        situation:
          "Anna receives a new prescription medicine. " +
          "She cannot clearly understand the dosing instructions.",
        choices: [
          {
            text: "Guess the dose based on previous medicines.",
            safe: false,
            feedback:
              "Guessing medication doses can cause errors."
          },
          {
            text: "Ask the pharmacist to explain the instructions.",
            safe: true,
            feedback:
              "Correct. Pharmacists can clarify medication " +
              "instructions before the medicine is taken."
          },
          {
            text: "Ask a friend to choose the dose.",
            safe: false,
            feedback:
              "A friend's advice is not a substitute for " +
              "professional medication instructions."
          }
        ]
      },
      {
        title: "A Possible Medicine Interaction",
        situation:
          "Anna also wants to take an herbal supplement " +
          "that she discovered online.",
        choices: [
          {
            text: "Take it because natural products are always safe.",
            safe: false,
            feedback:
              "Natural products can cause adverse effects " +
              "and medicine interactions."
          },
          {
            text: "Stop her prescribed medicine and use the supplement.",
            safe: false,
            feedback:
              "Unverified supplements should not replace " +
              "prescribed treatment."
          },
          {
            text: "Ask her pharmacist or prescriber about possible interactions.",
            safe: true,
            feedback:
              "Correct. A healthcare professional can " +
              "review possible interactions."
          }
        ]
      },
      {
        title: "Remembering Medication Instructions",
        situation:
          "Anna wants to avoid forgetting her medicine instructions.",
        choices: [
          {
            text: "Create a medication schedule based on her prescription.",
            safe: true,
            feedback:
              "Correct. A medication schedule can help " +
              "support adherence when it follows the prescription."
          },
          {
            text: "Take several doses together whenever she remembers.",
            safe: false,
            feedback:
              "Taking multiple doses together can be harmful. " +
              "Missed-dose instructions depend on the medicine."
          },
          {
            text: "Share her medicine with relatives who have similar symptoms.",
            safe: false,
            feedback:
              "Prescription medicines should not be shared."
          }
        ]
      }
    ]
  },

  literacy: {
    title: "Digital Health Literacy",
    steps: [
      {
        title: "A Viral Medical Claim",
        situation:
          "Paolo sees a social media advertisement claiming " +
          "that a herbal drink can completely cure diabetes.",
        choices: [
          {
            text: "Buy the product immediately.",
            safe: false,
            feedback:
              "Unverified medical claims can be misleading " +
              "and potentially harmful."
          },
          {
            text: "Verify the claim using reliable medical sources.",
            safe: true,
            feedback:
              "Correct. Checking trustworthy sources " +
              "helps identify misleading health claims."
          },
          {
            text: "Share the advertisement without checking it.",
            safe: false,
            feedback:
              "Sharing unverified claims can spread misinformation."
          }
        ]
      },
      {
        title: "Evaluating the Website",
        situation:
          "The advertisement links to a website with " +
          "testimonials but no clear author or scientific references.",
        choices: [
          {
            text: "Trust the website because it looks professional.",
            safe: false,
            feedback:
              "Professional design does not guarantee accuracy."
          },
          {
            text: "Believe the testimonials as scientific proof.",
            safe: false,
            feedback:
              "Testimonials alone do not establish medical effectiveness."
          },
          {
            text: "Check authorship, supporting evidence, and source credibility.",
            safe: true,
            feedback:
              "Correct. These checks help evaluate " +
              "online health information."
          }
        ]
      },
      {
        title: "Making an Informed Decision",
        situation:
          "Paolo discovers that the product's claims " +
          "are not supported by reliable evidence.",
        choices: [
          {
            text: "Avoid sharing the claim and consult a healthcare professional about treatment.",
            safe: true,
            feedback:
              "Correct. Verified information and professional " +
              "guidance support safer decisions."
          },
          {
            text: "Share the claim anyway because it is popular.",
            safe: false,
            feedback:
              "Popularity does not establish medical accuracy."
          },
          {
            text: "Replace prescribed treatment with the product.",
            safe: false,
            feedback:
              "Unverified products should not replace " +
              "evidence-based treatment."
          }
        ]
      }
    ]
  }
};


// 2. SIMULATOR GAME VARIABLES

let simCurrentTopic = null;
let simCurrentStep = 0;
let simPoints = 0;
let simAnswered = false;

// 3. FIND THE HTML ELEMENTS

const simSection = document.getElementById("simulatorSection");
const simHome = document.getElementById("simHome");
const simGame = document.getElementById("simGame");
const simResults = document.getElementById("simResults");
const simChoices = document.getElementById("simChoices");
const simNext = document.getElementById("simNext");

// 4. SHOW THE SIMULATOR HOME

function openSimulator() {
  // Hide the other features
  document.getElementById("courses").hidden = true;
  document.querySelector(".stats-grid").hidden = true;
  document.querySelector(".welcome-banner").hidden = true;
  lessonPanel.hidden = true;
  mythFactSection.hidden = true;

  // Show the simulator
  simSection.hidden = false;
  simHome.hidden = false;
  simGame.hidden = true;
  simResults.hidden = true;

  simSection.scrollIntoView({ behavior: "smooth" });
}

// 5. START A SCENARIO

function startSimulation(topicId) {
  if (!simulatorCases[topicId]) return;

  simCurrentTopic = topicId;
  simCurrentStep = 0;
  simPoints = 0;

  simHome.hidden = true;
  simGame.hidden = false;
  simResults.hidden = true;

  document.getElementById("simTopicName").textContent =
    simulatorCases[topicId].title;

  showSimulationStep();
}

// 6. DISPLAY THE CURRENT DECISION

function showSimulationStep() {
  const scenario = simulatorCases[simCurrentTopic];
  const step = scenario.steps[simCurrentStep];
  const total = scenario.steps.length;

  simAnswered = false;

  document.getElementById("simCaseTitle").textContent =
    step.title;

  document.getElementById("simSituation").textContent =
    step.situation;

  document.getElementById("simStepLabel").textContent =
    `Decision ${simCurrentStep + 1} of ${total}`;

  document.getElementById("simScore").textContent =
    `${simPoints} / ${total * 10} points`;

  const percent = Math.round(
    (simCurrentStep / total) * 100
  );

  document.getElementById("simPercent").textContent =
    `${percent}%`;

  document.getElementById("simProgressFill").style.width =
    `${percent}%`;

  // Remove the previous answer buttons
  simChoices.innerHTML = "";

  // Create the new answer buttons
  step.choices.forEach((choice, index) => {
    const button = document.createElement("button");

    button.className = "sim-choice";
    button.textContent =
      `${String.fromCharCode(65 + index)}. ${choice.text}`;

    button.addEventListener("click", () => {
      selectSimulationChoice(index);
    });

    simChoices.appendChild(button);
  });

  document.getElementById("simFeedback").hidden = true;
  simNext.hidden = true;

  simNext.textContent =
    simCurrentStep === total - 1
      ? "View Results →"
      : "Continue →";
}

// 7. CHECK THE SELECTED DECISION

function selectSimulationChoice(choiceIndex) {
  if (simAnswered) return;

  simAnswered = true;

  const step =
    simulatorCases[simCurrentTopic].steps[simCurrentStep];

  const choice = step.choices[choiceIndex];

  if (choice.safe) {
    simPoints += 10;
  }

  // Highlight the selected answer
  const buttons = simChoices.querySelectorAll(".sim-choice");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === choiceIndex) {
      button.classList.add("selected");
    }
  });

  // Display feedback
  const feedback = document.getElementById("simFeedback");

  feedback.hidden = false;
  feedback.className = choice.safe
    ? "sim-feedback safe"
    : "sim-feedback unsafe";

  document.getElementById("simFeedbackTitle").textContent =
    choice.safe
      ? "Good Decision! +10 Points"
      : "Let's Review This Decision";

  document.getElementById("simFeedbackText").textContent =
    choice.feedback;

  document.getElementById("simScore").textContent =
    `${simPoints} / 30 points`;

  simNext.hidden = false;
}

// 8. CONTINUE TO THE NEXT DECISION

function nextSimulationStep() {
  if (!simAnswered) return;

  const total =
    simulatorCases[simCurrentTopic].steps.length;

  if (simCurrentStep < total - 1) {
    simCurrentStep++;
    showSimulationStep();
  } else {
    showSimulationResults();
  }
}

// 9. DISPLAY THE RESULTS

function showSimulationResults() {
  simGame.hidden = true;
  simResults.hidden = false;

  const total =
    simulatorCases[simCurrentTopic].steps.length;

  const maximum = total * 10;
  const percentage = Math.round(
    (simPoints / maximum) * 100
  );

  document.getElementById("simFinalScore").textContent =
    `${simPoints} / ${maximum} (${percentage}%)`;

  let message;

  if (percentage === 100) {
    message =
      "Excellent! You selected the preferred response in every situation.";
  } else if (percentage >= 60) {
    message =
      "Good effort! Review the feedback to strengthen your decisions.";
  } else {
    message =
      "Keep learning! Review the health lessons and try again.";
  }

  document.getElementById("simResultMessage").textContent =
    message;

  document.getElementById("simProgressFill").style.width =
    "100%";

  simResults.scrollIntoView({ behavior: "smooth" });
}

// 10. CONNECT THE BUTTONS

document.querySelectorAll(".sim-topic-card").forEach(button => {
  button.addEventListener("click", () => {
    startSimulation(button.dataset.scenario);
  });
});

simNext.addEventListener("click", nextSimulationStep);

document.getElementById("simReplay")
  .addEventListener("click", () => {
    startSimulation(simCurrentTopic);
  });

document.getElementById("simChoose")
  .addEventListener("click", openSimulator);

document.getElementById("simBack")
  .addEventListener("click", () => {
    restoreDashboard();
  });
