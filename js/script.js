
// MEDUCATE - DASHBOARD INTERACTIONS

// 1. Our health topic information
const topics = {
  hypertension: {
    title: "Hypertension",
    description: "Learn the basics of high blood pressure.",
    points: [
      "What hypertension means",
      "Common risk factors",
      "Why blood pressure monitoring matters",
      "Healthy habits that support blood pressure control"
    ]
  },

  diabetes: {
    title: "Diabetes Mellitus",
    description: "Understand diabetes and everyday self-care.",
    points: [
      "What diabetes mellitus means",
      "The importance of blood glucose monitoring",
      "Healthy eating and physical activity",
      "Recognizing signs that need medical attention"
    ]
  },

  medication: {
    title: "Medication Safety",
    description: "Learn how to use medicines more safely.",
    points: [
      "Understanding medication labels",
      "Following prescribed medication instructions",
      "Avoiding unsafe self-medication",
      "When to ask a pharmacist or healthcare professional"
    ]
  },

  literacy: {
    title: "Digital Health Literacy",
    description: "Learn how to find and evaluate health information.",
    points: [
      "Finding trustworthy health websites",
      "Recognizing misleading health claims",
      "Checking the author, date, and evidence",
      "Protecting personal health information online"
    ]
  }
};

// 2. Save completed topics in this browser
const storageKey = "healthwise-completed";
let completed = [];

try {
  completed = JSON.parse(localStorage.getItem(storageKey)) || [];
  if (!Array.isArray(completed)) completed = [];
} catch {
  completed = [];
}

// 3. Find important HTML elements
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const courseCards = document.querySelectorAll(".course-card");
const courseGrid = document.getElementById("courseGrid");
const lessonPanel = document.getElementById("lessonPanel");
const lessonTitle = document.getElementById("lessonTitle");
const lessonDescription = document.getElementById("lessonDescription");
const lessonPoints = document.getElementById("lessonPoints");

let currentTopic = null;

// 4. Search and filter health topics
function filterTopics() {
  const search = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;
  let visibleCount = 0;

  courseCards.forEach(card => {
    const title = card.dataset.title;
    const cardCategory = card.dataset.category;

    const matchesSearch = title.includes(search);
    const matchesCategory =
      category === "all" || category === cardCategory;

    const show = matchesSearch && matchesCategory;

    card.hidden = !show;

    if (show) visibleCount++;
  });

  document.getElementById("topicCount").textContent =
    `${visibleCount} topic${visibleCount === 1 ? "" : "s"}`;

  document.getElementById("emptyMessage").hidden =
    visibleCount !== 0;
}

searchInput.addEventListener("input", filterTopics);
categoryFilter.addEventListener("change", filterTopics);

// 5. Open a learning topic
function openTopic(topicId) {
  const topic = topics[topicId];
  if (!topic) return;

  currentTopic = topicId;

  lessonTitle.textContent = topic.title;
  lessonDescription.textContent = topic.description;

  // Clear the previous topic's learning points
  lessonPoints.innerHTML = "";

  // Add the new topic's learning points
  topic.points.forEach(point => {
    const item = document.createElement("li");
    item.textContent = point;
    lessonPoints.appendChild(item);
  });

  document.getElementById("completeButton").textContent =
    completed.includes(topicId)
      ? "Completed ✓"
      : "Mark Topic as Completed ✓";

  courseGrid.parentElement.hidden = true;
  lessonPanel.hidden = false;

  lessonPanel.scrollIntoView({ behavior: "smooth" });
}

// 6. Connect the Start Learning buttons
document.querySelectorAll(".course-button").forEach(button => {
  button.addEventListener("click", () => {
    openTopic(button.dataset.topic);
  });
});

// 7. Return to the dashboard
document.getElementById("backButton").addEventListener("click", () => {
  lessonPanel.hidden = true;
  courseGrid.parentElement.hidden = false;

  document.getElementById("courses").scrollIntoView({
    behavior: "smooth"
  });
});

// 8. Complete a topic
document.getElementById("completeButton").addEventListener("click", () => {
  if (!currentTopic) return;

  if (!completed.includes(currentTopic)) {
    completed.push(currentTopic);
    localStorage.setItem(storageKey, JSON.stringify(completed));
  }

  updateProgress();

  document.getElementById("completeButton").textContent =
    "Completed ✓";
});

// 9. Update dashboard progress
function updateProgress() {
  const total = Object.keys(topics).length;
  const completedCount = completed.filter(id => topics[id]).length;

  const percentage = Math.round(
    (completedCount / total) * 100
  );

  document.getElementById("totalTopics").textContent = total;
  document.getElementById("completedTopics").textContent =
    completedCount;
  document.getElementById("progressPercent").textContent =
    percentage + "%";

  Object.keys(topics).forEach(id => {
    const isCompleted = completed.includes(id);

    document.getElementById(`bar-${id}`).style.width =
      isCompleted ? "100%" : "0%";

    document.getElementById(`status-${id}`).textContent =
      isCompleted ? "Completed" : "Not Started";

    const button = document.querySelector(
      `.course-button[data-topic="${id}"]`
    );

    button.textContent = isCompleted
      ? "Review Topic →"
      : "Start Learning →";
  });
}

// 10. Sidebar navigation
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const section = link.dataset.section;

    if (section === "dashboard") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "topics") {
      document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
      });
    } else if (section === "progress") {
      document.querySelector(".stats-grid").scrollIntoView({
        behavior: "smooth"
      });
    } else if (section === "challenges") {
      alert("Myth vs. Fact Challenge is coming in Part 2!");
    }

    document.querySelectorAll(".nav-link").forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

// 11. Show saved progress when the page opens
updateProgress();
