<template>
  <section class="welcome-page">
    <div class="content-wrapper">
      <h1 class="main-title">Welcome to Fiscal Insights</h1>
      <h2 class="subtitle">Understand Where Your Canadian Federal Tax Dollars Go</h2>

      <p class="intro-text">
        At <strong>Fiscal Insights</strong>, our mission is simple: to help you easily understand where your Canadian federal tax dollars go. 
        Canadian federal taxes are a fundamental part of our society, but many people don't have a clear picture of how their contributions are used at the national level. 
        That's why we created this <strong>free and transparent Canadian federal tax calculator</strong>—to provide insights into how your hard-earned money is allocated by the Canadian government.
      </p>


      <div class="features-container hover-effect">
        <h3 class="section-title">Core Features</h3>
        <ul class="features-list">
          <li class="feature-item">
            <span class="icon">
              <font-awesome-icon icon="calculator" />
            </span>
            <div class="feature-content">
              <strong>Income Input</strong>
              <p>Enter your annual income to receive an accurate tax estimate</p>
            </div>
          </li>
          <li class="feature-item">
            <span class="icon">
              <font-awesome-icon icon="chart-pie" />
            </span>
            <div class="feature-content">
              <strong>Tax Estimation</strong>
              <p>Get real-time calculations of your estimated taxes</p>
            </div>
          </li>
          <li class="feature-item">
            <span class="icon">
              <font-awesome-icon icon="chart-line" />
            </span>
            <div class="feature-content">
              <strong>Government Spending Breakdown</strong>
              <p>See how your tax dollars are allocated</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="features-container hover-effect">
        <h3 class="section-title">Why Use Fiscal Insights?</h3>
        <ul class="features-list">
          <li class="feature-item">
            <span class="icon">
              <font-awesome-icon icon="bullseye" />
            </span>
            <div class="feature-content">
              <strong>Instant Clarity</strong>
              <p>Gain clarity on your taxes in seconds</p>
            </div>
          </li>
          <li class="feature-item">
            <span class="icon">
              <font-awesome-icon icon="lightbulb" />
            </span>
            <div class="feature-content">
              <strong>Smart Decisions</strong>
              <p>Make informed financial decisions with real data</p>
            </div>
          </li>
          <li class="feature-item">
            <span class="icon">
              <font-awesome-icon icon="star" />
            </span>
            <div class="feature-content">
              <strong>Social Impact</strong>
              <p>Understand how your contributions impact society</p>
            </div>
          </li>
        </ul>
      </div>

      <p class="cta-text">
        <font-awesome-icon icon="rocket" /> Try it now and see where your tax dollars go!
      </p>

      <router-link to="/" class="cta-button">Use the Tax Calculator</router-link>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this static welcome page
</script>

<style scoped>
/* Importing Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.welcome-page {
  min-height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.content-wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  color: #34495e;
  text-align: center;
}

/* Title Styles */
.main-title {
  font-size: 48px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 5px;
  padding: 0 10px;
  text-align: center;
}

.subtitle {
  font-size: 26px;
  font-weight: 500;
  color: #7f8c8d;
  margin-bottom: 15px;
  padding: 0 10px;
  text-align: center;
}

/* Paragraphs */
.intro-text {
  font-size: 18px;
  line-height: 1.4;
  margin: 0 auto 20px;
  padding: 0 10px;
  text-align: center;
  max-width: 1000px;
}

/* Features Section */
.features-container {
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 
              0 6px 6px rgba(0, 0, 0, 0.1),
              inset 0 -2px 5px rgba(0, 0, 0, 0.05);
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transform: translateY(0);
  transition: all 0.3s ease;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.features-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 
              0 8px 8px rgba(0, 0, 0, 0.1),
              inset 0 -2px 5px rgba(0, 0, 0, 0.05);
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  max-width: 1000px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 12px;
  aspect-ratio: 1;
  text-align: center;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.feature-content {
  width: 100%;
  text-align: center;
}

.feature-content strong {
  display: block;
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 5px;
  text-align: center;
}

.feature-content p {
  margin: 0;
  color: #666;
  font-size: 14px;
  text-align: center;
  line-height: 1.3;
}

/* Icon styles */
.icon {
  font-size: 32px;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.feature-item:hover .icon {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Calculator icon */
.feature-item:nth-child(1) .icon {
  color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
}

/* Chart-pie icon */
.feature-item:nth-child(2) .icon {
  color: #2196F3;
  background: rgba(33, 150, 243, 0.1);
}

/* Chart-line icon */
.feature-item:nth-child(3) .icon {
  color: #9C27B0;
  background: rgba(156, 39, 176, 0.1);
}

/* Bullseye icon */
.feature-item:nth-child(4) .icon {
  color: #F44336;
  background: rgba(244, 67, 54, 0.1);
}

/* Lightbulb icon */
.feature-item:nth-child(5) .icon {
  color: #FFC107;
  background: rgba(255, 193, 7, 0.1);
}

/* Star icon */
.feature-item:nth-child(6) .icon {
  color: #FF9800;
  background: rgba(255, 152, 0, 0.1);
}

.section-title {
  font-size: 28px;
  margin-bottom: 15px;
  color: #2c3e50;
  font-weight: 600;
}

/* CTA section */
.cta-text {
  font-size: 26px;
  font-weight: bold;
  color: #e74c3c;
  margin: 30px 0 15px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cta-text .fa-rocket {
  color: #FF5722;
  margin-right: 10px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.cta-button {
  display: inline-block;
  padding: 15px 50px;
  background: linear-gradient(135deg, #27ae60, #219a52);
  color: white;
  font-size: 22px;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  margin: 5px auto 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3),
              inset 0 -2px 5px rgba(0, 0, 0, 0.1);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  background: linear-gradient(135deg, #2ebd6b, #27ae60);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(39, 174, 96, 0.4),
              inset 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
