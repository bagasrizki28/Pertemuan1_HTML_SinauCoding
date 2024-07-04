<template>
  <div class="container">
          <div class="left-section">
              <div class="text-content">
                  <h1>Welcome to Twitter</h1>
                  <p>Happening now, join twitter today</p>
              </div>
              <img src="./assets/images/Ilustrator.svg" alt="Woman with Laptop">
              <p class="copyright">@2020 Twitter, inc.</p>
          </div>
          <div class="right-section">
              <div class="login-box">
                  <img src="./assets/images//Logo Twitter.svg" alt="Twitter Logo" class="twitter-logo">
  
                  <h1>Log in to Twitter</h1>
                  <form>
                      <label for="account">Enter Twitter Account</label>
                      <input type="text" id="account" placeholder="Phone, email or username" required>
                      <input type="password" placeholder="Password" required>
                      <div class="forgot-password-container">
                          <a href="#" class="forgot-password">Forgot password?</a>
                      </div>
                      <button class="sign-in" type="submit">Sign In</button>
                  </form>
                  <div class="alternative-login">
                      <p>or</p>
                      <div class="inline-buttons">
                          <button class="google-signin"><img class="icon" src="./assets/images//Logo Google.svg"
                                  alt="Google Icon">Sign in
                              with
                              Google</button>
                          <button class="apple-signin"><img class="icon" src="./assets/images//Logo Apple.svg"
                                  alt="Apple Icon">Sign in
                              with
                              Apple</button>
                      </div>
                  </div>
                  <p>Dont have account? <a href="#" class="sign-up">Sign Up.</a></p>
              </div>
          </div>
      </div>
      
  </template>
  